import { navigationOptionsData } from "./navigationOptionsData";
import "./navigation.css";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fire from "../../utils/firebase";

export default function NavigationOptions(props) {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.darkMode);
  const currentView = useSelector((state) => state.currentView);
  const adviceUpdate = useSelector((state) => state.adviceUpdate);

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

  const handleLikesUpdate = async () => {
    try {
      if (adviceUpdate !== null) {
        // await data being sent to db ****
        let token = await Fire.getCurrentUserToken();
        let deconstructedAdviceUpdate = Object.entries(adviceUpdate);
        await fetch(process.env.REACT_APP_BACKEND_ENDPOINT, {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "likeAdvice",
            adviceID: deconstructedAdviceUpdate[0][0],
            newLikes: deconstructedAdviceUpdate[0][1],
          }),
        });
        dispatch({
          type: "UPDATE_ADVICE_UPDATE",
          payload: null,
        });
      }
    } catch (error) {
      let message = [
        "Unable to record your advice like(s), please try again later 😅",
      ];
      updateNotification("Heads up", true, message, "Ok");
    }
  };

  const updateView = (view) => {
    dispatch({
      type: "UPDATE_VIEW",
      payload: view,
    });
    handleLikesUpdate();
  };

  return (
    <Fragment>
      {navigationOptionsData.map((option, idx) => {
        if (idx === 0 || idx === 2) {
          return (
            <div key={idx}>
              <button
                id="btn-medium-width"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className={`btn btn-outline-secondary btn-lg my-4 ${
                  darkMode ? "button-style-light" : "button-style-dark"
                } ${currentView === option.view && "current-view-btn"}`}
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>{" "}
              <br />{" "}
            </div>
          );
        } else {
          return (
            <div key={idx}>
              <button
                id="btn-large-width"
                key={idx}
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className={`btn btn-outline-secondary btn-lg my-4 ${
                  darkMode ? "button-style-light" : "button-style-dark"
                } ${currentView === option.view && "current-view-btn"}`}
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>{" "}
              <br />
            </div>
          );
        }
      })}
    </Fragment>
  );
}
