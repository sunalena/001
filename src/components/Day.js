import React from 'react'

const Lesson = props => (
  <tr>
    <td>{props.time}</td>
    <td>{props.discipline}</td>
    <td>{props.classroom}</td>
    <td>{props.teacher}</td>
  </tr>
)

const itemToLesson = item => (
  <Lesson
    key={item.id}
    time={item.time}
    discipline={item.discipline}
    classroom={item.classroom}
    teacher={item.teacher}
  />
)

const Day = props => (
  <table border="1" className={'tab' + props.id}>
    <caption>{props.day}</caption>
    <tbody>
      <tr>
        <th>Время</th>
        <th>
          Название <br /> пары
        </th>
        <th>
          № <br />кабинета
        </th>
        <th>Преподаватель</th>
      </tr>
      {props.lessons.map(itemToLesson)}
    </tbody>
  </table>
)

export default Day
