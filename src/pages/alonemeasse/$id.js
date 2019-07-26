import React from 'react';
import { Icon } from 'antd';
import style from './witer.less';
import { connect } from 'dva';
import NavLink from 'umi/navlink';


class Witer extends React.Component {
  constructor(props) {
    super()
    this.state = {

    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    var id = props.computedMatch.params.id || {};
    return {
      id,
      authorlist: props.UserList.find(item => item.nickname === id) || {},
      booklist: props.bookList
    }

  }
  render() {
    return (

      <div>
        <div className={style.content}>
        <div className={style.asdie}>
            <div className={style.jieshao}>
              <p>个人介绍</p>
              <p>极简主义者、ios工程师</p>
              <p>我的博客：https://andy0570.com</p>
              <p><Icon type="bank" /></p>
            </div>
            <div className={style.like}>
              <p><Icon type="codepen-circle" />他喜欢的专题/文集/连载</p>
              <p><Icon type="heart" />他喜欢的文章</p>
            </div>
            <div className={style.books}>
              <span>他创建的专题</span>
              <p className={ style.oneimg }><img src="https://upload.jianshu.io/collections/images/648001/Spinrilla.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />ulKit相关</p>
              <p><img src="https://upload.jianshu.io/collections/images/638087/illustration_apple_city_explore_map_kendrickkidd_1x.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" /> iOS动画绘图</p>
            </div>
            <div>
              <ul className={style.goodbook}>
                <li>他的文集</li>
                <li><span><Icon type="container" /></span><span>RESTful</span></li>
                <li><span><Icon type="container" /></span><span>Node.js 编程</span></li>
                <li><span><Icon type="container" /></span><span>JavaScript 编程</span></li>
                <li><span><Icon type="container" /></span><span> PKI & 密码学</span></li>
                <li><span><Icon type="container" /></span><span>HTML 编程</span></li>
                <li><span><Icon type="container" /></span><span>Linux</span></li>
                <li><span><Icon type="container" /></span><span>云计算</span></li>
                <li><span><Icon type="container" /></span><span>区块链</span></li>
              </ul>
            </div>
          </div>
          <div className={style.imgdiv}><a className={style.imgs}><img src={ this.state.authorlist.avatar } alt="" /></a></div>
          <div className={style.author}><a>{this.state.id}</a></div>
          <div className={style.guanzhu}>
            <ul>
              <li><span>82</span><p>关注 ></p></li>
              <li><span>281</span><p>粉丝 ></p></li>
              <li><span>346</span><p>文章 ></p></li>
              <li><span>41274</span><p>字数 ></p></li>
              <li><span>637</span><p>收获喜欢 ></p></li>
              <li><span>22</span><p>简书钻 ></p></li>
            </ul>
          </div>
          <div className={style.gongnong}> <a>发简信</a>  <a>+关注</a> </div>
          <div className={style.ullist}>
            <ul>
              <li><span><Icon type="solution" /></span><span>文章</span></li>
              <li><span><Icon type="bell" /></span><span>动态</span></li>
              <li><span><Icon type="copy" /></span><span>最新评论</span></li>
              <li><span><Icon type="area-chart" /></span><span>热门</span></li>
            </ul>
          </div>

          <div>
            <ul>
              { this.state.booklist.map(item => {
                 var str = item.data;
                 var strs = this.getStr(str)
                return (
                  <li key={item._id}>
                  <div className={style.contentli}>
                    <p><NavLink to={`/p/${ item._id }`}>{item.title}</NavLink></p>
                    <p className={style.conentasd}>{ strs }</p>
                    <p className={style.licontent}><span><Icon type="sketch" /></span><span>5.1</span><span><Icon type="eye" /></span><span>107</span><span><Icon type="calendar" /></span><span>1</span><span><Icon type="heart" /></span><span>6</span><span>07.13.22.56</span></p>
                  </div>
                  <div className={style.bookimg}>
                    <p><img src={item.avatar} alt="" /></p>
                  </div>
                </li>
                )
              }) }
             
            </ul>
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
)(Witer)
