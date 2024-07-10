function Services() {
  const services = [
    {
      name: "Web Application Development",
      description:
        "Building responsive and dynamic web applications using React.js.",
    },
    {
      name: "UI/UX Design",
      description:
        "Creating visually appealing and user-friendly interfaces with React.",
    },
    {
      name: "State Management",
      description: "Implementing state management solutions with Redux.",
    },
    {
      name: "API Integration",
      description:
        "Integrating RESTful and GraphQL APIs with React applications.",
    },
    {
      name: "Performance Optimization",
      description:
        "Improving the performance and efficiency of React applications.",
    },
    {
      name: "Responsive Design",
      description:
        "Ensuring applications are mobile-friendly and work seamlessly across different devices and screen sizes.",
    },
  ];

  return (
    <div className="container py-5" id="services">
      <h2 className="display-5 fw-bold text-center">Services</h2>
      <p className="text-center mx-md-3 mx-lg-4">
        As a Frontend Developer, I offer services to bring your digital vision
        to life. Explore my offerings below to see how I can help with your next
        project.
      </p>
      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 my-2">
            <div className="card shadow p-1 h-100">
              <div className="card-body">
                <h5>{service.name}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
