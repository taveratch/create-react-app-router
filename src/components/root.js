import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import Routes from './routes'
class Root extends Component {
  constructor(props) {
    super(props)
  }
render() {
    return (
      <Routes history={browserHistory}/>
    )
  }
}
export default Root
