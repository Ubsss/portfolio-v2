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
import Fire from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.currentView);
  const darkMode = useSelector((state) => state.darkMode);
  const advice = useSelector((state) => state.advice);
  const adviceIDX = useSelector((state) => state.adviceIDX);

  const updateNotification = (title, show, messages, buttonText) => {
    let newNotificationObject = {
      title,
      show,
      messages,
      buttonText,
    };

    dispatch({
      type: "UPDATE_NOTIFICATION",
      payload: newNotificationObject,
    });
  };

  const loadAdvice = async () => {
    try {
      // implement logic to get advice list ****
      let token = await Fire.getCurrentUserToken();
      let fetchAdviceData = await fetch(
        process.env.REACT_APP_BACKEND_ENDPOINT,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "getAllAdvice" }),
        }
      );
      let adviceData = await fetchAdviceData.json();
      if (adviceData.code === 200) {
        dispatch({
          type: "UPDATE_ADVICE",
          payload: adviceData.message,
        });
      }
    } catch (error) {
      let message = ["Unable to get advice 😭"];
      updateNotification("Heads up", true, message, "Ok");
    }
  };

  const setAdviceIDX = () => {
    if (advice && advice.length > 0) {
      if (adviceIDX === null) {
        dispatch({
          type: "UPDATE_ADVICE_IDX",
          payload: Math.ceil(Math.random() * (advice.length - 0) + 0),
        });
      }
    }
  };

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

  useEffect(() => {
    triggerCookiesMessage();
    if (!advice) loadAdvice();
    setAdviceIDX();
  }, [advice]);

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
            <Notification />
          </div>
        </div>
      </div>
      <Navigation />
    </Fragment>
  );
}

export default App;
