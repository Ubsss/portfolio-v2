import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./home.css";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
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
    </div>
  );
}
