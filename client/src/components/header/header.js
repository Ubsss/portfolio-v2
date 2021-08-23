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

  return (
    <div className="mb-2 position-relative">
      <span id="header-name">Uboh</span>
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

export default function HeaderMobile() {
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

  return (
    <div className="mb-2">
      <div id="header-name">Uboh</div>
      <div>
        <input
          className="dark-mode-toggle-mobile"
          type="checkbox"
          checked={darkMode}
          value={darkMode}
          onChange={handleModeUpdate}
        />
      </div>
    </div>
  );
}

export { Header, HeaderMobile };
