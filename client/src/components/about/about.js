import { useSelector } from "react-redux";
import "./about.css";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container text-center">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
          People, technology, and solutions
        </span>
        <br />
        <span
          id={`${
            darkMode ? "section-subtitle-light" : "section-subtitle-dark"
          }`}
        >
          Here are my little trouble makers.
        </span>
      </p>
    </div>
  );
}
