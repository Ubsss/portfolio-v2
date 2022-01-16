import { useSelector } from "react-redux";
import "./dogos.css";
import dogosData from "./dogosData";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="container text-center">
      <p>
        <span id={`${darkMode ? "section-title-light" : "section-title-dark"}`}>
          My dogos
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
          <div
            id="nalaCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {dogosData.nala.pictures.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#nalaCarousel"
                  data-bs-slide-to={`${idx}`}
                  className={`${idx === 0 && "active"}`}
                  aria-current={`${idx === 0 && "true"}`}
                  aria-label={`Slide ${idx++}`}
                />
              ))}
            </div>
            <div className="carousel-inner px-2">
              {dogosData.nala.pictures.map((img, idx) => {
                return (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      id="dogos-image"
                      src={img}
                      className=" rounded-circle m-2 img-fluid"
                      alt={`nala-${idx}`}
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#nalaCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#nalaCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <p>
            <strong>{dogosData.nala.name}</strong>
          </p>
          <p>{dogosData.nala.description}</p>
        </div>
        <div className="col-12 col-md-6">
          <div
            id="sarabiCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {dogosData.sarabi.pictures.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#sarabiCarousel"
                  data-bs-slide-to={`${idx}`}
                  className={`${idx === 0 && "active"}`}
                  aria-current={`${idx === 0 && "true"}`}
                  aria-label={`Slide ${idx++}`}
                />
              ))}
            </div>
            <div className="carousel-inner px-2">
              {dogosData.sarabi.pictures.map((img, idx) => {
                return (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      id="dogos-image"
                      src={img}
                      className=" rounded-circle m-2 img-fluid"
                      alt={`sarabi-${idx}`}
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#sarabiCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#sarabiCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <p>
            <strong>{dogosData.sarabi.name}</strong>
          </p>
          <p>{dogosData.sarabi.description}</p>
        </div>
      </div>
    </div>
  );
}
