import React, { Component } from 'react'

import Header from './components/Header'
import Week from './components/Week'
import SideBar from './components/SideBar'

export default class App extends Component {
  state = {
    groupId: undefined
  }

  getTimeTable = groupId => {
    this.setState({
      groupId
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Week groupId={this.state.groupId} />
        <SideBar getTimeTable={this.getTimeTable} />
      </div>
    )
  }
}
