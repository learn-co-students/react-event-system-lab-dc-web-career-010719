import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  logGood = () => console.log('Good!')
  logHey = () => console.log('Hey! Eyes on me!')

  render() {
    return(
      <button onFocus={this.logGood} onBlur={this.logHey} />
    )
  }
}
