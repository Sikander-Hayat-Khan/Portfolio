import { hobbies } from '../../data/education';
import { site } from '../../data/site';
import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            About Me
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal animation="slide-right" className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200">
              I am a Software Engineering student at NUST with hands-on experience
              across full-stack development, AI/ML research, and agentic AI systems.
            </p>
            <p>
              Proficient in the MERN stack and Next.js, with a track record of
              shipping production-quality applications. Recently, I co-authored a
              research paper on sentiment classification for low-resource NLP and
              built a multi-agent business research system.
            </p>
            <p>
              I love tackling complex structural and algorithmic problems, bridging
              the gap between cutting-edge AI models and functional, scalable web
              experiences.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <span>{site.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <i className="fas fa-language" />
                </div>
                <span>{site.languages}</span>
              </div>
            </div>
          </Reveal>

          <Reveal animation="slide-left" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-white/60 dark:bg-darker/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <i className="fas fa-heart text-accent" /> Interests & Hobbies
              </h3>
              <ul className="space-y-5">
                {hobbies.map((hobby) => (
                  <li key={hobby.label} className="flex items-center gap-4 group/item">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${hobby.color} group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform shadow-sm`}
                    >
                      <i className={`fas ${hobby.icon}`} />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {hobby.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
