import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import styles from '../index.less';
import styless from './index.less';
import Timeline from '../timeline/index.js'



export default class Collection extends React.Component{
  render(){
    return (
      // author 介绍
      <div className={styless.xiangqing}>
          <div className={styless.contentsd}>
            <div className={styless.authorImg}>
                <a href="" className={styless.headerImg}><img src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240/format/webp" alt=""/></a>
            </div>
            <div className={styless.xiangxixinxi}>
                <p>@IT.互联网</p>
                <p><span><a href="">简书</a></span><span> 编 · 收录了54355篇文章 · 2027595人关注</span></p>
            </div>
            <div className={ styless.authorOne}>
                <span><a href="">投稿</a></span>
                <span><a href=""> 专题主页</a></span>
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
          <Timeline></Timeline> 
          </div>
      </div>
    )
  }
}
