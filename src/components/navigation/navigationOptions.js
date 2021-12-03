import { navigationOptionsData } from "./navigationOptionsData";
import "./navigation.css";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavigationOptions(props) {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.darkMode);
  const currentView = useSelector((state) => state.currentView);
  const adviceUpdate = useSelector((state) => state.adviceUpdate);

  const handleLikesUpdate = async () => {
    // finish function ***
    try {
      if (adviceUpdate) {
        // await data being sent to db ****
        console.log("Updating likes, current likes: \n");
        console.log(adviceUpdate);
        dispatch({
          type: "UPDATE_ADVICE_UPDATE",
          payload: {},
        });
      }
    } catch (error) {
      console.log("error sending likes data: \n");
      console.error(error);
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
        if (idx === 0 || idx === 3) {
          return (
            <div key={idx}>
              <button
                id="btn-medium-width"
                type="button"
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
