import React from 'react';

const Button = (props) => {
  const { cta, click } = props;

  return (
    <div className="button-component">
      <button type="button" onClick={click}>{cta}</button>
    </div>
  )
}

export default Button;
