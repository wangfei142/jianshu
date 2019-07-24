// 左侧菜单组件
import React, { Component } from 'react';
import styles from './index.less';
import { Icon } from 'antd';
import { connect } from 'dva';
import Banner from './banner'
import imgtushu from '../../assets/wzhangru.jpg';
import Navlink from 'umi/navlink';

class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ul className={styles._header_list}>
          <Banner />
          {this.props.activeList.map(item => {
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
        <button className={styles._rigntlist_button}>阅读更多</button>
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
