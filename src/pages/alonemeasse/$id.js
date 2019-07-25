import React from 'react';
import { Icon } from 'antd';
import style from './witer.less';

export default class Witer extends React.Component {
  render() {
    return (

      <div>
        <div className={style.content}>
          <div><p className={style.imgs}><img src="https://upload.jianshu.io/users/upload_avatars/9028759/34271572-fac4-4699-99f0-bedf1de06c6f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="" /></p></div>
          <div className={style.author}>
            <p className={style.authors}><span>大猪大猪</span><span className={style.sex}><Icon type="user-delete" /></span></p>
            <p>
              <div className={style.aside}>
                <p ><span className={style.font}>3</span><span>关注></span></p>
                <p className={style.look}><span className={style.font}>2855</span><span>粉丝></span></p>
                <p className={style.looks}><span className={style.font}>1327</span><span>文章></span></p>
                <p><span className={style.font}>2755565</span><span>字数></span></p>
                <p><span className={style.font}>5601</span><span>收获喜欢</span></p>
                <p><span className={style.font}>0</span><span>简书钻></span></p>
              </div>
            </p>
          </div>
          <div className={style.tijiao}>
            <span><a href="">发简信</a></span>
            <span><a href="">关注</a></span>
          </div>
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
              <li>
                <div className={style.contentli}>
                  <p>Dl4j - CSV数据转换</p>
                  <p className={style.conentasd}>
                    准备数据 转换 输出结果</p>
                  <p className={style.licontent}><span><Icon type="sketch" /></span><span>5.1</span><span><Icon type="eye" /></span><span>107</span><span><Icon type="calendar" /></span><span>1</span><span><Icon type="heart" /></span><span>6</span><span>07.13.22.56</span></p>
                  </div>
                  <div>
                    <p><img src="https://upload-images.jianshu.io/upload_images/9028759-07315bb8dadcd082.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}
