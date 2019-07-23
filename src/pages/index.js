import Homea from './home/index';
// import styles from './index.css';
import React, { Component } from 'react';
import Header from '../components/header/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />

        <Homea />
      </div>
    );
  }
}

export default Home;
