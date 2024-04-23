const Experience = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Software Engineer</h2>
        <p className="text-lg mb-2">ABC Company</p>
        <p className="text-gray-500">June 2020 - Present</p>
        <ul className="list-disc pl-8">
          <li>
            Developed and maintained web applications using React and Node.js
          </li>
          <li>
            Collaborated with cross-functional teams to deliver high-quality
            software
          </li>
          <li>Implemented responsive and accessible user interfaces</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Frontend Developer Intern</h2>
        <p className="text-lg mb-2">XYZ Startup</p>
        <p className="text-gray-500">January 2019 - May 2019</p>
        <ul className="list-disc pl-8">
          <li>
            Assisted in the development of a web application using React and
            Redux
          </li>
          <li>
            Implemented UI components and optimized application performance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
