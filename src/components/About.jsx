function About() {
  const skills = [
    { title: "HTML", rate: "97" },
    { title: "CSS", rate: "95" },
    { title: "JavaScript", rate: "92" },
    { title: "Bootstrap", rate: "95" },
    { title: "jQuery", rate: "85" },
    { title: "React js", rate: "87" },
  ];

  return (
    <div className="container py-5" id="about-me">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="mw-100 h-auto hide-small">
            <img className="rounded" src="assets/img/profile-pic-hero.png" loading="lazy" alt="" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2 className="display-5 fw-bold">About Me</h2>
            <p>
              Hi, I'm Musa Musa K., a passionate Frontend Developer with a knack
              for creating dynamic and user-friendly web applications. I
              specialize in React and have experience in integrating modern
              frameworks like Bootstrap to deliver responsive and aesthetically
              pleasing designs. My journey in web development has been fueled by
              a love for problem-solving and a commitment to continuous
              learning. Let's create something amazing together!
            </p>
            <ul className="list-unstyled">
              <div className="row">
                {skills.map((skill, index) => (
                  <div key={index} className="col-md-6">
                    <li className="my-1">
                      <h6>{skill.title}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${skill.rate}%`,
                            background: "#fd6f00",
                          }}
                          aria-valuenow={`${skill.rate}`}
                          aria-valuemin={"0"}
                          aria-valuemax={"100"}
                        ></div>
                      </div>
                    </li>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
