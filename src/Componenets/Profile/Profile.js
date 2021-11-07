import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import bgpictture from "../../img/section/section.jpg";
import store from "../store/store";
export default function Profile() {
  const userData = useSelector((state) => state.user);
  const [data, setData] = useState();
  const [idNum, setIdNum] = useState();
  const history = useHistory();
  setTimeout(() => {
    setData(userData);
  }, 100);

  useEffect(() => {
    const userLogedIn = localStorage.getItem("UserLogedIn");
    setIdNum(userLogedIn);
  }, []);

  const usersArar = JSON.parse(localStorage.getItem("users"));
  const userId = usersArar.find(({ id }) => id == idNum);

  console.log(userId);

  function logouthandler() {
    let OutConfirm = window.confirm("Are You Sure?");
    if (OutConfirm) {
      localStorage.removeItem("UserLogedIn");
      store.dispatch({ type: "removeUser", payload: false });
      history.replace("/");
    }
  }
  return (
    <div>
      {userId ? (
        <div>
          <section
            className="section section--first section--bg"
            data-bg={bgpictture}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section__wrap">
                    {/* <!-- section title --> */}
                    <h2 className="section__title">
                      Welcome{" "}
                      {data ? (
                        idNum ? (
                          userId?.username
                        ) : (
                          userData?.state?.username
                        )
                      ) : (
                        <div>No Data</div>
                      )}
                    </h2>
                    {/* <!-- end section title --> */}

                    {/* <!-- breadcrumb --> */}
                    <ul className="breadcrumb">
                      <li className="breadcrumb__item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb__item breadcrumb__item--active">
                        Profile
                      </li>
                    </ul>
                    {/* <!-- end breadcrumb --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- end page title --> */}

          {/* <!-- content --> */}
          <div className="content">
            {/* <!-- profile --> */}
            <div className="profile">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="profile__content">
                      <div className="profile__user">
                        <div className="profile__avatar">
                          <img src="img/user.svg" alt="" />
                        </div>
                        <div className="profile__meta">
                          <h3>Username</h3>
                          <span>
                            FetNelix ID:{" "}
                            {data ? (
                              idNum ? (
                                userId?.id
                              ) : (
                                userData?.state?.id
                              )
                            ) : (
                              <div>No Data</div>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* <!-- content tabs nav --> */}
                      <ul
                        className="nav nav-tabs content__tabs content__tabs--profile"
                        id="content__tabs"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#tab-1"
                            role="tab"
                            aria-controls="tab-1"
                            aria-selected="true"
                          >
                            Profile
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tab-2"
                            role="tab"
                            aria-controls="tab-2"
                            aria-selected="false"
                          >
                            Subscription
                          </a>
                        </li>
                      </ul>
                      {/* <!-- end content tabs nav --> */}

                      {/* <!-- content mobile tabs nav --> */}
                      <div
                        className="content__mobile-tabs content__mobile-tabs--profile"
                        id="content__mobile-tabs"
                      >
                        <div
                          className="content__mobile-tabs-btn dropdown-toggle"
                          role="navigation"
                          id="mobile-tabs"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <input type="button" value="Profile" />
                          <span></span>
                        </div>

                        <div
                          className="content__mobile-tabs-menu dropdown-menu"
                          aria-labelledby="mobile-tabs"
                        >
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="1-tab"
                                data-toggle="tab"
                                href="#tab-1"
                                role="tab"
                                aria-controls="tab-1"
                                aria-selected="true"
                              >
                                Profile
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="2-tab"
                                data-toggle="tab"
                                href="#tab-2"
                                role="tab"
                                aria-controls="tab-2"
                                aria-selected="false"
                              >
                                Subscription
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- end content mobile tabs nav --> */}

                      <button
                        className="profile__logout"
                        type="button"
                        onClick={logouthandler}
                      >
                        <i className="icon ion-ios-log-out"></i>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end profile --> */}

            <div className="container">
              {/* <!-- content tabs --> */}
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                  aria-labelledby="1-tab"
                >
                  <div className="row">
                    {/* <!-- details form --> */}
                    <div className="col-12 col-lg-6">
                      <form action="#" className="profile__form">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="profile__title">Profile details</h4>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label
                                className="profile__label"
                                htmlFor="username"
                              >
                                Username
                              </label>
                              <input
                                id="username"
                                type="text"
                                name="username"
                                className="profile__input"
                                placeholder="User 123"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label className="profile__label" htmlFor="email">
                                Email
                              </label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                className="profile__input"
                                placeholder="email@email.com"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label
                                className="profile__label"
                                htmlFor="firstname"
                              >
                                First Name
                              </label>
                              <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                className="profile__input"
                                placeholder="John"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label
                                className="profile__label"
                                htmlFor="lastname"
                              >
                                Last Name
                              </label>
                              <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                className="profile__input"
                                placeholder="Doe"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <button className="profile__btn" type="button">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <!-- end details form --> */}

                    {/* <!-- password form --> */}
                    <div className="col-12 col-lg-6">
                      <form action="#" className="profile__form">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="profile__title">Change password</h4>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label
                                className="profile__label"
                                htmlFor="oldpass"
                              >
                                Old Password
                              </label>
                              <input
                                id="oldpass"
                                type="password"
                                name="oldpass"
                                className="profile__input"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label
                                className="profile__label"
                                htmlFor="newpass"
                              >
                                New Password
                              </label>
                              <input
                                id="newpass"
                                type="password"
                                name="newpass"
                                className="profile__input"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="profile__group">
                              <label
                                className="profile__label"
                                htmlFor="confirmpass"
                              >
                                Confirm New Password
                              </label>
                              <input
                                id="confirmpass"
                                type="password"
                                name="confirmpass"
                                className="profile__input"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <button className="profile__btn" type="button">
                              Change
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <!-- end password form --> */}
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="tab-2"
                  role="tabpanel"
                  aria-labelledby="2-tab"
                >
                  <div className="row">
                    {/* <!-- price --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="price price--profile">
                        <div className="price__item price__item--first">
                          <span>Basic</span> <span>Free</span>
                        </div>
                        <div className="price__item">
                          <span>7 days</span>
                        </div>
                        <div className="price__item">
                          <span>720p Resolution</span>
                        </div>
                        <div className="price__item">
                          <span>Limited Availability</span>
                        </div>
                        <div className="price__item">
                          <span>Desktop Only</span>
                        </div>
                        <div className="price__item">
                          <span>Limited Support</span>
                        </div>
                        <a href="/" className="price__btn">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                    {/* <!-- end price --> */}

                    {/* <!-- price --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="price price--profile price--premium">
                        <div className="price__item price__item--first">
                          <span>Premium</span> <span>$19.99</span>
                        </div>
                        <div className="price__item">
                          <span>1 Month</span>
                        </div>
                        <div className="price__item">
                          <span>Full HD</span>
                        </div>
                        <div className="price__item">
                          <span>Lifetime Availability</span>
                        </div>
                        <div className="price__item">
                          <span>TV And Desktop</span>
                        </div>
                        <div className="price__item">
                          <span>24/7 Support</span>
                        </div>
                        <a href="/" className="price__btn">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                    {/* <!-- end price --> */}

                    {/* <!-- price --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="price price--profile">
                        <div className="price__item price__item--first">
                          <span>Cinematic</span> <span>$39.99</span>
                        </div>
                        <div className="price__item">
                          <span>2 Months</span>
                        </div>
                        <div className="price__item">
                          <span>Ultra HD</span>
                        </div>
                        <div className="price__item">
                          <span>Lifetime Availability</span>
                        </div>
                        <div className="price__item">
                          <span>Any Device</span>
                        </div>
                        <div className="price__item">
                          <span>24/7 Support</span>
                        </div>
                        <a href="/" className="price__btn">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                    {/* <!-- end price --> */}
                  </div>
                </div>
              </div>
              {/* <!-- end content tabs --> */}
            </div>
          </div>
          {/* <!-- end content --> */}

          {/* <!-- partners --> */}
          <section className="section section--grid section--border">
            <div className="container">
              <div className="row">
                {/* <!-- section title --> */}
                <div className="col-12">
                  <h2 className="section__title section__title--no-margin">
                    Our Partners
                  </h2>
                </div>
                {/* <!-- end section title --> */}

                {/* <!-- section text --> */}
                <div className="col-12">
                  <p className="section__text section__text--last-with-margin">
                    It is a long <b>established</b> fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using.
                  </p>
                </div>
                {/* <!-- end section text --> */}

                {/* <!-- partner --> */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <a href="/" className="partner">
                    <img
                      src="img/partners/themeforest-light-background.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                {/* <!-- end partner --> */}

                {/* <!-- partner --> */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <a href="/" className="partner">
                    <img
                      src="img/partners/audiojungle-light-background.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                {/* <!-- end partner --> */}

                {/* <!-- partner --> */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <a href="/" className="partner">
                    <img
                      src="img/partners/codecanyon-light-background.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                {/* <!-- end partner --> */}

                {/* <!-- partner --> */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <a href="/" className="partner">
                    <img
                      src="img/partners/photodune-light-background.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                {/* <!-- end partner --> */}

                {/* <!-- partner --> */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <a href="/" className="partner">
                    <img
                      src="img/partners/activeden-light-background.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                {/* <!-- end partner --> */}

                {/* <!-- partner --> */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <a href="/" className="partner">
                    <img
                      src="img/partners/3docean-light-background.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                {/* <!-- end partner --> */}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              color: "Red",
              width: "700px",
              height: "500px",
              fontSize: "90px",
              padding: "50px",
              textAlign: "center",
            }}
          >
            No Data
            <br /> Try To Sign in Again
          </h1>
        </div>
      )}
    </div>
  );
}
