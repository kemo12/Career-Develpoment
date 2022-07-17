import React from 'react';
import './Button.css';

const Button = ({
  backgroundColor = '',
  color = '',
  label = '',
  Icon = undefined,
}) => {
  return (
    <button
      className="Button"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {Icon !== undefined ? <Icon /> : ''}
      {label}
    </button>
  );
};

export default Button;
