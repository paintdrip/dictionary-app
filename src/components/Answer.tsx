import React from 'react';
import play from '../assets/img/icon-play.svg';
import link from '../assets/img/icon-new-window.svg';

type apiProps = {
  result: any;
};

const Answer: React.FC<apiProps> = ({ result }) => {
  const { word, phonetic, meanings, sourceUrls } = result;

  console.log(result);

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
            <>
              <li className="nounblock-li">{obj.definition}</li>
              <p className="nounblock-p">{obj.example}</p>
            </>
          ))}
        </ul>
        <div className="synonym">
          {meanings[0].synonyms > [] && <p className="synonym-title">Synonyms</p>}
          <ul className="synonym-ul">
            {meanings[0].synonyms.map((obj: any, index: any) => (
              <li key={index} className="synonym-li">
                {obj}
              </li>
            ))}
          </ul>
        </div>
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
          <a target="_blank" className="source-a" href={sourceUrls[0] || ''}>
            <span>{sourceUrls[0] || ''}</span>
            <img className="source-img" src={link} aria-hidden="true"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Answer;
