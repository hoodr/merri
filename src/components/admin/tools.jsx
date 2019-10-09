import React, { useEffect, useState } from 'react';
// import StorageManager from '../util/localStorageManager';
import Button from '../ui/button';
import './tools.css';

const Tools = () => {
  const [autoExire, setAutoExpire] = useState(false);
  let cta = (autoExire) ? 'Disable Auto expire' : 'Enable Auto expire';

  const Click = () => {
    setAutoExpire(prev => !prev);
  };

  return (
    <div className="tools-container">
      <div className="tools-header">
        <h2>Admin Panel</h2>
      </div>
      <div className="tools">
        <Button {...{cta: cta, click: () => Click()}} />
      </div>
    </div>
  )
};

export default Tools;
