import { useState, Fragment } from "react";
import { Navigation, NavigationOptions } from "./components/navigation";
import { useSelector } from "react-redux";
import "./app.css";
import Social from "./components/social";
import { Header } from "./components/header";

function App() {
  const currentView = useSelector((state) => state.currentView);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <Fragment>
      <div
        id="app"
        className={`container ${darkMode ? "light-mode-bg" : "dark-mode-bg"}`}
      >
        <div className="row h-100">
          <div className=" col-4 d-none d-lg-block align-self-center">
            <Header />
            <NavigationOptions />
            <Social />
          </div>
          <div className="col-12 col-lg-8 mt-5">
            {currentView === "home" && "Home"}
            {currentView === "about" && "About"}
            {currentView === "community" && "Community"}
            {currentView === "connect" && "Connect"}
            {currentView === "dogos" && "Dogos"}
            {currentView === "game" && "Game"}
          </div>
        </div>
      </div>
      <Navigation />
    </Fragment>
  );
}

export default App;
