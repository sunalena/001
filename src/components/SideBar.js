import React, { Component } from 'react'
import hierarchy from '../data/hierarchy'

const Branch = class App extends Component {
  state = {
    current: undefined
  }

  handleClick = event => {
    this.setState({ current: Number(event.target.id) })
  }

  itemToLink = ({ id, name, type }) => (
    <Branch
      key={id}
      id={id}
      name={name}
      isOpen={id === this.state.current}
      type={type}
      onClick={this.handleClick}
    />
  )

  render() {
    const { id, name, onClick, isOpen, type } = this.props
    return (
      <li>
        <a id={id} role="button" onClick={onClick}>
          {name}
        </a>
        {isOpen && type !== 'course' ? (
          <ul id={id}>
            {hierarchy.filter(el => el.parent === id).map(this.itemToLink)}
          </ul>
        ) : null}
      </li>
    )
  }
}

const SideBar = () => (
  <aside>
    <div id="menu_body">
      <ul className="metro">
        <Branch key={0} id={0} name={'Структура'} isOpen={true} />
      </ul>
    </div>
  </aside>
)

export default SideBar
