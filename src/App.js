import React, { Component } from 'react';
import Header from './components/Header';
import Week from './components/Week';
import Dropdown from './components/Dropdown';
import StartPage from'./components/StartPage';

export default class App extends Component {
  state = {
  groupId: undefined
  }

  getTimeTable = groupId => {
    this.setState({
      groupId
    })
  }

  getStartPage = () => {
    !!this.state.groupId ? this.setState({groupId: undefined}) : null;
  }

  render() {
    return (
      <div>
        <Header getStartPage={this.getStartPage}/>
        {!this.state.groupId ? 
          <StartPage /> 
          : <div className="week1"><Week groupId={this.state.groupId} /></div>}
        <Dropdown getTimeTable={this.getTimeTable}/>
      </div>
    );
  }
}
