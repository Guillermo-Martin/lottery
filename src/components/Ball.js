import React from 'react';
import './../assets/styles/styles.css';

function Ball(props) {
  return(
    <div className="Ball">{props.number}</div>
  );
}

export default Ball;