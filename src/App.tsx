import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'scss/App.scss'
import 'scss/overrides.scss'
import Routes from './routes'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}
