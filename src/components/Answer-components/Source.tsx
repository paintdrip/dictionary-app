import React from 'react';
import link from '../../assets/img/icon-new-window.svg';

interface SourceType {
  sourceUrls: string[];
}

export const Source: React.FC<SourceType> = ({ sourceUrls }) => {
  return (
    <>
      <h4 className="source">Source</h4>
      <ul className="source-ul">
        <li>
          <a target="_blank" rel="noreferrer" className="source-a" href={sourceUrls[0] || ''}>
            <span>{sourceUrls[0] || ''}</span>
            <img className="source-img" alt="" src={link} aria-hidden="true"></img>
          </a>
        </li>
      </ul>
    </>
  );
};
