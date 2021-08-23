import "./social.css";
import { socialData } from "./socialData";

export default function Social(props) {
  return (
    <div className="my-4">
      {socialData.map((social, idx) => {
        return (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img id="social-icon" src={social.icon} alt={social.name} />
          </a>
        );
      })}
    </div>
  );
}
