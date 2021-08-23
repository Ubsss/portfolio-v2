import { useState, Fragment } from "react";
import { Navigation, NavigationOptions } from "./components/navigation";
import { useSelector } from "react-redux";
import "./app.css";
import Social from "./components/social";

function App() {
  const currentView = useSelector((state) => state.currentView);

  return (
    <Fragment>
      <div className="container app">
        <div className="row h-100">
          <div className=" col-4 d-none d-lg-block align-self-center">
            <NavigationOptions />
            <Social />
          </div>
          <div className="col-12 col-lg-8">
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
