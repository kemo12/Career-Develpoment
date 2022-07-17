import React from 'react';
import './SignUp.css';
import InputBox from './../../components/InputBox';
import SignUpSvg from './../../assetes/images/Signup.svg';
const SignUp = () => {
  return (
    <div className="SignUpContainer">
      <div className="SignUpLeft">
        <div className="leftSubContainer">
          <div className="SignUpLeftUpper">
            <h2>Zoho.</h2>
            <p>
              A centeral hub where teams can work paln, and achieve amazing
              things together.
            </p>
          </div>
          <img alt="SignUp" src={SignUpSvg} />
        </div>
      </div>
      <div className="SignUpRight">
        <div className="rightSubContainer">
          <div className="selectLangBox">
            <select name="language" id="LangSelect">
              <option value="en">English(USA)</option>
              <option value="cat">Arabic(KSA)</option>
            </select>
          </div>
          <div className="SignUpRightUpper">
            <p> START FOR FREE</p>
            <h1>Sign up to Zoho.</h1>
            <span>
              Already a member? <a href="#">Log in</a>
            </span>
          </div>
          <div className="SignUpRightForm">
            <InputBox />
            <InputBox />
          </div>
          <div className="SignUpRightDowner">asdsa</div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SignUp;
