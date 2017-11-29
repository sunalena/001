import React, { Component } from 'react';
import SideBar from './SideBar.js';


class Dropdown extends Component {
  state = { isOpened: false };

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    console.log('isOpened', this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <SideBar getTimeTable={this.props.getTimeTable} />;
    }
    return (
      <div>
        <div onClick={this.toggleState.bind(this)} className="drop">
          menu
        </div>
        {dropdownText}
      </div>
  );}
}
export default Dropdown;
