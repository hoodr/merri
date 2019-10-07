import React, { useRef } from 'react';
import CopyButton from '../ui/button';
import './textBar.css';

const TextBar = (props) => {
  const { text, isShortened, textUpdate } = props
  const textRef = useRef(null);

  // copy text is able to
  const CopyText = e => {
    textRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  };

  let ButtonProps = {cta: 'copy', click: CopyText}
  let displayText = (isShortened) ? window.location.href + text : text;

  return (
    <div className="text-bar-container">
      <input ref={textRef} className="text-bar-input" value={displayText} onChange={t => textUpdate(t.target.value)} readOnly={isShortened} />
      { isShortened &&
        document.queryCommandSupported('copy') &&
        <CopyButton {...ButtonProps} /> }
    </div>
  )
}

export default TextBar;
