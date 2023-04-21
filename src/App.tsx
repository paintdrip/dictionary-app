import React from 'react';
import './scss/App.scss';

import logo from './assets/img/logo.svg';
import moon from './assets/img/icon-moon.svg';
import search from './assets/img/icon-search.svg';

import axios from 'axios';
import Answer from './components/Answer';

function App() {
  const [theme, setTheme] = React.useState(false);
  const [keyWord, setKeyWord] = React.useState(false);
  const [result, setResult] = React.useState(null);

  const api = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  const changeHandler = (e: any) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className={theme ? 'theme-white' : ''}>
      <div className="main">
        {/* Шапка сайта */}
        <header className="header">
          <div className="header-left-block">
            <img src={logo} alt="logo" />
          </div>
          <div>{/* выплывающий sписок */}</div>
          <div className="header-right-block">
            <div className="moon">
              <img src={moon} alt="logo" className="moon-logo" />
            </div>
            <label className="switch">
              <input type="checkbox" className="switch-input" onChange={() => setTheme(!theme)} />
              <span className="switch-span"></span>
            </label>
          </div>
        </header>
        {/* Поле для ввода */}
        <form onSubmit={handleSearch} className="input-block">
          <input
            autoFocus
            className="input"
            placeholder="Search for any word..."
            type="text"
            onChange={changeHandler}
          />
          {/* <button onClick={handleSearch}>Submit</button> */}
        </form>
        {/* Ответ от api */}
        {result && <Answer {...{ result }} />}
      </div>
    </div>
  );
}

export default App;
