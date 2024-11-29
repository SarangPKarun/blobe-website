const About = () => {
  return (
    <>
    <section className="h-screen w-full flex flex-col relative snap-start">
      <div className="w-full h-full flex flex-col justify-center items-center text-white bg-black/80">
        <div className="flex flex-col sm:flex-row w-full h-full">
          {/* Left Side: Image */}
          <div
            className="w-full sm:w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://your-image-url-here.jpg")', // Replace with actual image URL
            }}
          ></div>

          {/* Right Side: Text */}
          <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center items-start">
            <h2 className="text-4xl font-semibold mb-4">About Blobe App</h2>
            <p className="text-lg mb-4">
              Blobe is an innovative web application designed to provide users
              with a unique experience in managing and interacting with data
              visualizations. Our goal is to enhance user engagement with rich
              content and interactive features, all while ensuring seamless
              navigation.
            </p>
            <p className="text-lg mb-4">
              The app integrates powerful technologies to create an intuitive
              and interactive environment where users can explore data in
              meaningful ways. Whether you're tracking projects, managing
              resources, or interacting with real-time data visualizations, Blobe
              offers the tools you need to make informed decisions.
            </p>
            <p className="text-lg">
              Blobe’s interface is user-friendly, designed to cater to both
              beginners and professionals. With its modern design, customizable
              features, and smooth user experience, Blobe is the perfect tool for
              those looking to explore data, manage their resources, and make
              impactful decisions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="h-screen w-full flex flex-col relative snap-start">
      <div className="w-full h-full flex flex-col justify-center items-center text-white bg-black/80">
        <div className="flex flex-col sm:flex-row w-full h-full">
          {/* Right Side: Text */}
          <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center items-start">
            <h2 className="text-4xl font-semibold mb-4">Why Choose Blobe?</h2>
            <p className="text-lg mb-4">
              Blobe offers several advantages to users who are looking for a
              platform that combines data management and visualization. Some key
              features include:
            </p>
            <ul className="list-disc pl-5 text-lg">
              <li>Real-time data updates and interactions</li>
              <li>Intuitive and easy-to-use interface</li>
              <li>Powerful visualization tools</li>
              <li>Highly customizable to suit user needs</li>
              <li>Seamless navigation across multiple devices</li>
            </ul>
          </div>
          
          {/* Left Side: Image */}
          <div
            className="w-full sm:w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://your-second-image-url-here.jpg")', // Replace with actual image URL
            }}
          ></div>

          
        </div>
      </div>
    </section>

    <section className="h-screen w-full flex flex-col relative snap-start">
      <div className="w-full h-full flex flex-col justify-center items-center text-white bg-black/80">
        <div className="flex flex-col sm:flex-row w-full h-full">
          {/* Left Side: Image */}
          <div
            className="w-full sm:w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://your-third-image-url-here.jpg")', // Replace with actual image URL
            }}
          ></div>

          {/* Right Side: Text */}
          <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center items-start">
            <h2 className="text-4xl font-semibold mb-4">Get Started with Blobe</h2>
            <p className="text-lg mb-4">
              Getting started with Blobe is simple. Just sign up, choose your
              preferences, and you’re ready to go. With a few clicks, you can
              begin managing your data, viewing interactive reports, and
              exploring the various features that Blobe offers.
            </p>
            <p className="text-lg">
              Whether you are using Blobe for project management, resource
              allocation, or data visualization, the app adapts to your needs
              and helps you make the best decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
