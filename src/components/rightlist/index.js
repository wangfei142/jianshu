import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import copyright from '../../assets/homeimg/copyright.png';
import member from '../../assets/homeimg/member.png';
import school from '../../assets/homeimg/school.png';
import serialize from '../../assets/homeimg/serialize.png';
import code from '../../assets/homeimg/code.png';
import Navlink from 'umi/navlink';


class Rightlits extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={styles.rightlits}>
        <div>
          <ul className={styles._rightimg}>
            <li>
              <Navlink to='/'>
                <img src={copyright} alt="" />
              </Navlink>
            </li>
            <li>
              <Navlink to='/'>
                <img src={member} alt="" />
              </Navlink>
            </li>
            <li>
              <Navlink to='/'>
                <img src={school} alt="" />
              </Navlink>
            </li>
            <li>
              <Navlink to='/'>
                <img src={serialize} alt="" />
              </Navlink>
            </li>
          </ul>
        </div>
        <div>
          <dl className={styles._rightCode}>
            <dt><img src={code} alt="" /></dt>
            <dd><h2></h2>
              <p></p></dd>
          </dl>
        </div>
      </div>

    );
  }
}

export default Rightlits;

