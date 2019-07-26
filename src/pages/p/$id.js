import React from 'react'
import styles from './index.less'
import { Icon, Comment, Avatar, Input, Button, message } from 'antd';
import { connect } from 'dva'
import axios from 'axios'


const { TextArea } = Input;
class ActiveInit extends React.Component {
  state = {
    activeDate: {},
    contentDate: '',
    commentList: {},
    havaData: false,
    commentTxt: ''
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
              <Avatar
                size={48} icon="user"
                src={this.state.activeDate.avatar}
              />
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
          {/* 渲染带标签的文章内容 */}
          <div className={styles.contentDate} dangerouslySetInnerHTML={{ __html: this.state.contentDate }}></div>
          {/* 评论 */}
          <div className={styles.comment}>
            {/* 发布评论 */}
            <div className={styles.issueComment}>
              <TextArea rows={4} placeholder='请输入你的看法' value={this.state.commentTxt} onChange={this.setComment} />
              <div className={styles.commentBtn}>
                <Button type="danger" block onClick={this.postComment}>
                  发布评论
                </Button>
              </div>
            </div>
            {/* 评论 */}
            <div className={styles.contentComment}>
              {this.state.havaData ? this.state.commentList.map(item => {
                return (
                  <div key={item._id}>
                    <Comment
                      datetime={item.retime}
                      author={<a>{item.author}</a>}  //评论者
                      avatar={                  //头像
                        <Avatar
                          size={36} icon="user"
                          src={item.avatar}
                          alt={item.author}
                        />
                      }
                      content={                 //评论内容
                        <p>
                          {item.content}
                        </p>
                      }

                    />
                  </div>
                )
              }) : 'loading'
              }



            </div>
          </div>
        </div>
      </div>
    )
  }
  removeHTMLTag = (str) => {   //删除 HTML 标签，获取内容
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
        this.props.getComment()
        this.filterComment()
      }).catch(error => {
      })
  }
  filterComment = () => {  //过滤评论
    axios.get('http://10.36.140.11:8080/api/comment')
      .then(response => {
        let list = response.data.data.list.filter(item => {
          return item.id === this.props.match.params.id
        })
        this.setState({ commentList: list })
        this.setState({ havaData: true })
      }
      )
  }
  setComment = (e) => {   //发布评论区
    this.setState({ commentTxt: e.target.value })
  }
  postComment = () => {
    if (this.state.commentTxt == '') {
      message.warning('请输入内容');
    }
    let time = new Date().toLocaleDateString() + new Date().toLocaleTimeString()  //获取评论时间
    let author = JSON.parse(window.localStorage.getItem('loginMethod')).nickname  //获取评论用户
    let id = this.props.match.params.id                                           //获取评论id
    let contentTxt = this.state.commentTxt                                        //获取评论内容
    let data = {
      id: id,   // 评论文章的id
      author: author,   // 评论人
      retime: time,   // 评论时间
      content: contentTxt   // 评论内容
    }
    axios.post('http://10.36.140.11:8080/api/comment', JSON.stringify(data))
      .then(response => {
        this.setState({ commentTxt: '' })
        this.props.getComment()
        this.filterComment()
        message.success('发布成功')
      }
      )
      .catch(error => {
        message.error('网络连接错误')
      }
      )
  }
}

export default connect(
  state => {
    return {
      commentList: state.article.commentList
    }
  }
  , {
    getComment: () => ({ type: 'article/getComment' }),
  }
)(ActiveInit)
