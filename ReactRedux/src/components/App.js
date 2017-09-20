import React, { Component } from 'react'
import './App.scss'
import { debounce } from 'lodash'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

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
    return (
      <div className="app-wrapper" style={{ height: this.state.window.height }}>
        <h1>React.js + Redux</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default App