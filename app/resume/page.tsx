export default function Resume() {
    return (
      <section id="home" className="max-w-6xl mx-auto lg:mt-24 lg:h-screen text-slate-300">
        <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3">
          <h2 className="text-1xl text-center font-bold mb-4 lg:text-left lg:text-lg lg:w-11/12 lg:bg-slate-600 lg:font-thin lg:mx-auto lg:p-1 lg:rounded-xl">My Resume</h2>
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
        </div>
      </section>
    )
}