import React, {Component} from 'react'

class EyesOnMe extends Component {

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  handleFocus = () => {
    console.log('Good!')
  }

  render () {
    return (
      <button type="password" onFocus={this.handleFocus} onBlur={this.handleBlur} />
    )
  }
}

export default EyesOnMe
