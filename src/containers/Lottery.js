import React, { Component } from 'react';
import Ball from './../components/Ball';

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery"
  }

  render() {
    // display the number of balls based on the number passed into props
    // create an array that will hold numbers
    let num = [1, 2, 3, 4, 5, 6];
    // for each number, create a ball
    let numBalls = num.map(number => 
        <Ball />
    );

    return (
      <div>
        <h1>{this.props.title}</h1>
        {numBalls}
      </div>
    );
  }
}

export default Lottery;