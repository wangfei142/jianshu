import React, { Component } from 'react';
import { connect } from 'dva';
import Layout from '../subscriptions/_layout';
import styles from './index.less'
import { Icon } from 'antd';
import Navlink from 'umi/navlink';
import imgtushu from '../../assets/wzhangru.jpg';

class Cketch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles._search_top} >
        <div>
          <Layout />
        </div>
        <div>
          <ul className={styles._header_list}>
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

        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      activeList: state.article.activeList
    };
  },
  null,
)(Cketch);
