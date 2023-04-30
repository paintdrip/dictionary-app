import React from 'react';

interface TextBlockProps {
  title: string;
  meanings: any[];
  num: number;
}

type definitionsType = {
  antonyms: string[];
  definition: string;
  example: string;
  synonyms: string[];
};

export const TextBlock: React.FC<TextBlockProps> = ({ title, meanings, num }) => {
  return (
    <>
      <div>
        <div className="blocknoun">
          <h2 className="noun">{title}</h2>
          <div className="noun-after"></div>
        </div>
        <section className="nounblock">
          <h3>Meaning</h3>
          <ul className="nounblock-ul">
            {meanings[num].definitions.map((obj: definitionsType) => (
              <>
                <li className="nounblock-li">{obj.definition}</li>
                <p className="nounblock-p">{obj.example}</p>
              </>
            ))}
          </ul>
          {meanings[num].antonyms > [] && (
            <div className="synonym">
              <p className="synonym-title">Antonyms</p>
              <ul className="synonym-ul">
                {meanings[num].antonyms.map((obj: string, index: number) => (
                  <li key={index} className="synonym-li">
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {meanings[num].synonyms > [] && (
            <div className="synonym">
              <p className="synonym-title">Synonyms</p>
              <ul className="synonym-ul">
                {meanings[num].synonyms.map((obj: string, index: number) => (
                  <li key={index} className="synonym-li">
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </>
  );
};
