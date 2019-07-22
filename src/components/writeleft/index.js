import React from 'react'
import styles from './index.less'
import { Col, Collapse, Panel, Icon } from 'antd';
import NavLink from 'umi/navlink'
class WriteLeft extends React.Component {
  render() {
    return (
      <Col className={styles.gutterRow} span={4}>
        <div className={styles.writeGoHome}>
          <NavLink to='/'>回首页</NavLink>
        </div>
      </Col>
    )
  }
}



export default WriteLeft
