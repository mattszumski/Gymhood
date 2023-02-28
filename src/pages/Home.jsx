import React from "react";
import { LandingPage } from "../components/styled/LandingPage.styled";
import useInputState from "../hooks/useInputState";

const Home = () => {
  const [authfield, changeAuthfield, resetAuthfield] = useInputState("");
  const [password, changePassword, resetPassword] = useInputState("");
  //TODO add listeners for change and make it fully controlled input
  return (
    <LandingPage>
      <h1>GymHood</h1>
      <div className="form-box">
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="button-box">
          <input className="action-button" type="button" value="Sign in" />
          <p>Don't have an account?</p>
          <input className="action-button" type="button" value="Sign up" />
        </div>
      </div>
    </LandingPage>
  );
};

export default Home;
