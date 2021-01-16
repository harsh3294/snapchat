import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";

import { auth, provider } from "./firebase";
import "./Login.css";
function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            username: user.displayName,
            id: user.id,
            profilePic: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />

        <div className="login__text">
          <h1>Sign in to Snapchat</h1>
        </div>
        <Button onClick={signIn} variant="outlined">
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
