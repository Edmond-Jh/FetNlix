import React from "react";

export default function Forgot() {
  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              {/* <!-- authorization form --> */}
              <form action="#" className="sign__form">
                <a href="/forgot" className="sign__logo">
                  <img src="img/newlogo.png" alt="" />
                </a>

                <div className="sign__group">
                  <input
                    type="text"
                    className="sign__input"
                    placeholder="Email"
                  />
                </div>

                <div className="sign__group sign__group--checkbox">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked="checked"
                  />
                  <label for="remember">
                    I agree to the <a href="/privacy">Privacy Policy</a>
                  </label>
                </div>

                <button className="sign__btn" type="button">
                  Sign in
                </button>

                <span className="sign__text">
                  We will send a password to your Email
                </span>
              </form>
              {/* <!-- end authorization form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
