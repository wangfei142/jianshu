import React from 'react'
import WriteLeft from '../../components/writeleft/index'
import styles from './index.less';
import { Row, Col } from 'antd';



class Write extends React.Component {
  render() {
    return (
      <div className={styles.write}>
        <Row gutter={16} className={styles.gutterExample}>

          <WriteLeft></WriteLeft>

          <Col className="gutter-row" span={20}>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Write


