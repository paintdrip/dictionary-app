import React from 'react';

const LoadingBlock = () => {
  return (
    <div className="loading-block">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingBlock;
