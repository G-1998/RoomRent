import React, { useState } from 'react';


const Login = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  // Function to switch between Login and Register forms
  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className="container-login">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style={{ left: isLoginActive ? '0px' : '110px' }}></div>
          <button className="toggle-btn" onClick={() => setIsLoginActive(true)}>
            Login
          </button>
          <button className="toggle-btn" onClick={() => setIsLoginActive(false)}>
            Register
          </button>
        </div>

        {/* Login Form */}
        {isLoginActive ? (
          <form className="input-group" action="/login" method="POST">
            <input
              type="text"
              className="input-field"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Me</span>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        ) : (
          /* Register Form */
          <form className="input-group" action="/register" method="POST">
            <input
              type="text"
              className="input-field"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="email"
              className="input-field"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="input-field"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms & conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
