import React, { Component } from 'react';
import Ball from './../components/Ball';

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
  }

  state = {
    numbers: ""
  }

  createBall = () => {
    // create array to hold random numbers
    let ballNumbers = [];

    // create 6 random numbers
    for(let i = 1; i < 7; i++) {
      // generate a random number;
      let randomNum = Math.floor(Math.random() * 40) + 1;
      // push random number into the ballNumbers array
      ballNumbers.push(randomNum);
    }

    // create an array to hold all the balls using .map()
    // create a ball for every number in the ballNumbers array
    let balls = ballNumbers.map(num =>
      <Ball number={num} />  
    );
    // console.log(ballNumbers);
    // console.log(balls)

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