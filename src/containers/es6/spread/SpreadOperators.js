import React, {Component} from 'react'
import SpreadString from './SpreadString'
import SpreadStringArrays from './SpreadStringArrays'
import SpreadFunctionParameters from './SpreadFunctionParameters'

export default class SpreadOperators extends Component {
  render() {
    return(
      <div>
        <h1>Spread Operators</h1>
        <SpreadString/>
        <SpreadStringArrays/>
        <SpreadFunctionParameters/>
      </div>
    )
  }
}