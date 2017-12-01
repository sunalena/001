import React, { Component } from 'react'
import SideBar from './SideBar.js'
import { CSSTransitionGroup } from 'react-transition-group'

class Dropdown extends Component {
  state = { isOpened: false }

  toggleState = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleState} className="drop">
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            меню
          </a>
      </div>
        <CSSTransitionGroup 
          transitionName="dropdownMenu"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>

          {this.state.isOpened && (
            <SideBar getTimeTable={this.props.getTimeTable} getStartPage={this.props.getStartPage}/>
          )}
          
        </CSSTransitionGroup>
      </div>
    )
  }
}
export default Dropdown
