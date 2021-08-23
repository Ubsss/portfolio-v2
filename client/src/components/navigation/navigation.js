import { Fragment } from "react";
import { NavigationOptions } from ".";
import "./navigation.css";
import Social from "../social";
import { HeaderMobile } from "../header";
import { useSelector } from "react-redux";

export default function Navigation() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            id="navBarIcon"
            className="btn btn-primary navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-start ${
          darkMode ? "light-mode-bg" : "dark-mode-bg"
        }`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <HeaderMobile />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex align-items-center">
          <div id="mobile-navigation-options">
            <NavigationOptions />
            <Social />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
