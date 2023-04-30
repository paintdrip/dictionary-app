import React from 'react';
import { Source } from './Answer-components/Source';
import { TextMain } from './Answer-components/TextMain';
import { TextBlock } from './Answer-components/TextBlock';

type apiProps = {
  result: {
    word: string;
    phonetic: string;
    phonetics: any[];
    meanings: any[];
    sourceUrls: string[];
  };
};

const Answer: React.FC<apiProps> = ({ result }) => {
  const { word, phonetic, phonetics, meanings, sourceUrls } = result;

  return (
    <div className="blocktext">
      {/* Основной текст при выводе */}
      <TextMain word={word} phonetic={phonetic} phonetics={phonetics} />
      {/* текстовые блоки с описанием */}
      <TextBlock title={'noun'} meanings={meanings} num={0} />
      {meanings[1] && <TextBlock title={'verb'} meanings={meanings} num={1} />}
      {meanings[2] && <TextBlock title={'interjection'} meanings={meanings} num={2} />}
      {/* source блок */}
      <Source sourceUrls={sourceUrls} />
    </div>
  );
};

export default Answer;
