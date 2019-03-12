// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {
  handleEnterPassword = () => console.log('Entering password...')

  render() {
    return (
      <input onKeyUp={this.handleEnterPassword} type="password" />
    )
  }
}

export default Keypad
