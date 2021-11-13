import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import svglogo from "../../img/logo.svg";

export default function Header() {
  const [data, setData] = useState();
  const ids = localStorage.getItem("UserLogedIn");

  const usersArar = JSON.parse(localStorage.getItem("users"));
  let userId;
  if (usersArar) {
    userId = usersArar.find(({ id }) => id == ids);
  }
  const userData = useSelector((state) => state.user.state);

  function searchHandler(event) {
    console.log(event.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&query=${event.target.value}&page=1&include_adult=true`
    )
      .then((response) => response.json())
      .then((res) => setData(res));
  }
  console.log(data);
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
                  <div className="dropdown">
                    <input
                      className="dropbtn"
                      placeholder="Search...."
                      onChange={searchHandler}
                    />
                    <div className="dropdown-content">
                      {console.log(data)}
                      {!data ? (
                        <div></div>
                      ) : (
                        data?.results.map((data) => {
                          return (
                            <>
                              {data?.media_type == "tv" ? (
                                <>
                                  <Link
                                    className="movie-search-item"
                                    to={`/tvseries/${data.id}`}
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                                      alt=""
                                      className="col-md-4"
                                    />

                                    <p className="col-md-8">
                                      {data?.name}
                                      <br />
                                      Series
                                      <br />
                                      {data?.first_air_date}
                                    </p>
                                  </Link>
                                  <hr />
                                </>
                              ) : (
                                <>
                                  <Link
                                    className="movie-search-item"
                                    to={`/posts/${data.id}`}
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                                      alt=""
                                      className="col-md-4"
                                    />

                                    <p className="col-md-8">
                                      {data?.title}
                                      <br />
                                      {data?.release_date}
                                    </p>
                                  </Link>
                                  <hr />
                                </>
                              )}
                            </>
                          );
                        })
                      )}
                    </div>
                  </div>
                  {/* <div>
                    <input
                      className="header__search-input"
                      type="text"
                      placeholder="Search..."
                      onChange={searchHandler}
                    />

                    {console.log(data)}
                    <div style={{ display: "flex" }}>
                      {data ? (
                        data?.results.map((data) => {
                          console.log(data);
                          return (
                            <div>
                              <img
                                src={`https://image.tmdb.org/t/p/w500${data?.logo_path}`}
                                alt=""
                              />
                            </div>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div> */}
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
                      {userData ? userData?.nickname : userId?.nickname}
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
