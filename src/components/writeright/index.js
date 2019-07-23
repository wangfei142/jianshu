import React from 'react';
import styles from './index.less'
import { Col, Button } from 'antd'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

class WriteRight extends React.Component {

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
          <input type="text" className={styles.titleInpuut} />
        </div>
        <div className={styles.quillTxt}>
          <ReactQuill theme="snow"
            modules={this.modules}  //调用方法
            formats={this.formats}  //调用官方组件
            onChange={this.handleChange}  //事件函数
          >
            <div className={styles.quillInput}></div>
          </ReactQuill>
        </div>
        <Button type="primary" block>
          发布文章
        </Button>
      </Col>
    )
  }
}
export default WriteRight
