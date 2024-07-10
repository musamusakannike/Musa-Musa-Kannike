import { useState, useEffect } from "react";

function Navbar() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    fetch("navlinks.json")
      .then((res) => res.json())
      .then((data) => setNavLinks(data));
  }, []);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
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
            {navLinks.map((navLink, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href={navLink.destination}
                >
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
