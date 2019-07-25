import React from 'react'
import styles from './index.less'
import { Icon } from 'antd';
import { connect } from 'dva'
import axios from 'axios'

class ActiveInit extends React.Component {
  state = {
    activeDate: {},
    contentDate: ''
  }
  render() {
    return (
      <div className={styles.aiLayout}>
        <div className={styles.aiContent}>
          <h1>{this.state.activeDate.title}</h1>
          {/* 文章作者及文章信息 */}
          <div className={styles.author}>
            {/* 头像 */}
            <a href="#" className={styles.avatar}>
              <img src={this.state.activeDate.avatar} alt="" />
            </a>
            <div className={styles.authorRigth}>
              {/* 昵称lv与按钮 */}
              <div className={styles.aiInfo}>
                <span>{this.state.activeDate.author}</span>
                <img src="//upload.jianshu.io/user_badge/b67c298d-f020-4f89-aac6-0710bc0709ec" alt="" />
                <i>+关注</i>
              </div>
              {/* 文章信息 */}
              <div className={styles.meta}>
                <span><Icon type="sketch" />{this.state.activeDate.hot}</span>
                <span>{this.state.activeDate.posted_time}</span>
                <span>字数 {this.removeHTMLTag(this.state.contentDate)}</span>
                <span>阅读 0</span>
                <span>评论 {this.state.activeDate.discuss}</span>
                <span>喜欢 {this.state.activeDate.like}</span>
              </div>
            </div>
          </div>
          <div className={styles.contentDate} dangerouslySetInnerHTML={{ __html: this.state.contentDate }}></div>
        </div>

      </div>
    )
  }
  removeHTMLTag = (str) => {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/ /ig, '');//去掉
    return str.length;
  }
  componentWillMount() {
    //请求获取文章内容
    let id = this.props.match.params.id
    axios.get(`http://10.36.140.11:8080/api/article/${id}`)
      .then(response => {
        this.setState({ activeDate: response.data.data })
        this.setState({ contentDate: response.data.data.data })
      }).catch(error => {
        console.log(1)
      })
  }
}

export default connect()(ActiveInit)
