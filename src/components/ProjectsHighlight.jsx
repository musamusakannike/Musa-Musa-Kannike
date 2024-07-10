import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectsHighlight() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json') // Ensure this is the correct path to your JSON file
      .then((res) => res.json()) // Fixing the .json() call
      .then((data) => {
        if (Array.isArray(data)) {
          const firstThree = data.slice(0, 3); // Get the first three items if data is an array
          setProjects(firstThree);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="py-5 container-fluid" id="projects">
      <h2 className="display-4 fw-bold text-center color-orange">Projects</h2>
      <div className="container py-3">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card p-1 h-100">
                <div className="card-img">
                  <img src={project.image} alt="" className="w-100 h-auto" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p>{project.description}</p>
                </div>
                <div className="card-footer text-center">
                    <a target="_blank" href={project.link} className="text-decoration-none">Visit</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link className="button-orange text-decoration-none" to={'/projects'}>SEE MORE</Link>
      </div>
    </div>
  );
}

export default ProjectsHighlight;
