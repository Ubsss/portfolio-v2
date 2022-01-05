import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { capitalizeFirstChar } from "../../utils/formatters";
import ProfileImage from "./profileImg.jpg";
import developersIcon from "./developers.png";
import careerIcon from "./career.png";
import entrepreneursIcon from "./entrepreneurs.png";
import adviceIcon from "./advice.png";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const advice = useSelector((state) => state.advice);
  const adviceIDX = useSelector((state) => state.adviceIDX);
  const adviceUpdate = useSelector((state) => state.adviceUpdate);
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const formateAdvice = () => {
    if (advice && adviceIDX !== null) {
      console.log("checking advice");
      if (advice[adviceIDX].category === "career") setIcon(careerIcon);
      else if (advice[adviceIDX].category === "developers")
        setIcon(developersIcon);
      else if (advice[adviceIDX].category === "entrepreneurs")
        setIcon(entrepreneursIcon);
      else setIcon(adviceIcon);
    }
  };

  const handleAdviceLike = () => {
    // send to db
    let currentAdvices = [...advice];
    let currentAdviceUpdate = Object.assign({}, adviceUpdate);
    currentAdvices[adviceIDX].likes += 1;
    if (`${currentAdvices[adviceIDX].id}` in currentAdviceUpdate) {
      currentAdviceUpdate[`${currentAdvices[adviceIDX].id}`] += 1;
    } else {
      currentAdviceUpdate[`${currentAdvices[adviceIDX].id}`] = 1;
    }
    dispatch({ type: "UPDATE_ADVICE", payload: currentAdvices });
    dispatch({ type: "UPDATE_ADVICE_UPDATE", payload: currentAdviceUpdate });
  };

  useEffect(() => {
    formateAdvice();
  }, [advice, adviceIDX]);

  return (
    <div className="container">
      <div className="text-center mb-4">
        <p>
          <span
            id={`${darkMode ? "section-title-light" : "section-title-dark"}`}
          >
            Hello and Welcome
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
          className="rounded-circle img-fluid"
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
          {advice && adviceIDX !== null && icon ? (
            <div>
              <div className="row w-100">
                <div className="col-6">
                  <img
                    id="advice-icon"
                    src={icon}
                    className="rounded me-2"
                    alt={`advice-icon`}
                  />
                  <strong>
                    {`${capitalizeFirstChar(advice[adviceIDX]?.category)}`}{" "}
                  </strong>
                </div>
                <div className="col-6 text-end">
                  Likes:{" "}
                  <strong>{`${
                    advice[adviceIDX]?.likes > 1000
                      ? "1000+"
                      : advice[adviceIDX]?.likes
                  }`}</strong>
                </div>
              </div>
              <blockquote className="blockquote mb-0">
                <p>{`${advice[adviceIDX]?.advice}`}</p>
                <footer className="blockquote-footer">{`${advice[adviceIDX]?.author}`}</footer>
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
            "Hope you  are having a great day ..."
          )}
        </div>
      </div>
    </div>
  );
}
