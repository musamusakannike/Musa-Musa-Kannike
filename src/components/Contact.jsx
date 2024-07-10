function Contact() {
  return (
    <div className="container py-5" id="contacts">
      <h2 className="display-4 fw-bold text-center">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <form
            action="https://formspree.io/f/meqyorjr"
            method="POST"
            role="form"
          >
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              id="usermail"
              placeholder="Email"
              className="my-2 form-control"
              required
            />
            <input
              type="text"
              name="subject"
              id="user-subject"
              placeholder="Subject"
              className="my-2 form-control"
              required
            />
            <textarea
              name="message"
              id="user-message"
              rows="10"
              className="my-2 form-control"
              placeholder="Your message"
              required
            ></textarea>
            <div className="text-center">
              <button type="submit" id="submit" className="submit button-orange">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
