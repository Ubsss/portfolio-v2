import { useSelector } from "react-redux";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container text-center">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
          People, Technology, and Solutions
        </span>
        <br />
        <span
          id={`${
            darkMode ? "section-subtitle-light" : "section-subtitle-dark"
          }`}
        >
          I leverage technology to create-people centric solutions to complex
          business problems.
        </span>
      </p>
    </div>
  );
}
