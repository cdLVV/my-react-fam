import React from 'react'
import Hello from 'components/Hello'

export default class Home extends React.PureComponent {
  render() {
    console.log('Home', this.props)
    return (
      <div>
        <Hello />
        <div>this is home!!!!</div>
      </div>
    )
  }
}