import { useSelector } from "react-redux";
import Nala from "./nala.jpeg";
import Sarabi from "./sarabi.jpeg";
import "./dogos.css";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container text-center">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
          My Dogos
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
      <div
        id={`${darkMode ? "section-text-light" : "section-text-dark"}`}
        className="row h-100 w-100"
      >
        <div className="col-12 col-md-6">
          {" "}
          <img
            id="dogos-image"
            className="rounded-circle my-2 img-fluid"
            src={Nala}
            alt="nala"
          />
          <p>
            <strong>Nala</strong>
          </p>
          <p>
            The responsible older sister that listens sometimes. She loves to
            play, cuddle and bark at random things.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img
            id="dogos-image"
            className="rounded-circle my-2 img-fluid"
            src={Sarabi}
            alt="sarabi"
          />
          <p>
            <strong>Sarabi</strong>
          </p>
          <p>
            She is the spontaneous younger sister. She loves her belly rubs and
            arguing with her sister.
          </p>
        </div>
      </div>
    </div>
  );
}
