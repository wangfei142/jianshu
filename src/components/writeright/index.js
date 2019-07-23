import React from 'react';
import styles from './index.less'
import { Col, Button, message } from 'antd'
import { connect } from 'dva'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { dispatch } from 'C:/Users/Shinelon/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';
import axios from 'axios'

class WriteRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      text: '',
      activeTitle: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
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
          <ReactQuill theme="snow"
            modules={this.modules}  //调用方法
            formats={this.formats}  //调用官方组件
            onChange={this.handleChange}  //事件函数
          >
          </ReactQuill>
        </div>
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
    let data = {
      author: '李金益',
      title: this.state.activeTitle,
      data: this.state.text,
      posted_time: time
    }
    axios.post('http://10.36.140.11:8080/api/article', JSON.stringify(data))
      .then(response => {
        this.setState({ loading: !this.state.loading })
        message.success('发布成功');
        this.props.getActiveList()   //重新get 仓库列表
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


