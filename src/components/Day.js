import React from 'react'

const Lesson = ({ time, discipline, classroom, teacher }) => (
  <tr>
    <td>{time}</td>
    <td>{discipline}</td>
    <td>{classroom}</td>
    <td>{teacher}</td>
  </tr>
)

const itemToLesson = ({ id, ...rest }) => <Lesson key={id} {...rest} />

export default ({ id, day, lessons }) => (
  <table border="1" className=''>
    <caption>{day}</caption>
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
      {lessons.map(itemToLesson)}
    </tbody>
  </table>
)
