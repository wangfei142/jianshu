// 左侧菜单组件
import React, { Component } from 'react';
import styles from './index.less';
import { Icon } from 'antd';
import { connect } from 'dva';
import Banner from './banner'
import imgtushu from '../../assets/wzhangru.jpg';
import Navlink from 'umi/navlink';

const listdata = [
  {
    id: 1,
    title: '一次linux被入侵经历',
    data:
      '现在很多外媒都争相报道英国王室，然而很多时候看到的只是王室的表面新闻，其实有很多的内幕都是人们所不熟知的。就比如说在年末梅根置装费问题闹的沸',
    hot: '13.3',
    author: '夜里袅袅',
    discuss: '223',
    like: '22',
  },
  {
    id: 2,
    title: '王室高级保姆透露：凯特王妃衣服多到装不下，大都没录入王室总账',
    data:
      '现在很多外媒都争相报道英国王室，然而很多时候看到的只是王室的表面新闻，其实有很多的内幕都是人们所不熟知的。就比如说在年末梅根置装费问题闹的沸',
    hot: '11.3',
    author: '夜里袅袅',
    discuss: '24',
    like: '223',
  },
  {
    id: 3,
    title: '”一个人的格局，就看他因为什么事生气',
    data:
      '为多大的事生气就有多大的格局，有一次，我陪老板出去吃饭，一桌人等着一个客户，过了好一会儿人才匆匆赶来。原来，他在停车场找的车位很挤，是在两车中间...',
    hot: '23',
    author: '夜里袅袅',
    discuss: '22423',
    like: '3',
  },
  {
    id: 4,
    title: '七个月的简单生活',
    data:
      '自从半年前开始被极简洗脑之后，捐赠了三麻袋的衣服，飞蚂蚁上门取件。 半年没买衣服，半年后入了两件羽绒服和一条呢裤。打开衣柜，从之前的乱七八糟到现...',
    hot: '223',
    author: '夜里袅袅',
    discuss: '2233',
    like: '211',
  },
  {
    id: 5,
    title: '昆仑仙派珍藏的八千字道德经（收藏）',
    data:
      '昆仑仙派珍藏的八千字道德经（收藏） 道德经千百年以来，被后人视为一部经典之作，千百年研究和应用，体会者不泛数人。 道德经是开启自然的密码，以道行...',
    hot: '42',
    author: '夜里袅袅',
    discuss: '33',
    like: '2231',
  },
  {
    id: 6,
    title: '昆仑仙派珍藏的八千字道德经（收藏）',
    data:
      '昆仑仙派珍藏的八千字道德经（收藏） 道德经千百年以来，被后人视为一部经典之作，千百年研究和应用，体会者不泛数人。 道德经是开启自然的密码，以道行...',
    hot: '42',
    author: '夜里袅袅',
    discuss: '33',
    like: '2231',
  },
  {
    id: 7,
    title: '昆仑仙派珍藏的八千字道德经（收藏）',
    data:
      '昆仑仙派珍藏的八千字道德经（收藏） 道德经千百年以来，被后人视为一部经典之作，千百年研究和应用，体会者不泛数人。 道德经是开启自然的密码，以道行...',
    hot: '42',
    author: '夜里袅袅',
    discuss: '33',
    like: '2231',
  },
];

class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //失败路由无法跳转
  // header_title(data) {
  //   console.log(data);
  // }

  render() {
    return (
      <div>
        <ul className={styles._header_list}>     
        <Banner />    
          {listdata.map(item => {
            return (
              <li key={item.id}>
                <div>
                  <Navlink
                    to="cketch"
                    onClick={() => {
                      this.props.header_title(item.id);
                    }}
                  >
                    {item.title}
                  </Navlink>
                  <p>{item.data}</p>
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
}

export default connect(
  null,
  //向仓库传方法
  {
    header_title: tableDataId => ({ type: 'article/tableDataOperation', tableDataId }),
  },

)(SubjectList);
