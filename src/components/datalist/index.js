// 左侧菜单组件
import React, { Component } from 'react';
import styles from './index.less';
import { Icon } from 'antd';
import { connect } from 'dva';
import Banner from './banner'
import imgtushu from '../../assets/wzhangru.jpg';
import Navlink from 'umi/navlink';
import { message } from 'antd';
class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: [],
      index: 1
    };
  }
  render() {

    return (
      <div>
        <ul className={styles._header_list}>
          <Banner />
          {this.props.activeList.slice(0, this.state.index * 5).map(item => {
            return (
              <li key={item._id}>
                <div>
                  <Navlink
                    to={"/p/" + item._id}
                    onClick={() => {
                      this.props.header_title(item.id);
                    }}
                  >
                    {item.title}
                  </Navlink>
                  <p>{this.removeHTMLTag(item.data)}</p>
                  <div>
                    <span>
                      <Icon type="sketch" />
                      &nbsp;{item.hot}
                    </span>
                    <span>
                      <a href="#">{item.author}</a>{' '}
                    </span>
                    <span>
                      <Icon type="message" />
                      &nbsp;{item.discuss}
                    </span>
                    <span>
                      <Icon type="like" />
                      &nbsp;{item.like}
                    </span>
                  </div>
                </div>
                <div className={styles._hesder_img}>
                  <a href="#" className={styles._hesder_img}>
                    <img src={imgtushu} alt="" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
        <button className={styles._rigntlist_button} onClick={() => {
          this.addactiveList()
        }}>阅读更多</button>
      </div>
    );
  }
  removeHTMLTag = (str) => {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/ /ig, '');//去掉
    return str;
  }
  componentWillMount() {
    this.props.getArticle()
  }

  addactiveList = () => {
    this.setState({
      index: this.state.index + 1,
      activeList: this.props.activeList.slice(0, this.state.index * 5),
    })
    if (this.state.activeList.length === this.props.activeList.length) {
      message.info('没有更多文章了')
    }
  }
}

export default connect(
  state => {
    return {
      activeList: state.article.activeList
    }
  }
  ,
  //向仓库传方法
  {
    header_title: tableDataId => ({ type: 'article/tableDataOperation', tableDataId }),
    getArticle: () => ({ type: 'article/getArticle' })
  },

)(SubjectList);
