import { Link } from "react-router-dom";

function P404() {
  return (
    // <!-- page 404 -->
    <div className="page-404 section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-404__wrap">
              <div className="page-404__content">
                <h1 className="page-404__title">404</h1>
                <p className="page-404__text">
                  The page you are looking for not available!
                </p>
                <Link className="page-404__btn" to="/">
                  go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- end page 404 -->
  );
}
export default P404;
