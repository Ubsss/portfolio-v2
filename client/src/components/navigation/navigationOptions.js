import { navigationOptionsData } from "./navigationOptionsData";
import "./navigation.css";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

export default function NavigationOptions(props) {
  const dispatch = useDispatch();

  const updateView = (view) => {
    dispatch({
      type: "UPDATE_VIEW",
      payload: view,
    });
  };

  return (
    <Fragment>
      {" "}
      {navigationOptionsData.map((option, idx) => {
        if (idx === 1 || idx === 3) {
          return (
            <>
              <button
                key={idx}
                id="btn-medium-width"
                type="button"
                className="btn btn-outline-secondary btn-lg my-4"
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>{" "}
              <br />{" "}
            </>
          );
        } else if (idx === 2) {
          return (
            <>
              <button
                key={idx}
                id="btn-large-width"
                type="button"
                className="btn btn-outline-secondary btn-lg my-4"
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>
              <br />
            </>
          );
        } else {
          return (
            <>
              <button
                key={idx}
                type="button"
                className="btn btn-outline-secondary btn-lg my-4"
                onClick={() => updateView(option.view)}
              >
                {option.name}
              </button>{" "}
              <br />
            </>
          );
        }
      })}
    </Fragment>
  );
}
