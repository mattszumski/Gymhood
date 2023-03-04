import React from "react";
import { LandingPage } from "../components/styled/LandingPage.styled";
import useInputState from "../hooks/useInputState";
import axios from "../lib/axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, changeUsername, resetUsername] = useInputState("");
  const [email, changeEmail, resetEmail] = useInputState("");
  const [password, changePassword, resetPassword] = useInputState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const response = axios
      .post("/auth/signup", { username, email, password })
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
        navigate("/profile/edit");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LandingPage>
      <h1>GymHood</h1>
      <form action="" onSubmit={onFormSubmit}>
        <div className="form-box">
          <h2>Sign up</h2>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={changeUsername} />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={changeEmail} />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={changePassword} />
          </div>
          <div className="button-box">
            <input className="action-button" type="submit" value="Sign up" />
          </div>
        </div>
      </form>
    </LandingPage>
  );
};

export default Signup;
