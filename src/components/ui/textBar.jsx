import React from 'react';
import CopyButton from '../ui/button';
import './textBar.css';

const TextBar = (props) => {
  const { text, isShortened, textUpdate } = props

  // copy text is able to
  const CopyText = () => {

  };

  let ButtonProps = {cta: 'copy', click: CopyText}

  return (
    <div className="text-bar-container">
      { !isShortened &&
        <input className="text-bar-input" value={text} onChange={t => textUpdate(t.target.value)} />
      }
      { isShortened &&
        <input className="text-bar-input" value={text} readonly /> &&
        <CopyButton {...ButtonProps} />
      }
    </div>
  )
}

export default TextBar;
