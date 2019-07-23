import Collection from '../collection/index.js';
import React from 'react';
import style from './index.less'
import { Icon, Divider } from 'antd'

export default class Author extends React.Component {
  render() {
    return (
      <div>
        <div className={style.left}><Collection></Collection></div>
        <div className={style.right}>
          <div className={style.title}>
            <p>专题公告</p>
            <div className={style.jianyi}>
              <p>如果你是程序员，或者有一颗喜欢写程序的心，喜欢分享技术干货、项目经验、程序员日常囧事等等，欢迎投稿《程序员》专题。</p>
              <p>专题主编：小彤花园
                <a href="">http://www.jianshu.com/users/4a4eb4feee62/</a>
              </p>
              <p>【程序员】专题拒稿指北：
                <a href="">http://www.jianshu.com/p/7c8b33b5f63b</a>
              </p>
              <p>
                投稿须知： </p>
                <p>   1.收录相关技术文章，但不限于技术，也可以是项目经验类的文章和程序员日常。</p>
             
               
                 <p> 2.文章內不得有任何推广信息。包括但不限于公众号、微博、微信，更不得在通过投稿后再修改文章加入推广信息。你可以将这些推广以及个人信息放在个人主页介绍里。</p>
             <p>3.字数极少，段落混乱，大段代码没有放到代码框的文章不收录</p>
              <p>4.不相关的内容不收录，请确认文章内容和本专题相关</p>
              <p>目前简书针对优质作者及爱好者，开设了官方程序员微信群，希望加入请发简信给主编小彤花园索取个人微信，主编会将你加入到【简书-程序员】微信群，分享内容，收获知识。添加微信时备注[简书ID]。</p>
              <p className={style.shouqi}>收起描述<span>></span></p>
            </div>
            <div className={style.lianjie}>
              <span>分享到</span>
              <a href=""><Icon type="wechat" /></a>
              <a href=""><Icon type="weibo-circle" /></a>
              <a href=""><Icon type="ellipsis" /></a>
            </div>
            <div className={style.admin}>
              <p>管理员</p>
              <ul>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/259/5210859b-fc54-4cf8-908f-830f0237926a.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">简书</a><span>创建者</span></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
                <li><a href=""><img src="https://upload.jianshu.io/users/upload_avatars/196894/99323ae8-5924-4730-b73f-9d0d284ff243.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a><a href="">小彤花园</a></li>
              </ul>
                
              <p className={style.open}> <a>展开</a><i><Icon type="down" /></i> </p>
            </div>
            
            </div>
            <div>
              
            <div className={style.goodauthor}>
                推荐作者(30)<i><Icon type="question" /></i>
            </div>
            <ul className={style.thinkgood}>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg" alt=""/></a></li>
              <li><a href=""><i><Icon type="small-dash" /></i></a></li>
            </ul>
          </div>
          <div>
            <div>
              <p>关注的人(12231)</p>
              <div className={style.lookperson}>
                <ul>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><img src="https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg" alt=""/></a></li>
                  <li><a href=""><i><Icon type="small-dash" /></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

