import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    fetch("projects.json") // Ensure this is the correct path to your JSON file
      .then((res) => res.json()) // Fixing the .json() call
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top" id="nav">
        <div className="container-fluid mx-lg-5 mx-md-4">
          <a
            className="color-red fw-bold lead"
            style={{ textDecoration: "none" }}
            href="#"
          >
            <span className="text-dark">Musa Musa K</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } justify-content-end navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-5 container-fluid">
        <h2 className="display-4 fw-bold text-center color-orange">Projects</h2>
        <div className="container py-3">
          <div className="row justify-content-center">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 my-2">
                <div className="card p-1 h-100 animate__animated animate__zoomIn">
                  <a target="_blank" href={project.link}>
                    <div className="card-img">
                      <img
                        src={project.image}
                        alt=""
                        className="w-100 h-auto"
                      />
                    </div>
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p>{project.description}</p>
                  </div>
                  <div className="card-footer text-center">
                    <a
                      target="_blank"
                      href={project.link}
                      className="text-decoration-none"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center pt-4">
        <h2 className="display-5 fw-bolder color-orange">Musa Musa Kannike</h2>

        <nav>
          <ul
            className="my-2 list-unstyled d-flex justify-content-center"
            style={{ flexWrap: "wrap" }}
          >
            <li>
              <Link to={"/"} className="mx-1 text-decoration-none text-dark">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-center mt-5">
          <p>&copy; Copyright Musa Musa Kannike </p>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
