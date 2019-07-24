import React from 'react'
import styles from './index.less';
import { Row, Col } from 'antd';
import WriteLeft from '../../components/writeleft/index'
import WriteMain from '../../components/writemain/index'
import WriteRight from '../../components/writeright/index'

class Write extends React.Component {
  render() {
    return (
      <div className={styles.write}>
        <Row gutter={16} className={styles.gutterExample}>

          <WriteLeft></WriteLeft>
          <Col className={styles.gutterRow} span={20}>
            <WriteMain></WriteMain>
            <WriteRight></WriteRight>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Write


