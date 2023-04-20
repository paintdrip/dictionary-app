import React from 'react';
import play from '../assets/img/icon-play.svg';
import link from '../assets/img/icon-new-window.svg';

type apiProps = {
  result: any;
};

const Answer: React.FC<apiProps> = ({ result }) => {
  const { word, phonetic, meanings, sourceUrls } = result;

  return (
    <div className="blocktext">
      <section className="textmain">
        <div>
          <h1 className="textmain-h1">{word}</h1>
          <p className="textmain-p">{phonetic}</p>
        </div>
        <img src={play} alt="logo" className="textmain-logo" />
      </section>
      <h2 className="noun">noun</h2>
      <section className="nounblock">
        <h3>Meaning</h3>
        <ul className="nounblock-ul">
          {meanings[0].definitions.map((obj: any) => (
            <li className="nounblock-li">{obj.definition}</li>
          ))}
          {/* <li className="nounblock-li">{meanings[0].definitions[0].definition || ''}</li>
          <p className="nounblock-p">{meanings[0].definitions[0].example || ''}</p>
          <li className="nounblock-li">{meanings[0].definitions[1].definition || ''}</li>
          <p className="nounblock-p">{meanings[0].definitions[0].example || ''}</p>
          <li className="nounblock-li">{meanings[0].definitions[0].definition || ''}</li>
          <p className="nounblock-p">{meanings[0].definitions[0].example || ''}</p>
          <li className="nounblock-li">{meanings[0].definitions[0].definition || ''}</li>
          <p className="nounblock-p">{meanings[0].definitions[0].example || ''}</p> */}
        </ul>
      </section>
      <h2 className="noun">verb</h2>
      <section className="nounblock">
        <h3>Meaning</h3>
        <ul className="nounblock-ul">
          {meanings[1].definitions.map((obj: any) => (
            <li className="nounblock-li">{obj.definition}</li>
          ))}
        </ul>
      </section>
      <h4 className="source">Source</h4>
      <ul className="source-ul">
        <li>
          <a className="source-a" href={sourceUrls[0] || ''}>
            <span>{sourceUrls[0] || ''}</span>
            <img className="source-img" src={link} aria-hidden="true"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Answer;
