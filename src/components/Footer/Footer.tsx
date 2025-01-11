import { FaMeteor } from "react-icons/fa";
import { FaChevronRight, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__copyright">
          <small className="site-footer__text">
            &copy; Stephen Werronen {new Date(Date.now()).getFullYear()}
          </small>
        </div>
        <div className="site-footer__link-group">
          <small className="site-footer__text">
            <a
              href="https://werronense.github.io/"
              target="_blank"
              className="site-footer__link"
            >
              <FaMeteor /> Portfolio <FaChevronRight />
            </a>
          </small>
          <small className="site-footer__text">
            <a
              href="https://github.com/werronense"
              target="_blank"
              className="site-footer__link"
            >
              <FaSquareGithub /> GitHub <FaChevronRight />
            </a>
          </small>
          <small className="site-footer__text">
            <a
              href="https://linkedin.com/in/stephen-werronen"
              target="_blank"
              className="site-footer__link"
            >
              <FaLinkedin /> LinkedIn <FaChevronRight />
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer