import React, { Component } from 'react';
import Ball from './../components/Ball';

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery"
  }

  state = {
    numbers: ""
  }
  
  genRandomNums = () => {
    // create an array to hold all the numbers
    let randomNumbers = [];
    // loop through and push a random number into the array

    // generate a random number between 1 and 40 (for 6 balls)
    // let randomNum = Math.floor(Math.random() * 40) + 1;

    // push the random number into the numbers array
    // this.setState({numbers: [...this.state.numbers, randomNum]})

    // console.log(this.state.numbers);
    for(let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 40) + 1;
      randomNumbers.push(randomNum)
    }

    console.log(randomNumbers);
  }

  render() {
    // display the number of balls based on the number passed into props
    // create an array that will hold numbers
    // let num = [1, 2, 3, 4, 5];
    // for each number, create a ball
    // let numBalls = num.map(number => 
    //     <Ball />
    // );

    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* {numBalls} */}
        <button onClick={this.genRandomNums}>Generate</button>
      </div>
    );
  }
}

export default Lottery;