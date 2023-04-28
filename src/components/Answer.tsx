import React from 'react';
import play from '../assets/img/icon-play.svg';
import link from '../assets/img/icon-new-window.svg';

type apiProps = {
  result: {
    word: string;
    phonetic: string;
    phonetics: any[];
    meanings: any[];
    sourceUrls: string[];
  };
};

interface definitionsType {
  antonyms: string[];
  definition: string;
  example: string;
  synonyms: string[];
}

const Answer: React.FC<apiProps> = ({ result }) => {
  const { word, phonetic, phonetics, meanings, sourceUrls } = result;

  function playPhonetics() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }

  // потом убрать
  console.log(result);

  return (
    <div className="blocktext">
      <section className="textmain">
        <div>
          <h1 className="textmain-h1">{word}</h1>
          <p className="textmain-p">{phonetic}</p>
        </div>
        <img src={play} onClick={playPhonetics} alt="logo" className="textmain-logo" />
      </section>
      <div className="blocknoun">
        <h2 className="noun">noun</h2>
        <div className="noun-after"></div>
      </div>
      <section className="nounblock">
        <h3>Meaning</h3>
        <ul className="nounblock-ul">
          {meanings[0].definitions.map((obj: definitionsType) => (
            <>
              <li className="nounblock-li">{obj.definition}</li>
              <p className="nounblock-p">{obj.example}</p>
            </>
          ))}
        </ul>
        {meanings[0].antonyms > [] && (
          <div className="synonym">
            <p className="synonym-title">Antonyms</p>
            <ul className="synonym-ul">
              {meanings[0].antonyms.map((obj: string, index: number) => (
                <li key={index} className="synonym-li">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}
        {meanings[0].synonyms > [] && (
          <div className="synonym">
            <p className="synonym-title">Synonyms</p>
            <ul className="synonym-ul">
              {meanings[0].synonyms.map((obj: string, index: number) => (
                <li key={index} className="synonym-li">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <div className="blocknoun">
        <h2 className="noun">verb</h2>
        <div className="noun-after"></div>
      </div>
      <section className="nounblock">
        <h3>Meaning</h3>
        <ul className="nounblock-ul">
          {meanings[1].definitions.map((obj: definitionsType) => (
            <>
              <li className="nounblock-li">{obj.definition}</li>
              <p className="nounblock-p">{obj.example}</p>
            </>
          ))}
        </ul>
      </section>
      {meanings[1].antonyms > [] && (
        <div className="synonym">
          <p className="synonym-title">Antonyms</p>
          <ul className="synonym-ul">
            {meanings[1].antonyms.map((obj: string, index: number) => (
              <li key={index} className="synonym-li">
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}
      {meanings[1].synonyms > [] && (
        <div className="synonym">
          <p className="synonym-title">Synonyms</p>
          <ul className="synonym-ul">
            {meanings[1].synonyms.map((obj: string, index: number) => (
              <li key={index} className="synonym-li">
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* interj */}
      {meanings[2] && (
        <>
          <div>
            <div className="blocknoun">
              <h2 className="noun">interjection</h2>
              <div className="noun-after"></div>
            </div>
            <section className="nounblock">
              <h3>Meaning</h3>
              <ul className="nounblock-ul">
                {meanings[2].definitions.map((obj: definitionsType) => (
                  <>
                    <li className="nounblock-li">{obj.definition}</li>
                    <p className="nounblock-p">{obj.example}</p>
                  </>
                ))}
              </ul>
            </section>
          </div>
          {/* synonym */}
          {meanings[2].antonyms > [] && (
            <div className="synonym">
              <p className="synonym-title">Synonyms</p>
              <ul className="synonym-ul">
                {meanings[2].antonyms.map((obj: string, index: number) => (
                  <li key={index} className="synonym-li">
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* antonym */}
          {meanings[2].synonyms > [] && (
            <div className="synonym">
              <p className="synonym-title">Synonyms</p>
              <ul className="synonym-ul">
                {meanings[2].synonyms.map((obj: string, index: number) => (
                  <li key={index} className="synonym-li">
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      {/* source block */}
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
