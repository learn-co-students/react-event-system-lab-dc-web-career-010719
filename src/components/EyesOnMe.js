// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
  good = e => {
    console.log('Good!');
  };

  eyesOnMe = e => {
    console.log('Hey! Eyes on me!');
  };

  render() {
    return (
      <div>
        <button onFocus={this.good} onBlur={this.eyesOnMe} />
      </div>
    );
  }
}

export default EyesOnMe;
