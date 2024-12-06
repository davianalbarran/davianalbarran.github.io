import FadeInSection from "../components/FadeInSection.jsx";

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
            <h2 className="text-2xl text-center underline font-bold mb-4">
              Degree
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Monmouth University</h3>
                <p className="text-lg mb-1">B.S. in Software Engineering</p>
                <p className="text-lg">
                  Double Minor in Mathematics and Computer Science
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-lg mb-1">West Long Branch, NJ</p>
                <p className="text-lg mb-1">Cumulative GPA: 3.74</p>
                <p className="text-lg">Graduation Date: May 2024</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-center underline font-bold mb-4">
              Academic Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:from-purple-500 hover:to-pink-500">
                <h3 className="text-xl font-bold mb-2">Physics Award</h3>
                <p className="text-lg">
                  For outstanding achievements in physics courses
                </p>
                <p className="text-base text-gray-300">Date Earned: May 2023</p>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:from-purple-500 hover:to-pink-500">
                <h3 className="text-xl font-bold mb-2">Dean&apos;s List</h3>
                <p className="text-lg">Recognized for acheiving high grades</p>
                <p className="text-base text-gray-300">Date Earned: May 2023</p>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:from-purple-500 hover:to-pink-500">
                <h3 className="text-xl font-bold mb-2">
                  Academic Excellence Award
                </h3>
                <p className="text-lg">
                  For maintaining a high GPA throughout my four year tenure at
                  Monmouth University
                </p>
                <p className="text-base text-gray-300">
                  Date Earned: April 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Education;
