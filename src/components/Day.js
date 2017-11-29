import React from 'react'

const Lesson = ({ time, discipline, classroom, teacher }) => (
    <tr>
        <td className="ti"  scope="col">{time}</td>
        <td className="di"  scope="col">{discipline}</td>
        <td className="cl"  scope="col">{classroom}</td>
        <td className="te"  scope="col">{teacher}</td>
    </tr>
)

const itemToLesson = ({ id, ...rest }) => <Lesson key={id} {...rest} />

export default ({ id, day, lessons }) => (
    <table border="1">
      <caption><h2> {day}</h2></caption>
          <thead>
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
          </thead>
        <tbody>
                {lessons.map(itemToLesson)}
          </tbody>
    </table>
)
