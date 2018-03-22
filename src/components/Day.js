import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

const Lesson = ({ time, discipline, classroom, teacher }) => (
  <tr>
    <td className="ti">{time}</td>
    <td>
      <div className="cell">
        <div className="discip" title={discipline}>
          {discipline}
        </div>
        <p className="classroom"> Ауд. {classroom} </p>
        <p className="teacher"> {teacher} </p>
      </div>
    </td>
  </tr>
)

const itemToLesson = ({ id, ...rest }) => <Lesson key={id} {...rest} />

const w =
  (window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth) > 700
    ? true
    : false

class DropTable extends Component {
  state = { isOpened: w }

  toggleState = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { id, day, lessons } = this.props
    return (
      <div onClick={this.toggleState} className="dropTable">
        <h2> {day}</h2>

        <CSSTransitionGroup
          transitionName="dropdownMenu"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.isOpened && (
            <table border="1">
              <thead>
                <tr>
                  <th scope="col">Время</th>
                  <th scope="col">информация</th>
                </tr>
              </thead>
              <tbody>{lessons.map(itemToLesson)}</tbody>
            </table>
          )}
        </CSSTransitionGroup>
      </div>
    )
  }
}
export default DropTable
