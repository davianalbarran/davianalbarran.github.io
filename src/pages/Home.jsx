import FadeInSection from "../components/FadeInSection.jsx";
import MouseEffect from "../components/MouseEffect.jsx";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center relative overflow-hidden pt-24"
    >
      <MouseEffect />
      <FadeInSection>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
            Hi, my name is
          </h1>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up animate-delay-200">
            Davian Albarran.
          </h2>
          <p className="text-2xl mb-8 animate-fade-in-up animate-delay-400">
            I love to build things.
          </p>
          <p className="text-xl mb-12 animate-fade-in-up animate-delay-600">
            I&apos;m a{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              software engineer
            </span>{" "}
            specializing in designing and building{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              exceptional
            </span>{" "}
            physical and virtual systems.
            <br />
            Currently, I&apos;m focused on building{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              problem-solving
            </span>{" "}
            solutions that benefit the{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              world
            </span>{" "}
            for the better.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Home;
