import React from "react";

interface ContactDetails {
  title: string;
  link: string;
  icon: string;   
  glowColor: string;
}

const Contact: React.FC = () => {
  const contacts: ContactDetails[] = [
    {
      title: "Email",
      link: "mailto:inez3cs@gmail.com",
      icon: "alternate_email", 
      glowColor: "rgba(239,68,68,0.5)",
    },
    {
      title: "GitHub",
      link: "https://github.com/inez-y",
      icon: "code", 
      glowColor: "rgba(75,85,99,0.5)",
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/inez-y",
      icon: "business_center", 
      glowColor: "rgba(59,130,246,0.5)",
    },
    {
      title: "Phone",
      link: "tel:+16047791223",
      icon: "call", 
      glowColor: "rgba(34,197,94,0.5)",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 w-full">
      <h2 className="text-5xl font-bold text-gray-700">Contact</h2>

      <p className="text-gray-600 m-10" > Would you like to talk more? Please click the icons to reach me</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full px-6">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target={contact.title === "Email" || contact.title === "Phone" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center h-40 rounded-2xl shadow-lg text-xl font-semibold transform transition duration-300 hover:scale-105`}
            style={{
              boxShadow: `0 0 25px ${contact.glowColor}`,
            }}
          >
            <span className="material-symbols-outlined text-4xl mb-2">
              {contact.icon}
            </span>
            <p className="text-gray-500"> {contact.title} </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
