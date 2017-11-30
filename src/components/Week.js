import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import Day from './Day'

const uri = window.location.origin

const itemToDay = ({ id, day, lessons }) => (
  <Day key={id} id={id} day={day} lessons={lessons} />
)

export default class Week extends Component {
  state = {
    groupTimeTable: undefined
  }

  componentDidMount() {
    this.fethData(this.props.groupId)
  }

  componentWillReceiveProps(newProps) {
    this.fethData(newProps.groupId)
  }

  async fethData(groupId) {
    console.log('componentWillReceiveProps')
    const URL = `${uri}/weeks/${groupId}`
    const res = await fetch(URL)
    this.setState({ groupTimeTable: await res.json() })
  }

  render() {
    const { groupTimeTable } = this.state
    return (
        <CSSTransitionGroup 
          transitionName="opasweek"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

    {groupTimeTable && groupTimeTable.days
      ? groupTimeTable.days.map(itemToDay)
      : null}

        </CSSTransitionGroup>
  )}
}
