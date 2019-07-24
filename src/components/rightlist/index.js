import React, { Component } from 'react';
import styles from './index.less';
import copyright from '../../assets/homeimg/copyright.png';
import member from '../../assets/homeimg/member.png';
import school from '../../assets/homeimg/school.png';
import serialize from '../../assets/homeimg/serialize.png';
import code from '../../assets/homeimg/code.png';
import Navlink from 'umi/navlink';
import { Popover, Icon, } from 'antd';
import { connect } from "dva"

//弹出的二维码
const content = (
  <div>
    <img src={code} alt="" />
  </div>
);

//假数据
const datalist = [
  { id: "1", img: member, author: '熊大', like: "2342", write: "231" },
  { id: "2", img: copyright, author: '熊爱的', like: "2322", write: "231" },
  { id: "3", img: school, author: '熊阿三', like: "2352", write: "221" },
  { id: "4", img: serialize, author: '熊汝父', like: "23662", write: "231" },
  { id: "5", img: member, author: '熊等等', like: "2432", write: "21" },
  { id: "6", img: copyright, author: '熊特人', like: "23212", write: "231" },

]

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
          <Popover content={content}
            overlayClassName="rightimgtu"
            trigger="hover"
          >
            <dl className={styles._rightCode}>
              <dt>
                <img src={code} alt="" />
              </dt>
              <dd>
                <h2>下载简书手机App</h2>
                <span>随时随地发现和创作内容</span>
              </dd>
            </dl>
          </Popover>
        </div>

        <div className={styles._rightlist_data}>
          <div className={styles._rightlist_title}>
            <span>推荐作者</span>
            <a ><Icon type="reload" /> &nbsp;换一批</a>
          </div>
          <div className={styles._rightlist_title_list}>
            <ul>
              {
                //li 假数据渲染的地方
                datalist.map(item => {
                  return (
                    <li key={item.id} className={styles.rightlits_list}>
                      <img src={item.img} alt="" />
                      <div className={styles._rightlist_contert}>
                        <h2>{item.author}</h2>
                        <p>书写了{item.write}k字 · 喜欢{item.like}k</p>
                      </div>
                      <span><Icon type="plus" />&nbsp;关注</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          < button className={styles._rigntlist_button}>加载更多 > </button>
        </div>
      </div>
    );
  }
}

export default connect(
  // //向仓库拿数据
  // (state, action) => {
  //   return
  // },
  // //向仓库发送方法
  // (state) => {
  //   return
  // },
)(Rightlits);
