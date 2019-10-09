import React from 'react';
import Button from '../ui/button';
import './url-container.css';

const UrlContainer = (props) => {
  const { item, RemoveClick } = props;
  let cta = 'REMOVE';

  return (
    <div className="url-container flex-row">
      <div className="url-text-container flex-row">
        <div className="url-text">
          {item.key}
        </div>
        <div className="url-text">
          {item.url}
        </div>
        <div className="url-text">
          {item.day + '/' + item.month + '/' + item.year}
        </div>
      </div>
      <div className="url-button">
        <Button {...{cta: cta, click: e => console.log(e)}} />
      </div>
    </div>
  )
};

export default UrlContainer;
