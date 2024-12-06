import { useState } from "react";
import FadeInSection from "../components/FadeInSection.jsx";

const About = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      content: (
        <>
          <h3 className="font-bold text-pink-500">Intro</h3>
          <div>
            <p>
              Hi there! I&apos;m a passionate, Latino-American software engineer
              with a love for building amazing software systems. I have
              experience in a variety of technologies, including React (what
              this site is written in), Node.js, GoLang, C, Swift, Python, Rust,
              AWS EC2 and Lambda, MySQL, and MongoDB.
            </p>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <h3 className="font-bold text-pink-500">Hobbies</h3>
          <p>
            When I&apos;m not coding, you can find me trying new restaurants
            with my girlfriend, reading about space and physics, or learning more
            about whatever my mind decided to fixate on currently! For those
            interested, right now that would be reading the Feynman lectures on Physics
            and gaining an understanding of Deep Learning, which is fitting considering 
            this current AI revolution we&apos;re going through.
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <h3 className="font-bold text-pink-500">Let&apos;s Talk!</h3>
          <p>
            Feel free to reach out if you&apos;d like to connect or collaborate
            on a project/research together! I have an entrepreneurial spirit and am
            always looking for new ventures.
          </p>
        </>
      ),
    },
  ];

  const nextCard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden content-center">
              <div
                className={`bg-gray-800 w-full min-h-96 grid grid-cols-6 rounded-2xl p-6 mb-8 transition-transform duration-500 ease-in-out ${
                  isTransitioning ? "transform -translate-x-full" : ""
                }`}
              >
                <div className="col-span-5 flex flex-col justify-center text-xl md:text-3xl mb-4">
                  {cards[currentCard].content}
                </div>
                {!isTransitioning && (
                  <button
                    className="text-pink-500 hover:text-pink-600 transition-opacity duration-300 justify-self-end"
                    onClick={nextCard}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-fit h-fit">
              <div className="row-span-2">
                <img
                  src="/IMG_9388.JPEG"
                  alt="Long Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/5A9A5969.JPEG"
                  alt="Short Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/IMG_0044.JPEG"
                  alt="Short Image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
