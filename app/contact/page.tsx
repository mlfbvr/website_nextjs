import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapLocation,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto mt-24 text-slate-300">
      <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-6">
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          Contact me
        </h1>
        <div className="flex flex-col w-full gap-4">
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <a
              href="mailto:martin@martinlefebvre.com"
              className="text-xl text-slate-300 hover:underline mr-2"
            >
              martin@martinlefebvre.com
            </a>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faPhone}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <span className="text-xl text-slate-300 hover:underline mr-2">
              (579) 578-9074
            </span>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faMapLocation}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <span className="text-xl text-slate-300 hover:underline mr-2">
              Laval, QC, Canada
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          Follow me
        </h1>
        <div className="flex flex-col w-full gap-4">
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faGithub}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <a
              href="https://github.com/mlfbvr/"
              target="_blank"
              className="text-xl text-slate-300 hover:underline mr-2"
            >
              github.com/mlfbvr
            </a>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faLinkedin}
              target="_blank"
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <a
              href="https://www.linkedin.com/in/mlfbvr"
              className="text-xl text-slate-300 hover:underline mr-2"
            >
              linkedin.com/in/mlfbvr
            </a>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faTwitter}
              target="_blank"
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <a
              href="https://x.com/beardedcoder514"
              className="text-xl text-slate-300 hover:underline mr-2"
            >
              x.com/beardedcoder514
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
