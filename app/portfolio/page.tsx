import Image from 'next/image'

export default function Portfolio() {
    return (
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

    )
}