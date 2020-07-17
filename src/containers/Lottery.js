import React, { Component } from 'react';
import Ball from './../components/Ball';

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery"
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
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