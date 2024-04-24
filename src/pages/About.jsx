import FadeInSection from "../components/FadeInSection";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-xl mb-8">
            Hi there! I&apos;m a passionate software engineer with a love for
            building amazing software systems. I have experience in a variety of
            technologies, including React (what this site is written in),
            Node.js, Rust, C, Python, AWS EC2, MySQL, and MongoDB.
          </p>
          <p className="text-xl mb-8">
            When I&apos;m not coding, you can find me exploring new hiking
            trails, trying out new recipes in the kitchen, or getting lost in a
            good book.
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
