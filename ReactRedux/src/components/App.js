import React, { Component } from 'react'
import './App.scss'
import { debounce } from 'lodash'

class App extends Component {
  constructor() {
    super()
    this.state = {
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  }
  componentWillMount() {
    window.addEventListener('resize', debounce(this.updateWindowDimensions.bind(this), 100))
  }
  updateWindowDimensions() {
    this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="app-wrapper" style={{ height: this.state.window.height }}>
        <h1>React.js + Redux</h1>
        <h2>Experiment</h2>
        <h3>Characters list</h3>
        <h3>Character details</h3>
      </div>
    )
  }
}

export default App