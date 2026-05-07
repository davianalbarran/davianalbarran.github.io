import { useState } from "react";
import FadeInSection from "../components/FadeInSection.jsx";
import { createMailto, portfolio } from "../data/portfolio.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = createMailto(formData);
  };

  return (
    <section id="contact" className="notebook-section">
      <FadeInSection>
        <div className="notebook-contact-grid">
          <div className="notebook-section-title">
            <span>Contact / Leave a note</span>
            <h2>Pitch, research, or collaborate.</h2>
            <p>{portfolio.collaboration}</p>
          </div>
          <form className="notebook-contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              <span>
                Name
              </span>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              <span>
                Email
              </span>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="message" className="notebook-message-field">
              <span>
                Message
              </span>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button type="submit">
              Send Message
            </button>
          </form>
          <div className="notebook-contact-links">
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            <a href={portfolio.links.github}>GitHub</a>
            <a href={portfolio.links.linkedin}>LinkedIn</a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
