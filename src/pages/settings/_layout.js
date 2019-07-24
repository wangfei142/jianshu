import React, { Component } from 'react';
import styles from "./index.less"
import Settings from '../../components/settings/index'
class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={styles._settings_content}>
        <div className={styles._settings_left}>
          <Settings />
        </div>
        <div className={styles._settings_right}>
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default Personal;
