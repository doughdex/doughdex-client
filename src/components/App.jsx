import React from 'react';

const App = () => {
  return (
    <section className="landing">
      <div className="left-landing">
        <div className="sign-up-card">
          <div className="sign-up-card-header">
            <h3>Create an account</h3>
          </div>
          <div className="form-group">
            <label for="email-field">Email</label>
            <input type="text" id="email-field" name="email-field" />
          </div>
          <div className="form-group">
            <label for="name-field">Name</label>
            <input type="text" id="name-field" name="name-field" />
          </div>
          <div className="form-group">
            <label for="password-field">Password</label>
            <input type="text" id="password-field" name="password-field" />
          </div>
          <button>Sign up</button>
          <div className="sign-up-card-footer"></div>
          <p>Log in</p>
        </div>
      </div>
      <div className="right-landing"></div>
    </section>
  );
};

export default App;
