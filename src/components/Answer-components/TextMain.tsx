import React from 'react';
import play from '../../assets/img/icon-play.svg';

interface TextMainType {
  word: string;
  phonetic: string;
  phonetics: any[];
}

export const TextMain: React.FC<TextMainType> = ({ word, phonetic, phonetics }) => {
  function playPhonetics() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <section className="textmain">
      <div>
        <h1 className="textmain-h1">{word}</h1>
        <p className="textmain-p">{phonetic}</p>
      </div>
      <img src={play} onClick={playPhonetics} alt="logo" className="textmain-logo" />
    </section>
  );
};
