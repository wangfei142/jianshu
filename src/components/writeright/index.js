import React from 'react';
import styles from './index.less'
import { Col, Button, message } from 'antd'
import { connect } from 'dva'
import axios from 'axios'
import router from 'umi/router'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'


class WriteRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: '',
      loading: false,
      activeTitle: '',
    }
  }


  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }




  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ]
  render() {
    return (
      <Col span={16} className={styles.gutterRow}>
        <div>
          <input type="text" value={this.activeTitle} onChange={this.handleChgTitle} className={styles.titleInpuut} />
        </div>
        <div className={styles.quillTxt}>
          <BraftEditor
            value={this.state.editorState}
            onChange={this.handleEditorChange}
          />
        </div>
        <div></div>
        <Button type="primary" block onClick={this.setActive} loading={this.state.loading}>
          发布文章
        </Button>
      </Col>
    )
  }
  setActive = () => {   //发送文章请求
    if (this.state.activeTitle == '' || this.state.text == '') {
      message.warning('请输入内容');
      return
    }
    this.setState({ loading: !this.state.loading })
    let time = new Date().toLocaleDateString() + new Date().toLocaleTimeString()
    let author = JSON.parse(window.localStorage.getItem('loginMethod')).nickname
    console.log(author)
    let data = {
      author: author,
      title: this.state.activeTitle,
      data: this.state.editorState.toHTML(),
      posted_time: time
    }
    console.log(data)
    axios.post('http://10.36.140.11:8080/api/article', JSON.stringify(data))
      .then(response => {
        this.setState({ loading: !this.state.loading })
        message.success('发布成功');
        this.props.getActiveList()   //重新get 仓库列表
        router.push('/')
      }).catch(error => {
        this.setState({ loading: !this.state.loading })
        message.error('网络连接错误');
      })
  }


  handleChgTitle = (e) => {
    let value = e.currentTarget.value
    this.setState({ activeTitle: value })
  }
}


export default connect(
  null, {
    getActiveList: () => ({ type: 'article/getActiveList' })
  }
)(WriteRight)


