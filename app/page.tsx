import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="max-w-6xl mx-auto p-4 z-40">
        <h1 className="text-3xl font-bold text-center">
          <span className="bg-linear-to-r from-blue-500 to-violet-700 bg-clip-text text-transparent">
            Martin Lefebvre
          </span>
        </h1>
        <p className="mt-4 text-center text-lg text-slate-300">
          A full-stack developer passionate about creating functional and secure front-end and back-end applications. I specialize in legacy and modern web technologies.
        </p>
      </section>
      <section id="about" className="max-w-6xl mx-auto p-4 py-20">
        <h2 className="lg:text-4xl md:text-1xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          I am a dedicated full-stack developer with over 20 years of experience in software development. I have honed my skills in both front-end
          and back-end technologies. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
        <br />
        <p className="text-lg text-center max-w-2xl mx-auto">
          I believe in continuous learning and improvement as a way to make myself the best developer I can be. I also enjoy exploring the multiple
          facets of Linux, which I have been using for over 30 years as both a user and a system administrator for personal and professional projects.
        </p>
        <br />
        <p className="text-lg text-center max-w-2xl mx-auto">
          When I'm not coding, you can find me biking, listening to music or sitting by the river with a rod and reel.
        </p>
      </section>
      <section id="resume" className="max-w-6xl mx-auto p-4">
          <h2 className="lg:text-4xl md:text-1xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-center max-w-2xl">
            Download my resume to learn more about my professional experience, skills, and accomplishments in the field of software development.
          </p>
          <div className="mt-6">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition block w-11/12 mx-auto"
            >
              Download Resume (.pdf)
            </a>
            <a href="/resume.docx"
                download
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition block w-11/12 mx-auto mt-4"
              >
                Download Resume (.docx)
            </a>
          </div>
      </section>
      <section id="portfolio" className="max-w-6xl mx-auto p-4">
        <h2 className="lg:text-4xl md:text-1xl font-bold mb-4">Portfolio</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {/* Example Project Card */}
          <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={400}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">Project One</h3>
            <p className="text-slate-300 mt-1">
              A brief description of Project One, highlighting its features and technologies used.
            </p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
      <section id="contact" className="max-w-6xl mx-auto p-4">
        <h2 className="lg:text-4xl md:text-1xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-200" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-200" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-200"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
