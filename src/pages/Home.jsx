import FadeInSection from "../components/FadeInSection.jsx";
import { portfolio } from "../data/portfolio.js";

const heroLinks = [
  { label: "Resume", href: portfolio.links.resume, download: true },
  { label: "Blog", href: portfolio.links.blog },
  { label: "GitHub", href: portfolio.links.github },
  { label: "LinkedIn", href: portfolio.links.linkedin },
];

const Home = () => {
  return (
    <section id="home" className="notebook-hero">
      <FadeInSection>
        <div className="notebook-hero-grid">
          <div className="notebook-hero-copy">
            <span className="notebook-kicker">
              Notebook / Full-stack systems, geospatial software, tooling
            </span>
            <h1>{portfolio.name}</h1>
            <p>{portfolio.intro}</p>
            <div className="notebook-action-row">
              {heroLinks.map((link) => (
                <a key={link.label} href={link.href} download={link.download}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <figure className="notebook-photo-note">
            <img
              src={portfolio.assets.presentation}
              alt="Davian discussing ParkShark"
            />
            <figcaption>
              Observation: useful software often starts with a physical constraint.
            </figcaption>
          </figure>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Home;
