import React from 'react'
import styles from './index.less'
import { Icon } from 'antd';


class ActiveInit extends React.Component {
  render() {
    return (
      <div className={styles.aiLayout}>
        <div className={styles.aiContent}>
          <h1>前端小试身手所</h1>
          <div className={styles.author}>
            <a href="#" className={styles.avatar}>
              <img src="https://upload.jianshu.io/users/upload_avatars/9764806/ca9471b9-2962-4050-b333-8a2418ad0245.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="" />
            </a>
            <div className={styles.aiInfo}>1231</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ActiveInit
