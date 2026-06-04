import { skillCategories } from '../../data/skills';
import Reveal from '../ui/Reveal';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative z-10 bg-slate-50/50 dark:bg-darker/50 backdrop-blur-sm border-y border-slate-200/50 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Technical Skills
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Reveal
              key={category.title}
              animation="zoom-in"
              className={`group hover:-translate-y-2 transition-transform duration-300 ${category.colSpan ?? ''}`}
              style={category.delay ? { transitionDelay: category.delay } : undefined}
            >
              <div className="h-full p-6 bg-white/70 dark:bg-dark/70 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 dark:border-white/10 relative overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-10 -mt-10 transition-colors duration-500 ${category.glow}`}
                />
                <div className="flex flex-col h-full relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-md ${category.shadow}`}
                  >
                    <i className={`fas ${category.icon}`} />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
