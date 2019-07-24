import React from 'react';
import styles from './index.less';
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'dva';

class Timeline extends React.Component {
  render() {
    return (
      <div>
        {/* right div */}
        {/* <div className={styles.noteList}> */}
        <div className={styles.right}>
          <ul>
            {/* 每个li都是一块完整的作者文章 */}
            {this.props.bookList.map(item => {
              return (
                <li className={styles.rightLi} key={item._id}>
                  <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                  <div>
                    <div className={styles.title}>
                      <div className={styles.authors}> <a href="" className={styles.author}><img src={item.avatar} alt="" /></a></div>
                      <div>
                        <a href="" className={styles.likeTitle}>{item.author}</a>
                        <span className={styles.likeBook}>喜欢了文章 · {item.posted_time}</span>
                      </div>
                    </div>
                    <a href="" className={styles.testEnd}>{item.title}</a>
                    <p className={styles.liContents}>{item.data}</p>
                    <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />{item.hot}</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> {item.discuss}</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> {item.like}</span> </div>
                  </div>
                </li>
              )
            })}


            {/* <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li>

              <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li>

              <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li>

              <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li>

              <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li>

              <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li>

              <li className={styles.rightLi}>
                <a href="" className={styles.log}><img src="https://upload-images.jianshu.io/upload_images/2257137-a77743820dde5e19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" /></a>
                <div>
                  <div className={styles.title}>
                    <div className={styles.authors}> <a href="" className={styles.author}><img src="https://upload.jianshu.io/users/upload_avatars/2257137/2f5807dc-47a5-43f7-b1f1-6607bd243702.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="" /></a></div>
                    <div>
                      <a href="" className={styles.likeTitle}>四小七</a>
                      <span className={styles.likeBook}>喜欢了文章 · 07.10 23:40</span>
                    </div>
                  </div>
                  <a href="" className={styles.testEnd}>面试题总结</a>
                  <p className={styles.liContents}>变量age被定义为NSInteger，它编译时没有问题……但为什么会crash？ NSInteger的默认值：https://blog...</p>
                  <div className={styles.bottom}><div><a href="/u/6026759b112a" target="_blank">Figo_OU</a></div> <a href="/p/1629bb9416fd#comments" target="_blank" className={styles.liuyan}><Icon type="form" />11</a><a><i ><Icon type="sketch-circle" theme="filled" /></i> 0</a> <span className={styles.dashang}><i ><Icon type="property-safety" theme="filled" /></i> 1</span> </div>
                </div>
              </li> */}

          </ul>
        </div>
        {/* </div>  */}
      </div>
    )
  }

  componentDidMount() {
    this.props.getArticle();
    // setTimeout(
    //   asd => {
    //     console.log(this.props.bookList)
    //   }
    //   , 1000
    // )

  }

}

export default connect(

  state => {
    return {
      bookList: state.article.activeList
    }
  },
  dispatch => {
    return {
      getArticle: () => {
        dispatch({
          type: 'article/getArticle'
        })
      }
    }
  }

)(Timeline)
