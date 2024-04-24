import FadeInSection from "../components/FadeInSection";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-900 text-white pt-24"
    >
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Education
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Monmouth University</h3>
                <p className="text-lg mb-1">B.S. in Software Engineering</p>
                <p className="text-lg">
                  Double Minor in Mathematics and Computer Science
                </p>
              </div>
              <div>
                <p className="text-lg mb-1">Location: West Long Branch, NJ</p>
                <p className="text-lg mb-1">Cumulative GPA: 3.72</p>
                <p className="text-lg">Graduation Date: May 2024</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Academic Awards</h2>
            {/* Add your academic awards content here */}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Education;
