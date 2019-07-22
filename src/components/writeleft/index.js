import React from 'react'
import styles from './index.less'
import { Col, Icon, Popover, Modal, Button } from 'antd';
import NavLink from 'umi/navlink'
import { Motion, spring } from 'react-motion'

const foldhidn = {
  overflow: 'hidden'
}
const content = (
  <ul>
    <li className={styles.popoverItem}><Icon type="form" /><span>修改文集</span></li>
    <li className={styles.popoverItem}><Icon type="delete" /><span>删除文集</span></li>
  </ul>
)
const contentSet = (
  <ul>
    <li className={styles.popoverItem}><Icon type="form" /><span>默认编辑器</span></li>
    <li className={styles.popoverItem}><Icon type="form" /><span>设置显示模式</span></li>
    <li className={styles.popoverItem}><Icon type="form" /><span>回收站</span></li>
    <li className={styles.popoverItem}><Icon type="form" /><span>帮助与反馈</span></li>
  </ul>
)
//新建文集 显示隐藏动画组件
class FoldWrite extends React.Component {
  state = {
    height: 0
  }
  animate = () => {
    console.log(1)
    this.setState((state) => ({ height: state.height === 0 ? 70 : 0 }))
  }
  render() {
    return (
      <div className={styles.foldWrite}>
        <span className={styles.foldtitle} onClick={this.animate}>+新建文集</span>
        <Motion style={{ height: spring(this.state.height) }}>
          {
            ({ height }) => <div style={Object.assign({}, foldhidn, { height })}>
              <input type="text" placeholder='请输入文集名' className={styles.foldInput} />
              <div className={styles.foldBotton}>
                <button className={styles.foldSubim}>提交</button>
                <button className={styles.foldCancel} onClick={this.animate}>取消</button>
              </div>
            </div>
          }
        </Motion>
      </div>
    )
  }
}
//写文章页面左
class WriteLeft extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <Col className={styles.gutterRow} span={4}>
        <div className={styles.writeGoHome}>
          <NavLink to='/'>回首页</NavLink>
        </div>
        <div className={styles.writeAddCollected}>
          <FoldWrite></FoldWrite>
        </div>
        {/* 气泡卡片 */}
        <ul className={styles.writeCollectedList}>
          <li>
            <span className={styles.writeTitle}>日记本</span>
            <Popover placement="bottomRight" content={content} trigger="click">
              <div className={styles.writeSet}><Icon type="small-dash" /></div>
            </Popover>
          </li>
          <li>
            <span>日记本</span>
          </li>
        </ul>
        <div className={styles.writeLeftFoot}>
          <Popover placement="topLeft" content={contentSet} trigger="click">
            <span className={styles.writeLeftFootSet}><Icon type="unordered-list" /><span>设置</span></span>
          </Popover>

          <span className={styles.writeLeftFootTo} onClick={this.showModal}><span>遇到问题</span><Icon type="question" /></span>
          <Modal
            title="常见问题"
            visible={this.state.visible}
            onOk={this.handleOk}
            footer={[
              <Button type="primary" onClick={this.handleOk}>
                我知道了
              </Button>,
            ]}
          >
            <p>如果你在使用编辑器的过程中遇到问题，可以尝试以下方案解决：</p>
            <p>1. Windows用户尽量将浏览器设置为极速模式，不要使用兼容模式写作</p>
            <p>2.推荐使用chrome浏览器，创作体验更加流畅</p>
            <p>3.浏览器插件可能与编辑器功能冲突，可以在使用编辑器时禁用插件</p>
          </Modal>
        </div>
      </Col>
    )
  }
}



export default WriteLeft
