import React, { useRef } from 'react';
import CopyButton from '../ui/button';
import './textBar.css';

const TextBar = (props) => {
  const { text, isShortened, textUpdate, placeholder } = props
  const textRef = useRef(null);

  // copy text is able to
  const CopyText = e => {
    textRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  };

  let ButtonProps = {cta: 'copy', click: CopyText}

  return (
    <div className="text-bar-container">
      <input
        ref={textRef}
        className="text-bar-input"
        value={text}
        onChange={t => textUpdate(t.target.value)}
        readOnly={isShortened}
        placeholder={placeholder}/>
      { isShortened &&
        document.queryCommandSupported('copy') &&
        <CopyButton {...ButtonProps} /> }
    </div>
  )
}

export default TextBar;
