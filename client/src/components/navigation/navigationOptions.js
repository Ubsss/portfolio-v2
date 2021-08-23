import { navigationOptionsData } from "./navigationOptionsData";
import "./navigation.css";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavigationOptions(props) {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.darkMode);

  const updateView = (view) => {
    dispatch({
      type: "UPDATE_VIEW",
      payload: view,
    });
  };

  return (
    <Fragment>
      {navigationOptionsData.map((option, idx) => {
        if (idx === 1 || idx === 3) {
          return (
            <div key={idx}>
              <button
                id="btn-medium-width"
                type="button"
                className={`btn btn-outline-secondary btn-lg my-4 ${
                  darkMode ? "button-style-light" : "button-style-dark"
                }`}
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>{" "}
              <br />{" "}
            </div>
          );
        } else if (idx === 2) {
          return (
            <div key={idx}>
              <button
                id="btn-large-width"
                type="button"
                className={`btn btn-outline-secondary btn-lg my-4 ${
                  darkMode ? "button-style-light" : "button-style-dark"
                }`}
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>
              <br />
            </div>
          );
        } else {
          return (
            <div key={idx}>
              <button
                key={idx}
                type="button"
                className={`btn btn-outline-secondary btn-lg my-4 ${
                  darkMode ? "button-style-light" : "button-style-dark"
                }`}
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
