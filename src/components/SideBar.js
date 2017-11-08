import React, { Component } from 'react'
import { faculties, educationLevels } from '../data/structure'

const itemToLink = item => (
  <Branch key={item.id} id={item.id} name={item.name} type={item.type} />
)

const Branch = class App extends Component {
  state = {
    isOpen: false,
    children: undefined
  }

  handleClick = event => {
    if (!this.state.isOpen && !this.state.children) {
      switch (this.props.type) {
        case 'faculty':
          this.setState({ children: educationLevels })
          break
        case 'educationLevel':
          this.setState({
            children: educationLevels.filter(el => el.id === this.props.id)[0]
              .courses
          })
          break
        default:
          break
      }
    }
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <li>
        <a role="button" onClick={this.handleClick}>
          {this.props.name}
        </a>
        {this.state.isOpen && this.state.children ? (
          <ul id={this.props.id}>{this.state.children.map(itemToLink)}</ul>
        ) : null}
      </li>
    )
  }
}

const SideBar = () => (
  <aside>
    <div id="menu_body">
      <ul className="metro">{faculties.map(itemToLink)}</ul>
    </div>
  </aside>
)

export default SideBar
