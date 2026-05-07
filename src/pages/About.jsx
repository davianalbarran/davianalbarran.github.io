import FadeInSection from "../components/FadeInSection.jsx";
import { portfolio } from "../data/portfolio.js";

const About = () => {
  const notes = [
    {
      label: "Hypothesis",
      title: "Curiosity compounds into better engineering.",
      body: portfolio.about,
    },
    {
      label: "Field Notes",
      title: "Physics, restaurants, and deep learning rabbit holes.",
      body: portfolio.hobbies,
    },
    {
      label: "Collaboration",
      title: "Useful work beats decorative software.",
      body: portfolio.collaboration,
    },
  ];

  return (
    <section id="about" className="notebook-section notebook-proof">
      <FadeInSection>
        <div className="notebook-section-grid notebook-proof-grid">
          <div className="notebook-section-title">
            <span>About / Operating notes</span>
            <h2>Practical systems, clear interfaces, and useful prototypes.</h2>
            <p>Three recurring notes from the way I like to build software.</p>
          </div>
          <div className="notebook-note-stack">
            {notes.map((note) => (
              <article key={note.label} className="notebook-note-card">
                <span>{note.label}</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
            <div className="notebook-equation">
              physical constraints + clear interfaces + iteration = durable
              software
            </div>
            <div className="notebook-skill-cloud">
              {portfolio.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
