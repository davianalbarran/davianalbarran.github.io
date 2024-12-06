import FadeInSection from "../components/FadeInSection.jsx";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 text-white pt-24"
    >
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Experience
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Associate Software Engineer
            </h2>
            <p className="text-lg mb-2">MITRE Corp</p>
            <p className="text-gray-500">July 2024 - Present</p>
            <ul className="list-disc text-lg pl-8">
              <li>
                Supporting applications development for systems involving signal processing,
                sensor fusion, and asynchronous, distributed communication.
              </li>
              <li>
                Utilizing Java to develop application functionality.
              </li>
              <li>
                Collaborating with a large distributed team on niche use cases.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Private CS Tutor</h2>
            <p className="text-lg mb-2">Self-Employment</p>
            <p className="text-gray-500">January 2024 - May 2024</p>
            <ul className="list-disc text-lg pl-8">
              <li>
                Assisted students in designing and developing their Senior
                Capstone projects
              </li>
              <li>
                Worked with various technologies depending on the student&apos;s
                stack, for example: GraphQL, React, Python&apos;s Flask Library,
                and some PHP work with the CodeIgniter framework
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Residential Life Community Assistant
            </h2>
            <p className="text-lg mb-2">Monmouth University Residential Life</p>
            <p className="text-gray-500">September 2023 - May 2024</p>
            <ul className="list-disc text-lg pl-8">
              <li>In charge of supporting ~200 residents in a team of 4</li>
              <li>
                Daily responsibilities included: assisting residents with issues
                in their apartments, making critical decisions in emergency
                situations, and enforcing university policies
              </li>
              <li>
                Developed 14 programs and weekly newsletters to foster community
                and diversity in our housing complex per semester
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
