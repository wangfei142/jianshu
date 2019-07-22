import React from 'react'
import styles from './index.less'
import { Col } from 'antd';
import NavLink from 'umi/navlink'
import { Motion, spring } from 'react-motion'

const foldhidn = {
  overflow: 'hidden'
}
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
  render() {
    return (
      <Col className={styles.gutterRow} span={4}>
        <div className={styles.writeGoHome}>
          <NavLink to='/'>回首页</NavLink>
        </div>
        <div className={styles.writeAddCollected}>
          <FoldWrite></FoldWrite>
        </div>
        <ul className={styles.writeCollectedList}>
          <li></li>
        </ul>
      </Col>
    )
  }
}



export default WriteLeft
