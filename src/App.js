import React, { Component } from 'react'

import Header from './components/Header'
import Week from './components/Week'
import Dropdown from './components/Dropdown'

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
        <div className="week1">
          <Week groupId={this.state.groupId} />
        </div>
        <Dropdown getTimeTable={this.getTimeTable} />
      </div>
    )
  }
}
