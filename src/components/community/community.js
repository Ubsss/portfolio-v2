import { useSelector } from "react-redux";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container text-center">
      <p id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
        Giving Back Motivates Me
      </p>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p
            id={`${
              darkMode ? "section-subtitle-light" : "section-subtitle-dark"
            }`}
          >
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
        </blockquote>
        <figcaption
          id={`${darkMode ? "section-text-light" : "section-text-dark"}`}
          className="blockquote-footer"
        >
          Mahatma Gandhi
        </figcaption>
      </figure>
    </div>
  );
}
