import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./CSS/bootstrap-reboot.min.css";
import "./CSS/bootstrap-grid.min.css";
import "./CSS/owl.carousel.min.css";
import "./CSS/jquery.mCustomScrollbar.min.css";
import "./CSS/nouislider.min.css";
import "./CSS/ionicons.min.css";
import "./CSS/plyr.css";
import "./CSS/photoswipe.css";
import "./CSS/default-skin.css";
import "./CSS/main.css";
import svglogo from "./img/logo.svg";

// import About from "./Componenets/About/About";
import P404 from "./Componenets/404/404";
import SignIn from "./Componenets/SignIn/SignIn";
import Home from "./Componenets/MainPageComponents/Home/Home";
import Catalog from "./Componenets/Catalog/Catalog";
import Pricing from "./Componenets/Pricing/Pricing";
import Help from "./Componenets/Help/Help";
import MoviePage from "./Componenets/MoviePage/MoviePage";
import SignUp from "./Componenets/SignUp/SignUp";
import Privacy from "./Componenets/Privacy/Privacy";
import Forgot from "./Componenets/Forgot/Forgot";
import Detail from "./Componenets/Detail/Detail";
import About from "./Componenets/About/About";
import Profile from "./Componenets/Profile/Profile";
import Contacts from "./Componenets/Contacts/Contacts";
import TvSeriesPage from "./Componenets/TvSeriesPage/TvSeriesPage";

import { Provider } from "react-redux";
import str from "./Componenets/store/store";
function App() {
  return (
    <BrowserRouter>
      {/* // <!-- header --> */}

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
                      <li>
                        <a href="/">Spanish</a>
                      </li>
                      <li>
                        <a href="/">Russian</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- end dropdown --> */}

                  <Link className="header__sign-in" to="/signin">
                    <i className="icon ion-ios-log-in"></i>
                    <span>sign in</span>
                  </Link>
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
      {/* // <!-- header --> */}
      <Provider store={str}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/signin" exact>
            <SignIn />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>

          <Route path="/forgot" exact>
            <Forgot />
          </Route>

          <Route path="/privacy" exact>
            <Privacy />
          </Route>

          <Route path="/catalog" exact>
            <Catalog />
          </Route>
          <Route path="/details" exact>
            <Detail />
          </Route>

          <Route path="/pricing" exact>
            <Pricing />
          </Route>

          <Route path="/help" exact>
            <Help />
          </Route>

          <Route path="/posts/:id">
            <MoviePage />
          </Route>

          <Route path="/tvseries/:id">
            <TvSeriesPage />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="*" exact>
            <P404></P404>
          </Route>
        </Switch>
      </Provider>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                <a href="/" className="footer__logo">
                  <img src={svglogo} alt="" />
                </a>

                <span className="footer__copyright">
                  © 2021 FetNlix
                  <br /> Create by{" "}
                  <a href="/" target="_blank">
                    Mohamad Hossein Nazari
                  </a>
                </span>

                <nav className="footer__nav">
                  <Link to="/about">About Us</Link>
                  <Link to="/contacts">Contacts</Link>
                  <Link to="/privacy">Privacy Policy</Link>
                </nav>

                <button className="footer__back" type="button">
                  <i className="icon ion-ios-arrow-round-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;