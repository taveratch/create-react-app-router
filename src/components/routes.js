import {Router, Route} from 'react-router'
import App from './App'
import About from './App/about'
import React from 'react'

export default (props) => (
  <Router {...props}>
    <Route path='/' component={App} />
    <Route path='/about' component={About} />
  </Router>
)
