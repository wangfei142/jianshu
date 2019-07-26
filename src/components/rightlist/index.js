import React, { Component } from 'react';
import styles from './index.less';
import copyright from '../../assets/homeimg/copyright.png';
import member from '../../assets/homeimg/member.png';
import school from '../../assets/homeimg/school.png';
import serialize from '../../assets/homeimg/serialize.png';
import code from '../../assets/homeimg/code.png';
import Navlink from 'umi/navlink';
import { Popover, Icon } from 'antd';
import { connect } from 'dva';

//弹出的二维码
const content = (
  <div>
    <img src={code} alt="" />
  </div>
);
class Rightlits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      //四张大图
      <div className={styles.rightlits}>
        <div>
          <ul className={styles._rightimg}>
            <li>
              <Navlink to="/">
                <img src={copyright} alt="" />
              </Navlink>
            </li>
            <li>
              <Navlink to="/">
                <img src={member} alt="" />
              </Navlink>
            </li>
            <li>
              <Navlink to="/">
                <img src={school} alt="" />
              </Navlink>
            </li>
            <li>
              <Navlink to="/">
                <img src={serialize} alt="" />
              </Navlink>
            </li>
          </ul>
        </div>
        <div>
          <Popover content={content} overlayClassName="rightimgtu" trigger="hover">
            <dl className={styles._rightCode}>
              <dt>
                <img src={code} alt="" />
              </dt>
              <dd>
                <h2>制作不易！感谢打赏！</h2>
                <span>感谢各位大佬的打赏！</span>
              </dd>
            </dl>
          </Popover>
        </div>

        <div className={styles._rightlist_data}>
          <div className={styles._rightlist_title}>
            <span>推荐作者</span>
            <a>
              <Icon type="reload" /> &nbsp;换一批
            </a>
          </div>
          <div className={styles._rightlist_title_list}>
            <ul>
              {//li 假数据渲染的地方
                this.props.userlist.map(item => {
                return (
                  <li key={item._id} className={styles.rightlits_list}>
                    <img src={item.avatar} alt="" />
                    <div className={styles._rightlist_contert}>
                      <h2>{item.nickname}</h2>
                      <p>
                        书写了32k字 · 喜欢443k
                      </p>
                    </div>
                    <span>
                      <Icon type="plus" />
                      &nbsp;关注
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className={styles._rigntlist_button}>加载更多 > </button>
        </div>
      </div>
    );
  }
  listdata(data) {
    console.log(1);
    console.log(data);



  }

  componentDidMount() {
    this.props.getUser();
  }
}

export default connect(
  // //向仓库拿数据

  state => {
    return {
      userlist: state.user.data,
    };
  },
  (dispatch) => {
    return {
      getUser:() =>{
        dispatch({
          type:'user/getUser',
        })
      }
    }
  }
)(Rightlits);
