import React from 'react';
// import css
import './Button.css';

const Button = ({ text, action, dataSet, btnClass }) => {
  return (
    <button className={btnClass} data-set={dataSet} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
