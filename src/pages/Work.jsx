import FadeInSection from "../components/FadeInSection";

const Work = () => {
  return (
    <section id="work" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            My Work
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-950 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                ParkShark
              </h2>
              <p className="text-lg mb-4">
                A fully fledged parking management system marketed towards
                Universities with a RESTful API, custom, patent-pending
                hardware, and an iOS app. As of May 2024, this project is on the
                road to become my first entrepreneurial venture with an amazing
                team that I&apos;m lucky enough to call my friends.
              </p>
              <a
                href="https://github.com/MU-ParkShark/ParkSharkAPI"
                className="text-pink-400 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-950 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                AmiStudio
              </h2>
              <p className="text-lg mb-4">
                A neat little desktop app done mostly to learn Rust and the
                Tauri framework that allows users to build and nurture their own
                Tamagotchi-like character with RPG stats. The Rust-powered
                server allows for multiplayer gameplay so you can battle your
                friends!
              </p>
              <a
                href="https://github.com/davianalbarran/amistudio"
                className="text-pink-400 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-950 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                Python Automation Script
              </h2>
              <p className="text-lg mb-4">
                In my tenure as a Community Assitant at Monmouth University, my
                fellow CAs and I were tasked with the tedious job of inputting
                data from genuine conversations with our residents into our
                school&apos;s online form handler. I wrote a Python script that
                automated the process of inputting each individual
                conversation&apos;s details, saving us hours of work.
              </p>
              <a
                href="https://github.com/davianalbarran/intentional_conversations"
                className="text-pink-400 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-950 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                Pong
              </h2>
              <p className="text-lg mb-4">
                I, like many others, have always loved playing games and as a
                child, I dreamed of founding a game studio. As I&apos;ve aged, I
                realized that I could still make games as a hobby even if
                starting my own studio wasn&apos;t in the cards. To get as
                low-level as possible, I decided to utilize my C knowledge and
                use the Raylib framework to make a very basic pong game.
              </p>
              <a
                href="https://github.com/davianalbarran/pong-raylib"
                className="text-pink-400 hover:underline"
              >
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
