import React, { Component } from 'react'

import Header from './components/Header'
import Week from './components/Week'
import SideBar from './components/SideBar'
import week from './data/week'

// const days = []

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Week days={week.days} />
        <SideBar />
      </div>
    )
  }
}

export default App
