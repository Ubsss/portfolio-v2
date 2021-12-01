import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileImage from "./profilePhoto-mini.jpg";
import developersIcon from "./developers.png";
import careerIcon from "./career.png";
import entrepreneursIcon from "./entrepreneurs.png";
import adviceIcon from "./advice.png";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const advice = useSelector((state) => state.advice);
  const [idx, setIDX] = useState(null);
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const formateAdvice = () => {
    if (advice) {
      if (idx === null) {
        let currentIDX = Math.ceil(Math.random() * (advice.length - 0) + 0);
        setIDX(currentIDX);
        if (advice[currentIDX].category === "career") setIcon(careerIcon);
        else if (advice[currentIDX].category === "developers")
          setIcon(developersIcon);
        else if (advice[currentIDX].category === "entrepreneurs")
          setIcon(entrepreneursIcon);
        else setIcon(adviceIcon);
      }
    }
  };

  const handleAdviceLike = () => {
    // send to db
    let currentAdvices = [...advice];
    currentAdvices[idx].likes += 1;
    dispatch({ type: "UPDATE_ADVICE", payload: currentAdvices });
  };

  useEffect(() => {
    formateAdvice();
  }, [advice]);

  return (
    <div className="container">
      <div className="text-center">
        <p>
          <span
            id={`${darkMode ? "section-title-light" : "section-title-dark"}`}
          >
            Hello and welcome
          </span>
          <br />
          <span
            id={`${
              darkMode ? "section-subtitle-light" : "section-subtitle-dark"
            }`}
          >
            I'm Uchechukwu Uboh
          </span>
        </p>
        <img
          id="home-image"
          className="rounded-circle mb-2 img-fluid"
          src={ProfileImage}
          alt="home"
        />
      </div>
      <div>
        <div
          className={`alert  align-items-center  ${
            darkMode ? "advice-card-light" : "advice-card-dark"
          }`}
          role="alert"
        >
          {advice && idx !== null && icon ? (
            <div>
              <div className="row w-100">
                <div className="col-6">
                  <img
                    id="advice-icon"
                    src={icon}
                    className="rounded me-2"
                    alt={`advice-icon`}
                  />
                  <strong>{`${advice[idx]?.category}`} </strong>
                </div>
                <div className="col-6 text-end">
                  likes: <strong>{`${advice[idx]?.likes}`}</strong>
                </div>
              </div>
              <blockquote className="blockquote mb-0">
                <p>{`${advice[idx]?.advice}`}</p>
                <footer className="blockquote-footer">{`${advice[idx]?.author}`}</footer>
              </blockquote>
              <div className="text-end ">
                <button
                  disabled={loading}
                  onClick={handleAdviceLike}
                  className={`btn btn-outline-secondary btn ${
                    darkMode ? "button-style-light" : "button-style-dark"
                  }`}
                >
                  like
                </button>
              </div>
            </div>
          ) : (
            "Loading advice ..."
          )}
        </div>
      </div>
    </div>
  );
}
