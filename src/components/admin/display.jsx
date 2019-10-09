import React from 'react';
import UrlContainer from './url-container';
import './display.css';

const Display = (props) => {
  const { items, removeClick } = props;

  if (Object.entries(items).length === 0) {
    return null;
  }

  return (
    <div className="display-container">
      <div className="display-header">
        <h2>Urls</h2>
      </div>
      <div className="display">
      {
        Object.entries(items).map(item => (
          <UrlContainer {...{key:item[0], item: JSON.parse(item[1]), removeClick: removeClick}} />
        ))
      }
      </div>
    </div>
  )
};

export default Display;
