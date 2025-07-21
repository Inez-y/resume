import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Feel free to reach out to me via email or LinkedIn!</p>
      <div className="space-x-4">
        <a
          href="mailto:your.email@example.com"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
