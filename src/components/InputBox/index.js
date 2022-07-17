import React from 'react';
import './InputBox.css';
import { MdOutlineAlternateEmail } from 'react-icons/md';
const InputBox = () => {
  return (
    <div className="inputBox">
      <label className="inputLabel">E-mail</label>
      <div className="inputContainer">
        <input placeholder="test" />
        <MdOutlineAlternateEmail className="icon" />
      </div>
    </div>
  );
};

export default InputBox;
