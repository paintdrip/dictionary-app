import React from 'react';
import './scss/App.scss';

import logo from './assets/img/logo.svg';
import moon from './assets/img/icon-moon.svg';

function App() {
  return (
    <div className="main">
      {/* Шапка сайта */}
      <header className="header">
        <div className="header-left-block">
          <img src={logo} alt="logo" />
        </div>
        <div>{/* выплывающий sписок */}</div>
        <div className="header-right-block">
          <label className="switch">
            <input type="checkbox" className="switch-input" />
            <span className="switch-span"></span>
          </label>
          <div className="moon">
            <img src={moon} alt="logo" className="moon-logo" />
          </div>
        </div>
      </header>
      {/* Поле для ввода */}
      <div className="input-block">
        <input className="input" placeholder="Search for any word..." type="text" />
      </div>
    </div>
  );
}

export default App;
