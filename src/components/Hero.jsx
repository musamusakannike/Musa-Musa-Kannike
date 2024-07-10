import {
  faGithub,
  faInstagram,
  faLinkedin,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';

function Hero() {
  return (
    <header id="header" className="container p-2">
      <div className="row">
        <div className="col-md-6">
          <div className="w-100">
            <h5 className="animate__animated animate__fadeInDown">Hi, I am</h5>
            <h4 className="color-orange animate__animated animate__fadeInDown">Musa Musa K</h4>
            <h1 className="display-2 fw-bolder animate__animated animate__fadeInDown">Frontend Developer</h1>
            <div className="my-3">
              <a href="#projects" className="button-orange text-decoration-none mx-1 animate__animated animate__fadeInUp">
                SEE PORTFOLIO
              </a>
              <a href="Professional CV Resume.pdf" download="Musa Musa Kannike.pdf" className="button-outline-orange text-decoration-none mx-1 animate__animated animate__fadeInUp">
                GET RESUME
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 position-relative text-center">
          <div>
            <div className="mw-100 h-auto mx-auto animate__animated animate__zoomIn">
              <img
                className="rounded"
                src="assets/img/profile-pic-hero.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="py-2 bottom-0 mx-auto w-100 animate__animated animate__fadeInUp">
              <a target="_blank" className="text-dark" href="https://x.com/musa_codes"><FontAwesomeIcon icon={faXTwitter} className="mx-2" size={"2x"} /></a>
              <a target="_blank" className="text-dark" href="https://www.threads.net/@musa.codes"><FontAwesomeIcon icon={faThreads} className="mx-2" size={"2x"} /></a>
              <a target="_blank" className="text-dark" href="https://www.instagram.com/musa.codes"><FontAwesomeIcon icon={faInstagram} className="mx-2" size={"2x"} /></a>
              <a target="_blank" className="text-dark" href="https://github.com/musamusakannike"><FontAwesomeIcon icon={faGithub} className="mx-2" size={"2x"} /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
