import React from 'react'
import Branch from './Branch'

export default ({ getTimeTable }) => (
  <aside>
    <div id="menu_body">
      <ul className="metro">
        <Branch
          key={0}
          id={0}
          name={'Структура'}
          isOpen={true}
          getTimeTable={getTimeTable}
        />
      </ul>
    </div>
  </aside>
)
