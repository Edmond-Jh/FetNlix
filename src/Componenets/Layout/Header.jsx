import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import svglogo from "../../img/logo.svg";

export default function Header() {
  const ids = localStorage.getItem("UserLogedIn");

  const usersArar = JSON.parse(localStorage.getItem("users"));
  const userId = usersArar.find(({ id }) => id == ids);

  const userData = useSelector((state) => state.user);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              {/* <!-- header logo --> */}
              <a href="/" className="header__logo">
                <img src={svglogo} alt="" />
              </a>
              {/* <!-- end header logo --> */}

              {/* <!-- header nav --> */}
              <ul className="header__nav">
                {/* <!-- dropdown --> */}
                <li className="header__nav-item">
                  <Link to="/" className="header__nav-link">
                    Home
                  </Link>
                </li>
                {/* <!-- end dropdown --> */}

                {/* <!-- dropdown --> */}
                <li className="header__nav-item">
                  <a
                    className="dropdown-toggle header__nav-link"
                    href="/"
                    role="button"
                    id="dropdownMenuCatalog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Catalog
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuCatalog"
                  >
                    <li>
                      <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                      <Link to="/details">Movie Detail</Link>
                    </li>
                  </ul>
                </li>
                {/* <!-- end dropdown --> */}

                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/pricing">
                    Pricing Plan
                  </Link>
                </li>

                <li className="header__nav-item">
                  <Link to="/help" className="header__nav-link">
                    Help
                  </Link>
                </li>

                {/* <!-- dropdown --> */}
                <li className="dropdown header__nav-item">
                  <a
                    className="dropdown-toggle header__nav-link header__nav-link--more"
                    href="/"
                    role="button"
                    id="dropdownMenuMore"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon ion-ios-more"></i>
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuMore"
                  >
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                      <Link to="/forgot">Forgot Password</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                      <Link to="/P404">404 Page</Link>
                    </li>
                  </ul>
                </li>
                {/* <!-- end dropdown --> */}
              </ul>
              {/* <!-- end header nav --> */}

              {/* <!-- header auth --> */}
              <div className="header__auth">
                <form action="#" className="header__search">
                  <input
                    className="header__search-input"
                    type="text"
                    placeholder="Search..."
                  />
                  <button className="header__search-button" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>
                  <button className="header__search-close" type="button">
                    <i className="icon ion-md-close"></i>
                  </button>
                </form>

                <button className="header__search-btn" type="button">
                  <i className="icon ion-ios-search"></i>
                </button>

                {/* <!-- dropdown --> */}
                <div className="dropdown header__lang">
                  <a
                    className="dropdown-toggle header__nav-link"
                    href="/"
                    role="button"
                    id="dropdownMenuLang"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    EN
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuLang"
                  >
                    <li>
                      <a href="/">English</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end dropdown --> */}

                {!userData && userId == null ? (
                  <Link className="header__sign-in" to="/signin">
                    <i className="icon ion-ios-log-in"></i>
                    <span>sign in</span>
                  </Link>
                ) : (
                  <Link to="/profile">
                    <span
                      className="header__sign-in"
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "15px",
                      }}
                    >
                      {userData ? userData?.state.username : userId?.username}
                    </span>
                  </Link>
                )}
              </div>
              {/* <!-- end header auth --> */}

              {/* <!-- header menu btn --> */}
              <button className="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- end header menu btn --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
