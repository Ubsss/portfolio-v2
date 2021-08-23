import { useDispatch, useSelector } from "react-redux";
import "./header.css";

export default function Headers() {
  const darkMode = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();

  const handleModeUpdate = () => {
    dispatch({
      type: "UPDATE_MODE",
      payload: !darkMode,
    });
  };

  return (
    <div className="mb-2 position-relative">
      <span id="header-name">Uboh</span>
      <input
        className="dark-mode-toggle position-absolute top-50 start-50"
        type="checkbox"
        value={darkMode}
        onChange={handleModeUpdate}
      />
    </div>
  );
}
