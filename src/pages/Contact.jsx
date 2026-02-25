import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 min-h-screen text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black tracking-tighter mb-4">Contact Me</h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Have a project or idea? Let's connect! Fill out the form below.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-neutral-400 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-neutral-400 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-neutral-400 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-300 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
        <p className="text-neutral-500 text-center mt-8 text-sm">
          Or reach me directly at <a href="aniketkumar888@gmail.com" className="text-lime-400 underline">aniket@example.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;