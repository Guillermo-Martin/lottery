import React, { Component } from 'react';
import Ball from './../components/Ball';

class Lottery extends Component {
  render() {
    return (
      <div>
        <h1>Lottery</h1>
        <Ball />
        <Ball />
        <Ball />
        <Ball />
        <Ball />
        <Ball />
      </div>
    );
  }
}

export default Lottery;