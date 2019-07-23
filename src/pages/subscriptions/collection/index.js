import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import styles from '../index.less';
import styless from './index.less';
// import Timeline from '../timeline/index.js'
import { Modal, Input } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
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
          <Input placeholder="搜索我的文章"></Input>
          <div>

          </div>
        </Modal>
      </div>
    );
  }
}


export default class Collection extends React.Component {
  render() {
    return (
      // author 介绍
      <div className={styless.xiangqing}>
        <div className={styless.contentsd}>
          <div>
          <div className={styless.authorImg}>
            <a href="" className={styless.headerImg}><img src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240/format/webp" alt="" /></a>
          </div>
          <div className={styless.xiangxixinxi}>
            <p>@IT.互联网</p>
            <p><span><a href="">简书</a></span><span> 编 · 收录了54355篇文章 · 2027595人关注</span></p>
          </div>
          <div className={styless.authorOne}>
            <App />
            <span><a href=""> 专题主页<i className={styless.ico}>></i></a></span>
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
            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>

            <li className={styless.atrico}>
            <div>
              <p>三种人学不好编程</p>
              <p className={styless.contented}>很多人都觉得编程入门特别难，特别在刚开始的时候，敢问切入一个新的行业不付出点努力，不坚持下不深刻的挖掘下自己的潜力，都会觉得难得不行。...</p>
              <p><span>东辉在线</span><span><Icon type="form" /></span><span>27</span><span><Icon type="sketch-circle" theme="filled" /></span><span>33</span></p>
            </div>
            <div className={styless.autohrImg}>
              <img src="https://upload-images.jianshu.io/upload_images/445173-b9c094c38e3b91ca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt=""/>
            </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}
