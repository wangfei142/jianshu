import axios from 'axios';
import React from 'react';
import style from './detail.less';
import { Icon } from 'antd';


export default class Asd extends React.Component{
  render(){
    return (
      <div>
        <div className={style.content}>
          <div className={style.center}>
                <h1>废柴江湖第8季小说组7号| 被“小三”了？</h1>
          </div>
          <div className={style.author}>
            <div className={style.authorimg}>
              <a href=""><img src="https://upload.jianshu.io/users/upload_avatars/9764806/ca9471b9-2962-4050-b333-8a2418ad0245.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/></a>
            </div>
            <div className={style.title}>
              <p>格乃</p>
              <span className={style.titles}><i><Icon type="sketch" /></i><i>47.1</i></span>
            </div>
            <div className={style.meassage}>
              <p><img src="https://upload.jianshu.io/user_badge/5203a3bf-1c0f-41db-a6f0-31ddb4a929cb" alt=""/><span className={style.guanzhu}><Icon type="plus" />关注 </span></p>
             <p><span>2019.07.16 00:26*</span><span>字数 2569</span><span>阅读 2049</span><span>评论 76</span><span>喜欢 65</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

