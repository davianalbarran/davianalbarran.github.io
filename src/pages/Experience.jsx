import FadeInSection from "../components/FadeInSection";

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
              Applied Software Engineer Intern
            </h2>
            <p className="text-lg mb-2">MITRE Corp</p>
            <p className="text-gray-500">May 2022 - August 2023</p>
            <ul className="list-disc text-lg pl-8">
              <li>
                Supported a web development team as a Full Stack Engineer by
                completing tickets on a Kanban Board for each Sprint working
                under an Agile philosophy
              </li>
              <li>
                Utilized HTML, CSS, JavaScript+jQuery for creating views and
                Node.js + Express.js for backend functionality, as well as
                working with our MongoDB, MySQL, and AWS S3 databases
              </li>
              <li>
                Transferred from full time to part time through the school year
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
                project, for example: GraphQL, React, Python&apos;s Flask
                Library, and even some PHP work with the CodeIgniter framework.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Res Life Community Assistant
            </h2>
            <p className="text-lg mb-2">Monmouth University Residential Life</p>
            <p className="text-gray-500">September 2023 - May 2024</p>
            <ul className="list-disc text-lg pl-8">
              <li>
                In charge of supporting ~200 residents and enforcing the housing
                rules in a team of 4
              </li>
              <li>
                Developed 14 programs and weekly newsletters to foster community
                and diversity in our housing complex
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
