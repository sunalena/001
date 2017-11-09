import React, { Component } from 'react'

import Day from './Day'

import week from '../data/week'

const itemToDay = ({ id, day, lessons }) => (
  <Day key={id} id={id} day={day} lessons={lessons} />
)

export default class Week extends Component {
  render() {
    const groupTimeTable = week.find(el => el.groupId === this.props.groupId)
    return groupTimeTable ? groupTimeTable.days.map(itemToDay) : null
  }
}
