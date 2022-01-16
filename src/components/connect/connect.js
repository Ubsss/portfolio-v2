import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmail, isMobilePhone, isEmpty } from "validator";
import Fire from "../../utils/firebase";
import "./connect.css";

export default function Connect() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const connect = useSelector((state) => state.connect);
  const [loading, setLoading] = useState(false);

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

  const clearConnectData = () => {
    dispatch({
      type: "UPDATE_CONNECT",
      payload: { email: "", phone: "", type: "comment", message: "" },
    });
  };

  const sendConnectData = async () => {
    try {
      let token = await Fire.getCurrentUserToken();
      let sendData = await fetch(process.env.REACT_APP_BACKEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "addMessage", message: connect }),
      });
      return await sendData.json();
    } catch (error) {
      return null;
    }
  };

  // const sendConnectSMS = async () => {
  //   try {
  //     let token = await Fire.getCurrentUserToken();
  //     let sendData = await fetch(process.env.REACT_APP_BACKEND_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         Authorization: "Bearer " + token,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         action: "sendSMS",
  //         message: JSON.stringify({ ...connect, project: "uboh" }),
  //       }),
  //     });
  //     return await sendData.json();
  //   } catch (error) {
  //     return null;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let messages = [];

    if (!isEmail(connect.email)) messages.push("Invalid email address");
    if (isEmpty(connect.message)) messages.push("Invalid message");
    if (connect.phone && !isMobilePhone(connect.phone))
      messages.push("Invalid phone number");

    if (messages.length > 0) {
      updateNotification("Heads up", true, messages, "Close");
    } else {
      // Send data to backend
      let sentData = await sendConnectData();
      if (!sentData || sentData.code !== 200) {
        messages.push(
          "Unable to deliver your message, please try again later 😩"
        );
        updateNotification("Oops!", true, messages, "Ok");
      } else {
        // await sendConnectSMS();
        messages.push("Thank you for the message 😁");
        updateNotification("Awesome!", true, messages, "Close");
        clearConnectData();
      }
    }
    setLoading(false);
  };

  return (
    <div className="container text-center">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
          Reach Out
        </span>
        <br />
        <span
          id={`${
            darkMode ? "section-subtitle-light" : "section-subtitle-dark"
          }`}
        >
          Let's build something amazing together
        </span>
      </p>
      <div className="container">
        <form onSubmit={handleSubmit} id="connect-form align-items-center">
          <input
            className={`form-control form-input mb-2 ${
              darkMode ? "form-style-dark" : "form-style-light"
            }`}
            disabled={loading}
            type="text"
            placeholder="Email *"
            aria-label="default input example"
            maxLength="100"
            value={connect.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_CONNECT",
                payload: { ...connect, email: e.target.value.trim() },
              })
            }
          />
          <input
            className={`form-control form-input mb-2 ${
              darkMode ? "form-style-dark" : "form-style-light"
            }`}
            disabled={loading}
            type="text"
            placeholder="Phone"
            aria-label="default input example"
            maxLength="100"
            value={connect.phone}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_CONNECT",
                payload: { ...connect, phone: e.target.value.trim() },
              })
            }
          />
          <select
            className={`form-select form-input mb-2 ${
              darkMode ? "form-style-dark" : "form-style-light"
            }`}
            aria-label="Default select example"
            disabled={loading}
            value={connect.type}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_CONNECT",
                payload: { ...connect, type: e.target.value.trim() },
              })
            }
          >
            <option value="comment">Comment</option>
            <option value="collaborate">Collaborate</option>
            <option value="bug">Bug</option>
          </select>
          <textarea
            className={`form-control form-input ${
              darkMode ? "form-style-dark" : "form-style-light"
            }`}
            placeholder="Message *"
            rows="5"
            maxLength="100"
            value={connect.message}
            disabled={loading}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_CONNECT",
                payload: { ...connect, message: e.target.value },
              })
            }
          />
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-outline-secondary btn-lg my-4 ${
              darkMode ? "button-style-light" : "button-style-dark"
            }`}
          >
            {loading ? (
              <span>
                Validating{" "}
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                />
              </span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
