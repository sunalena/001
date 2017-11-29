import React, { PureComponent } from 'react'

const uri = window.location.origin

export default class Branch extends PureComponent {
  state = {
    children: [],
    isOpen: false
  }

  handleClick = async ({ target }) => {
    if (this.props.type === 'group') {
      this.props.getTimeTable(Number(this.props.id))
      return
    }
    if (!this.state.isOpen) {
      const URL = `${uri}/groups?parent=${this.props.id}`
      const res = await fetch(URL)
      this.setState({ children: await res.json(), isOpen: true })
    } else this.setState({ children: [], isOpen: false })
  }
  elToLink = ({ ...props }) => (
    <Branch key={props.id} getTimeTable={this.props.getTimeTable} {...props} />
  )

  render() {
    const { id, name, type } = this.props
    return (
      <li>
        <a id={id} type={type} role="button" onClick={this.handleClick}>
          {name}
        </a>
        {this.state.isOpen && type !== 'group' ? (
          <ul id={id}>{this.state.children.map(this.elToLink)}</ul>
        ) : null}
      </li>
    )
  }
}
