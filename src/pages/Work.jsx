import FadeInSection from "../components/FadeInSection.jsx";
import { portfolio } from "../data/portfolio.js";

const Work = () => {
  return (
    <section id="work" className="notebook-section notebook-project-section">
      <FadeInSection>
        <div className="notebook-projects">
          <div className="notebook-section-title">
            <span>Applications</span>
            <h2>Selected systems and experiments</h2>
          </div>
          {portfolio.projects.map((project) => (
            <a key={project.name} href={project.link}>
              <span>{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <small>{project.impact}</small>
            </a>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Work;
