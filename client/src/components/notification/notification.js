import { useDispatch, useSelector } from "react-redux";
import "./notification.css";

export default function Notification(props) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const notification = useSelector((state) => state.notification);

  const handleClose = (e) => {
    let newNotificationObject = {
      show: false,
      title: "",
      messages: [],
      buttonText: "",
    };

    if (notification.callBack) {
      notification.callBack();
    }

    dispatch({
      type: "UPDATE_NOTIFICATION",
      payload: newNotificationObject,
    });
  };

  return (
    <div
      id="notifications-wrapper"
      className={`${notification.show ? "visible" : "invisible"}`}
    >
      <div
        id="notification"
        className={`card ${darkMode ? "light-mode-bg" : "dark-mode-bg"}`}
      >
        <div className="card-body">
          <h5
            id={`${
              darkMode ? "section-subtitle-light" : "section-subtitle-dark"
            }`}
            className="card-title"
          >
            {notification.title}
          </h5>
          {notification.messages.length > 1 ? (
            <ul
              id={`${darkMode ? "section-text-light" : "section-text-dark"}`}
              className="card-text"
            >
              {notification.messages.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              id={`${darkMode ? "section-text-light" : "section-text-dark"}`}
              className="card-text"
            >
              {notification.messages[0]}
            </p>
          )}

          <button
            type="button"
            className={`btn btn-outline-secondary btn-lg mx-1 ${
              darkMode ? "button-style-light" : "button-style-dark"
            }`}
            onClick={handleClose}
          >
            {notification.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
