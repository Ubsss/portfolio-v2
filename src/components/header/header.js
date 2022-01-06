import { useDispatch, useSelector } from "react-redux";
import "./header.css";

function Header() {
  const darkMode = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  const handleModeUpdate = () => {
    dispatch({
      type: "UPDATE_MODE",
      payload: !darkMode,
    });

    let rootBackgroundColor = document.getElementById("root");
    rootBackgroundColor.style.backgroundColor = darkMode
      ? "#1f262a"
      : "#f5f5f5";
  };

  const updateView = (view) => {
    dispatch({
      type: "UPDATE_VIEW",
      payload: view,
    });
  };

  return (
    <div className="mb-2 position-relative">
      <span id="header-name" onClick={() => updateView("home")}>
        Uboh
      </span>
      <input
        className="dark-mode-toggle position-absolute top-50 start-50"
        type="checkbox"
        checked={darkMode}
        value={darkMode}
        onChange={handleModeUpdate}
      />
    </div>
  );
}

function HeaderMobile() {
  const darkMode = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  const handleModeUpdate = () => {
    dispatch({
      type: "UPDATE_MODE",
      payload: !darkMode,
    });

    let rootBackgroundColor = document.getElementById("root");
    rootBackgroundColor.style.backgroundColor = darkMode
      ? "#1f262a"
      : "#f5f5f5";
  };

  const updateView = (view) => {
    dispatch({
      type: "UPDATE_VIEW",
      payload: view,
    });
  };

  return (
    <div className="mb-2">
      <div id="header-name">
        {" "}
        <span onClick={() => updateView("home")}>Uboh</span>
      </div>
      <div>
        <input
          className="dark-mode-toggle-mobile"
          type="checkbox"
          checked={darkMode}
          value={darkMode}
          onChange={handleModeUpdate}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
    </div>
  );
}

export { Header, HeaderMobile };
