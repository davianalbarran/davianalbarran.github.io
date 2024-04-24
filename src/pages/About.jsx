import FadeInSection from "../components/FadeInSection";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h1>
          <p className="text-xl mb-8">
            Hi there! I&apos;m a passionate software engineer with a love for
            building amazing software systems. I have experience in a variety of
            technologies, including React (what this site is written in),
            Node.js, Rust, C, Python, AWS EC2, MySQL, and MongoDB.
          </p>
          <p className="text-xl mb-8">
            When I&apos;m not coding, you can find me trying new restaurants
            with my girlfriend, designing cool game ideas, or learning more
            about whatever my mind decided to fixate on currently! Right now
            that would be reading about the science of sleeping and also how to
            effectively create a startup.
          </p>
          <p className="text-xl">
            Feel free to reach out if you&apos;d like to connect or collaborate
            on a project together! I&apos;m always looking for new ventures and
            have an entrepreneurial spirit.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
