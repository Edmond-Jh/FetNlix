import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
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

import str from "./Componenets/store/store";
import Layout from "./Componenets/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
