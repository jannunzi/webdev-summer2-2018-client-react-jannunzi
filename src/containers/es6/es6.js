import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import SpreadOperators from './spread/SpreadOperators'

class ES6 extends Component {
  render() {
    return(
      <Route>
      <div>
        <h1>ES6 Features</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="/es6/spread" className="nav-link active">
              Spread
            </a>
          </li>
        </ul>
        <Route path="/es6/spread" component={SpreadOperators}/>
      </div>
      </Route>
    )
  }
}

export default ES6;