import React from 'react'

import Day from './Day'

const itemToDay = el => (
  <Day key={el.id} id={el.id} day={el.day} lessons={el.lessons} />
)

const Week = props => props.days.map(itemToDay)

export default Week
