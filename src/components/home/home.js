import { useState, useEffect } from "react";
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
  const [idx, setIDX] = useState(0);
  const [icon, setIcon] = useState(adviceIcon);

  const assignIDX = () => {
    if (advice?.length !== 0) {
      setIDX(Math.random() * (advice?.length || 0 - 0) + 0);
      console.log(idx);
    }
  };

  const assignIcon = () => {
    if (advice) {
      if (advice[idx]?.category === "career") setIcon(careerIcon);
      if (advice[idx]?.category === "developers") setIcon(developersIcon);
      if (advice[idx]?.category === "entrepreneurs") setIcon(entrepreneursIcon);
    }
  };

  useEffect(() => {
    assignIDX();
    assignIcon();
  }, [advice]);

  return (
    <div className="container ">
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
          className={`alert d-flex align-items-center ${
            darkMode ? "advice-card-light" : "advice-card-dark"
          }`}
          role="alert"
        >
          <div>
            <img
              id="advice-icon"
              src={icon ? icon : adviceIcon}
              className="rounded me-2"
              alt={`advice-icon`}
            />
            <strong className="pr-2">
              {" "}
              {`${(advice && advice[idx]?.category) || "everyone"}`}
            </strong>
          </div>

          <div>
            {`${(advice && advice[idx]?.advice) || "Patience is a virtue."}`} -
            <i> {`${(advice && advice[idx]?.author) || "Me"}`} </i>
          </div>
        </div>
      </div>
    </div>
  );
}
