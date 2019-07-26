import React from 'react';
import { Icon } from 'antd';
import styless from './collection.less';
// import Timeline from '../timeline/index.js'
import NavLink from 'umi/navlink';
import { connect } from 'dva'
import { Modal, Input } from 'antd';


class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      visible: false,
      list: [],
      id: ''
    }
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // console.log(e);
    var lists = [];
    console.log(this.refs.Value.state);
    console.log(this.props.bookList, this.props.list)
    this.props.bookList.map(item => {
      if (item.title.indexOf(this.refs.Value.state) < 0) {
        lists.push(item)
        console.log(lists);
      }
    })
    this.setState({
      list: lists
    })
    console.log(this.list);
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <span onClick={this.showModal}><a className={styless.tijiao}> 投稿</a></span>
        <Modal
          title="给该专题投稿"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>每篇文章有总共有5次投稿机会</p>
          <Input placeholder="搜索我的文章" ref='Value'></Input>
          <div>
            <div>

            </div>
          </div>
        </Modal>
      </div>
    );
  }
}


class Collection extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      // authorid: '',
      // authorlist: [],
      // booklist: []
    }
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    let authorid = props.computedMatch ? props.computedMatch.params.id : props.props;
    return {
      authorid,
      authorlist: props.UserList.find(item => item.nickname === authorid) || {},
      booklist: props.bookList
    } 
  }

  render() {
    // console.log('====================')
    // console.log(this.state);
    // console.log('====================')
    return (
      // author 介绍
      <div className={styless.xiangqing}>
        <div className={styless.contentsd}>
          <div>
            <div className={styless.authorImg}>
              <NavLink to={ `/alonemeasse/${this.state.authorlist.nickname}` } className={styless.headerImg}><img src={this.state.authorlist.avatar} alt="" /></NavLink>
            </div>
            <div className={styless.xiangxixinxi}>
              <p><NavLink to={ `/alonemeasse/${this.state.authorlist.nickname}` } > {this.state.authorlist.nickname}</NavLink></p>
              <p><span><a href="">简书</a></span><span> 编 · 收录了54355篇文章 · 2027595人关注</span></p>
            </div>

            <div>
              <div className={styless.authorOne}>
                <App bookList={this.props.bookList} list={this.state.id} />


                <span><NavLink  to={ `/author/${this.state.authorid}`}> 专题主页<i className={styless.ico}>></i></NavLink></span>
              </div>
            </div>
            {/* 选项卡 */}
            <div className={styless.xuanxiangka}>
              <ul>
                <li><span><Icon type="save" theme="filled" /></span><span>最新收录</span></li>
                <li><span><Icon type="switcher" theme="filled" /></span><span>最新评论</span></li>
                <li><span><Icon type="thunderbolt" theme="filled" /></span><span>热门</span></li>
              </ul>
            </div>
            <div>
              {/* <Timeline></Timeline>  */}
              <ul className={styless.xain}>
                {this.state.booklist.map(item => {
                  var str = item.data;
                  var strs = this.getStr(str)
                  return (
                    <li className={styless.atrico} key={item._id}>
                      <div>
                        <p className={styless.tiaozhuan}><NavLink to={`/p/${ item._id }`}>{item.title}</NavLink></p>
                        <p className={styless.contented}>{ strs }</p>
                        <p><span>{item.author}</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
                      </div>
                      <div className={styless.autohrImg}>
                        <img src={item.avatar} alt="" />
                      </div>
                    </li>
                  )
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.getArticle();
    this.props.getUser();
    
    // this.props.computedMatch.params.collection.split('collection')[0] ? this.props.computedMatch.params.collection.split('collection')[0] : ''
  }
  componentDidUpdate() {

  }
  getStr(msg){
    var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
    return msg;
  }
}


export default connect(

  (state) => {
    return {
      UserList: state.user.data,
      bookList: state.article.activeList,
    }
  },
  (dispatch) => {
    return {
      getArticle: () => {
        dispatch({
          type: 'article/getArticle'
        })
      },
      getUser: () => {
        dispatch({
          type: 'user/getUser',
        })
      }
    }
  },
)(Collection)

