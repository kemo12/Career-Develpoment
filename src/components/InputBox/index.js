import React from 'react';
import './InputBox.css';
const InputBox = ({ label = '', placehoder = '', Icon = undefined }) => {
  return (
    <div className="inputBox">
      <label className="inputLabel">{label}</label>
      <div className="inputContainer">
        <input placeholder={placehoder} />
        {Icon !== undefined ? <Icon className="icon" /> : ''}
      </div>
    </div>
  );
};

export default InputBox;
