import { useState } from "react";
import FadeInSection from "../components/FadeInSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestPayload = {
      version: "2.0",
      routeKey: "$default",
      rawPath: "/my/path",
      rawQueryString: "",
      cookies: [],
      headers: {},
      queryStringParameters: null,
      requestContext: {
        accountId: "381492141901",
        apiId: "73hv2pd3wqwoujkuauf5rlkfe0gvuhc",
        authentication: null,
        authorizer: null,
        domainName:
          "73hv2pd3wqwoujkuauf5rlkfe0gvuhc.lambda-url.us-west-2.on.aws",
        domainPrefix: "73hv2pd3wqwoujkuauf5rlkfe0gvuhc",
        http: {
          method: "POST",
          path: "/my/path",
          protocol: "HTTP/1.1",
          sourceIp: "",
          userAgent: "",
        },
        requestId: "",
        routeKey: "$default",
        stage: "$default",
        time: new Date().toISOString(),
        timeEpoch: Date.now(),
      },
      body: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      pathParameters: null,
      isBase64Encoded: false,
      stageVariables: null,
    };

    try {
      const response = await fetch(
        "https://o73hv2pd3wqwoujkuauf5rlkfe0gvuhc.lambda-url.us-east-2.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        },
      );

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Contact Me
          </h1>
          <p className="text-xl mb-8">
            If you have any questions, feedback, or would like to discuss a
            potential project, feel free to reach out to me using the contact
            form below or through the provided social links.
          </p>
          <form className="mb-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-950 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-950 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="bg-gray-950 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-pink-700"
            >
              Send Message
            </button>
          </form>
          <div>
            <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/davianalbarran"
                  className="flex items-center space-x-2 text-pink-400 hover:underline"
                >
                  <img
                    src="/github-mark-white.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/davian-albarran-abb372241/"
                  className="flex items-center space-x-2 text-pink-400 hover:underline"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
