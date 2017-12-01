import React from 'react'

export default ({ getStartPage })=> (
  <header>
    <div className="head">
      <a onClick={getStartPage} title="Главная">
        Расписание ПГУ!
      </a>
    </div>
  </header>
)
