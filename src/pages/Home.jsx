import React from "react";
import { LandingPage } from "../components/styled/LandingPage.styled";
import useInputState from "../hooks/useInputState";
import axios from "../lib/axios";
import useAuth from "../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [authfield, changeAuthfield, resetAuthfield] = useInputState("");
  const [password, changePassword, resetPassword] = useInputState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const response = axios
      .post("/auth/login", { authfield, password })
      .then((res) => {
        console.log(res);
        setAuth((prev) => {
          return {
            ...prev,
            accessToken: res.data.accessToken,
            username: res.data.username,
            userId: res.data.userId,
          };
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LandingPage>
      <h1>GymHood</h1>
      <div className="form-box">
        <h2>Sign in</h2>
        <form action="" onSubmit={onFormSubmit}>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={changeAuthfield} />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={changePassword} />
          </div>
          <div className="button-box">
            <input className="action-button" type="submit" value="Sign in" />
          </div>
        </form>
        <div className="button-box">
          <p>Don't have an account?</p>
          <NavLink to={"/signup"}>
            <input className="action-button" type="button" value="Sign up" />
          </NavLink>
        </div>
      </div>
    </LandingPage>
  );
};

export default Home;
