import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../store/store";
function toasted(type = "error", text) {
  toast[type](`${text}`, {
    className: "black-background",
    position: "top-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkBox, setCheckBox] = useState();
  function signInFormHandler(event) {
    event.preventDefault();
    const emailValidator = validateEmail(`${email}`);
    const userData = JSON.parse(localStorage.getItem("users") || "[]");

    if (!email) {
      toasted("error", "Email Must be Fill");
      return;
    }
    if (!emailValidator) {
      toasted("error", "Email Must be Valid Email");
      return;
    }
    if (!password) {
      toasted("error", "Password Must Be Fill");
      return;
    }
    if (!checkBox) {
      toasted("error", "CheckBox Must be Checked");
      return;
    }

    const validUser = userData.find(
      (data) => data.email === email && data.password === password
    );

    if (validUser === undefined) {
      toasted("error", "Email or Password Is Not Exist");
      return;
    }

    toasted("success", "You are Signed In....");

    store.dispatch({ type: "setUser", payload: validUser });
    localStorage.setItem("UserLogedIn", validUser.id);

    setTimeout(() => {
      history.replace("/profile");
    }, 500);
  }
  function changeHandler(event) {
    if (event.target.name == "email") {
      const email = event.target.value;
      setEmail(email);
    }
    if (event.target.name == "password") {
      const password = event.target.value;
      setPassword(password);
    }
    if (event.target.name == "checkbox") {
      const checkbox = event.target.value;
      setCheckBox(checkbox);
    }
    !event.target.value
      ? (event.target.style.border = "1px solid red")
      : (event.target.style.border = "1px solid #ffd80e");
  }
  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className="sign__content">
              <form
                action="#"
                className="sign__form"
                onSubmit={signInFormHandler}
              >
                <a href="/signin" className="sign__logo">
                  <img src="img/logo.svg" alt="" />
                </a>

                <div className="sign__group">
                  <input
                    name="email"
                    type="text"
                    className="sign__input"
                    placeholder="Email"
                    onChange={changeHandler}
                  />
                </div>

                <div className="sign__group">
                  <input
                    name="password"
                    type="password"
                    className="sign__input"
                    placeholder="Password"
                    onChange={changeHandler}
                  />
                </div>

                <div className="sign__group sign__group--checkbox">
                  <input
                    id="remember"
                    name="checkbox"
                    type="checkbox"
                    onChange={changeHandler}
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>

                <input type="submit" value="SIGN IN" className="sign__btn" />
                <span className="sign__text">
                  Don't have an account? <Link to="/signup">Sign Up!</Link>
                </span>

                <span className="sign__text">
                  <Link to="/forgot">Forgot password?</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
