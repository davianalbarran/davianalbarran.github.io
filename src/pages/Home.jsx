import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, my name is</h1>
        <h2 className="text-6xl font-bold mb-8">Davian Albarran.</h2>
        <p className="text-2xl mb-8">I love to build things.</p>
        <p className="text-xl mb-12">
          I&apos;m a software engineer specializing in designing and building
          exceptional software systems.
          <br />
          Currently, I&apos;m focused on building problem-solving software
          solutions that benefit the world for the better.
        </p>
      </div>
    </div>
  );
};

export default Home;
