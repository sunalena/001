import React, { PureComponent } from 'react'
import hierarchy from '../data/hierarchy'

export default class Branch extends PureComponent {
  state = {
    current: undefined
  }

  handleClick = ({ target }) => {
    const current =
      this.state.current === Number(target.id) ? undefined : Number(target.id)
    this.setState({ current })
    if (target.type === 'group') {
      this.props.getTimeTable(Number(target.id))
    }
  }

  elToLink = ({ ...props }) => (
    <Branch
      key={props.id}
      isOpen={props.id === this.state.current}
      onClick={this.handleClick}
      getTimeTable={this.props.getTimeTable}
      {...props}
    />
  )

  render() {
    const { id, name, onClick, isOpen, type } = this.props
    return (
      <li>
        <a id={id} type={type} role="button" onClick={onClick}>
          {name}
        </a>
        {isOpen && type !== 'group' ? (
          <ul id={id}>
            {hierarchy.filter(el => el.parent === id).map(this.elToLink)}
          </ul>
        ) : null}
      </li>
    )
  }
}
