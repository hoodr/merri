import React from 'react';
import './button.css';

const Button = (props) => {
  const { cta, click } = props;

  return (
    <div className="button-component">
      <button type="button" onClick={click}>{cta}</button>
    </div>
  )
}

export default Button;
