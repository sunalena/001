import React from 'react'

const Lesson = ({ time, discipline, classroom, teacher }) => (
  <tr>
    <td className="ti">{time}</td>
    <td className="di">{discipline}</td>
    <td className="cl">{classroom}</td>
    <td className="te">{teacher}</td>
  </tr>
)

const itemToLesson = ({ id, ...rest }) => <Lesson key={id} {...rest} />

export default ({ id, day, lessons }) => (
  <table border="1">
    <caption>
      <h2> {day}</h2>
    </caption>
    <thead>
      <tr>
        <th scope="col">Время</th>
        <th scope="col">
          Название <br /> пары
        </th>
        <th scope="col">
          № <br />кабинета
        </th>
        <th scope="col">Преподаватель</th>
      </tr>
    </thead>
    <tbody>{lessons.map(itemToLesson)}</tbody>
  </table>
)
