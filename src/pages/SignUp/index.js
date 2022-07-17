import React from 'react';
import './SignUp.css';
import InputBox from './../../components/InputBox';
import SignUpSvg from './../../assetes/images/Signup.svg';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BiLockOpenAlt } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import Button from './../../components/Button';
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
            <InputBox
              label="E-mail"
              placehoder="name@mail.com"
              Icon={() => (
                <MdOutlineAlternateEmail
                  style={{ marginBottom: '-6px', color: 'rgb(214, 214, 214)' }}
                />
              )}
            />
            <InputBox
              label="Password"
              placehoder="name@mail.com"
              Icon={() => (
                <BiLockOpenAlt
                  style={{ marginBottom: '-6px', color: 'rgb(214, 214, 214)' }}
                />
              )}
            />
          </div>
          <div className="SignUpRightDowner">
            <Button
              color="#fff"
              backgroundColor="blue"
              label="Create an account"
            />
            <Button
              color="black"
              backgroundColor="#fff"
              label="Sign up with Google"
              Icon={() => (
                <FcGoogle
                  style={{
                    marginBottom: '-6px',
                    marginRight: '10px',
                    color: 'rgb(214, 214, 214)',
                    fontSize: '22px',
                  }}
                />
              )}
            />
          </div>

          <div className="rightBottomPrivacy">
            <p>This site is protected by reCAPTCHA and Google</p>
            <span>
              <a href="#">Privacy Policy</a> and{' '}
              <a href="#">Terms od Service</a> apply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
