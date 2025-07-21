import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Jane Doe</h1>
        <p className="text-lg md:text-2xl">Software Engineer | Web Developer</p>
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 md:w-60 rounded-full shadow-lg mt-6 md:mt-0"
      />
    </section>
  );
};

export default Hero;
