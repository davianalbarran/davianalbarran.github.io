import FadeInSection from "../components/FadeInSection.jsx";
import { portfolio } from "../data/portfolio.js";

const Experience = () => {
  return (
    <section id="experience" className="notebook-section">
      <FadeInSection>
        <div className="notebook-section-grid notebook-experience">
          <div className="notebook-section-title">
            <span>Experience</span>
            <h2>Experience log</h2>
            <p>
              Roles where product needs, mission context, and software systems
              had to meet.
            </p>
          </div>
          <div className="notebook-log">
            {portfolio.experience.map((item, index) => (
              <article key={item.title}>
                <strong>0{index + 1}</strong>
                <div>
                  <span>{item.dates}</span>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
