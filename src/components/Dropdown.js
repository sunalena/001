import React, { Component } from 'react'
import SideBar from './SideBar.js'

class Dropdown extends Component {
  state = { isOpened: false }

  toggleState = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleState} className="drop">
          menu
        </div>
        {this.state.isOpened && (
          <SideBar getTimeTable={this.props.getTimeTable} />
        )}
      </div>
    )
  }
}
export default Dropdown
