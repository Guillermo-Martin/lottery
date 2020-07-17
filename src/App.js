import React from 'react';
import Lottery from './containers/Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery numBalls={6} maxNum={40} />
      <Lottery numBalls={4} maxNum={10} title="Mini-Daily" />
    </div>
  );
}

export default App;
