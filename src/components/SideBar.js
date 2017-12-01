import React from 'react'
import Branch from './Branch'

export default ({ getTimeTable, getStartPage }) => (
  <aside>
    <div id="menu_body">
      <ul className="metro">
        <li>
          <a onClick={getStartPage} >Главная</a>
        </li>
        <Branch
          key={0}
          id={0}
          name={'Факультеты'}
          isOpen={true}
          getTimeTable={getTimeTable}
        />
      </ul>
      <footer>
        <a type="button">Cайт ПГУ</a>
      </footer>
    </div>
  </aside>
)
