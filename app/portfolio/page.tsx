import Image from 'next/image'

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto p-4">
      <h2 className="lg:text-4xl md:text-1xl font-bold mb-4">Portfolio</h2>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <Image
            src="/mlcom.png"
            alt="MartinLefebvre.com Project Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-2">MartinLefebvre.com</h3>
          <p className="text-slate-300 mt-1">
            (This Website) A personal portfolio website built with Next.js and
            Tailwind CSS to showcase my skills, projects, and experience as a
            full-stack developer.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <Image
            src="/castnotes.png"
            alt="CastNotes Project Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-2">CastNotes</h3>
          <p className="text-slate-300 mt-1">
            (Work in progress) A self-hosted tool for anglers to record their
            fishing trips, catches, and locations. Built with PostgreSQL, PHP,
            and Symfony.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <Image
            src="/dothist.png"
            alt="DoThistProject Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-2">Do Thist</h3>
          <p className="text-slate-300 mt-1">
            (Work in progress) A simple todo list application for families or
            small offices to share tasks and stay organized.
          </p>
        </div>
      </div>
    </section>
  )
}
