import React, { Component } from 'react';
import Ball from './../components/Ball';

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    numBalls: 6,
    maxNum: 40
  }

  state = {
    numbers: [
      <Ball/>, <Ball/>, <Ball/>, <Ball/>, <Ball/>, <Ball/>,
    ],
  }

  createBall = () => {
    // create array to hold random numbers
    let ballNumbers = [];

    // create X random numbers based on numBalls passed in as props
    for(let i = 0; i < this.props.numBalls; i++) {
      // generate a random number based on maxNum passed in as props;
      let randomNum = Math.floor(Math.random() * this.props.maxNum) + 1;
      // push random number into the ballNumbers array
      ballNumbers.push(randomNum);
    }

    // create an array to hold all the balls using .map()
    // create a ball for every number in the ballNumbers array
    let balls = ballNumbers.map(num =>
      <Ball number={num} />  
    );

    // change the state to be the balls array
    this.setState({numbers: balls});
  }

  render() {

    return (
      <div>
        {/* Title */}
        <h1>{this.props.title}</h1>
        
        {/* Display balls */}
        {this.state.numbers}

        {/* Button */}
        <button onClick={this.createBall}>Generate</button>
      </div>
    );
  }
}

export default Lottery;