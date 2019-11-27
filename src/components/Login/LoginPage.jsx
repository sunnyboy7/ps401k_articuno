import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../../assets/images/Login-Logo.png';

class Login extends React.PureComponent {
  render() {
    return (
      <div className="login-main-div">
        <div className="login-inner-div">
          <div className="login-front-img-div">
            <img src={CompanyLogo} className="login-front-company-img" alt="" />
          </div>
          <div className="login-heading">PS 401K</div>
          <div className="login-body-div">
            <div className="login-body-heading">Login to account</div>
            <div className="login-body-desc">
              Please enter your Email and Password
            </div>
            <div className="login-inputs-main-div">
              <div className="login-input-div">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Email"
                />
                <span className="email-extension-spn">@ok7.eleven.com</span>
                <p className="error-txt">Please enter Email</p>
              </div>

              <div className="login-input-div">
                <input
                  type="password"
                  className="custom-input"
                  placeholder="Password"
                />
                <p className="error-txt">Please enter Password</p>
              </div>

              <div className="login-input-div text-center">
                <Link to="/Home">
                  <input type="button" className="custom-btn" value="Login" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
