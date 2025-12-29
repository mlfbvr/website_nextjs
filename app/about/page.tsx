import Image from 'next/image';

export default function Home() {
  return (
    <section id="home" className="max-w-6xl mx-auto mt-24 text-slate-300">
      <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_2fr_2fr]">
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          About Me
        </h1>
        <p className="mt-4 text-center text-2xl text-slate-300 lg:row-start-2 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:text-left">
          I am a dedicated full-stack developer with over 20 years of experience
          in software development. I have honed my skills in both front-end and
          back-end technologies. I enjoy turning complex problems into simple,
          beautiful, and intuitive solutions.
        </p>
        <p className="mt-4 text-center text-2xl text-slate-300 lg:row-start-3 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:text-left">
          I am a dedicated full-stack developer with over 20 years of experience
          in software development. I have honed my skills in both front-end and
          back-end technologies. I enjoy turning complex problems into simple,
          beautiful, and intuitive solutions.
        </p>
        <p className="mt-4 lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:row-span-3 flex justify-center lg:justify-center">
          <Image
            src="/martin.jpg"
            alt="Martin Lefebvre"
            width={300}
            height={300}
            className="rounded-full border-4 border-slate-700 hover:border-blue-600 transition"
          />
        </p>
      </div>
    </section>
  );
}
