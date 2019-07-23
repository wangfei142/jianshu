import React from 'react'
import { Col, Icon } from 'antd'
import styles from './index.less'
class WriteMain extends React.Component {
  render() {
    return (
      <Col span={8} className={styles.gutterRow}>
        <div className={styles.addTitle}>
          <Icon type="plus-circle" theme="filled" />
          <span>新建文章</span>
        </div>
        <ul className={styles.titleList}>
          <li className={styles.titleItem} >
            <Icon className={styles.titleListIcon} type="file-text" theme="filled" />
            <span>无标题文章</span>
          </li>
        </ul>
        <div className={styles.bottomAddTitle}>
          <Icon type="plus-circle" theme="filled" />
          <span>在下方新建文章</span>
        </div>
      </Col >
    )
  }
}

export default WriteMain;
