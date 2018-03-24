import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import Day from './Day'

import { connect } from '../api'

const itemToDay = ({ id, day, lessons }) => (
  <Day key={id} id={id} day={day} lessons={lessons} />
)

class Week extends Component {
  render() {
    const { data } = this.props
    return (
      <CSSTransitionGroup
        transitionName="opasweek"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {data && data.days ? data.days.map(itemToDay) : null}
      </CSSTransitionGroup>
    )
  }
}

export default connect(({ groupId }) => '/weeks/' + groupId)(Week)
