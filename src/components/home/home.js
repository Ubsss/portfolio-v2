import { useSelector } from "react-redux";
import ProfileImage from "./profilePhoto-mini.jpg";
import "./home.css";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container text-center">
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
      <img
        id="home-image"
        className="rounded-circle my-5 img-fluid"
        src={ProfileImage}
        alt="home"
      />
    </div>
  );
}
