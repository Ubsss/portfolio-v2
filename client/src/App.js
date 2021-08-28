import { Fragment, useEffect } from "react";
import { Navigation, NavigationOptions } from "./components/navigation";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import Social from "./components/social";
import { Header } from "./components/header";
import Home from "./components/home";
import Notification from "./components/notification";
import Connect from "./components/connect";
import Community from "./components/community";
import Dogos from "./components/dogos";
import About from "./components/about";
import { Game, VideoGame } from "./components/game";

function App() {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.currentView);
  const darkMode = useSelector((state) => state.darkMode);

  const triggerCookiesMessage = () => {
    if (
      !localStorage.getItem("acceptedCookies") ||
      localStorage.getItem("acceptedCookies") !== "true"
    ) {
      let cookiesNotificationObject = {
        show: true,
        title: "Hey beautiful person!",
        messages: ["This site uses cookies to enhance your experience."],
        buttonText: "Got it!",
        callBack: () => localStorage.setItem("acceptedCookies", "true"),
      };
      dispatch({
        type: "UPDATE_NOTIFICATION",
        payload: cookiesNotificationObject,
      });
    }
  };

  // add cookies notification popup
  useEffect(() => {
    triggerCookiesMessage();
  }, []);

  return (
    <Fragment>
      <div
        id="app"
        className={`container ${darkMode ? "light-mode-bg" : "dark-mode-bg"}`}
      >
        <div className="row h-100 w-100">
          <div className=" col-4 d-none d-lg-block align-self-center">
            <Header />
            <NavigationOptions />
            <Social />
          </div>
          <div id="view-wrapper" className="col-12 col-lg-8 align-self-center ">
            {currentView === "home" && <Home />}
            {currentView === "about" && <About />}
            {currentView === "community" && <Community />}
            {currentView === "connect" && <Connect />}
            {currentView === "dogos" && <Dogos />}
            {currentView === "game" && <Game />}
            <Notification />
          </div>
        </div>
      </div>
      <Navigation />
      <VideoGame />
    </Fragment>
  );
}

export default App;
