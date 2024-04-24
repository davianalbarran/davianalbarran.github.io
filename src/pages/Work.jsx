import FadeInSection from "../components/FadeInSection";

const Work = () => {
  return (
    <section id="work" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">My Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Project 1</h2>
              <p className="text-lg mb-4">
                A web application for task management and collaboration.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Project 2</h2>
              <p className="text-lg mb-4">
                An e-commerce platform built with React and Node.js.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Work;
