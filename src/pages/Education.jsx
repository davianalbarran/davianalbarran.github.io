import FadeInSection from "../components/FadeInSection.jsx";
import { portfolio } from "../data/portfolio.js";

const Education = () => {
  return (
    <section id="education" className="notebook-section">
      <FadeInSection>
        <div className="notebook-lab-grid">
          <article className="notebook-lab-card notebook-lab-card-feature">
            <span>Education</span>
            <h2>{portfolio.education.school}</h2>
            <p>{portfolio.education.degree}</p>
            <p>{portfolio.education.minors}</p>
            <strong>
              GPA {portfolio.education.gpa} / {portfolio.education.graduation}
            </strong>
          </article>
          {portfolio.education.awards.map((award) => (
            <article key={award.title} className="notebook-lab-card">
              <span>{award.date}</span>
              <h3>{award.title}</h3>
              <p>{award.detail}</p>
            </article>
          ))}
          <article className="notebook-lab-card notebook-location-card">
            <span>Location</span>
            <h3>{portfolio.education.location}</h3>
          </article>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Education;
