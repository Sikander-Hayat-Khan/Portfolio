import { projectThemes } from '../../data/projects';
import Reveal from '../ui/Reveal';

export default function ProjectCard({ project }) {
  const theme = projectThemes[project.theme];

  return (
    <a href={project.href} target="_blank" rel="noopener noreferrer">
      <Reveal
        animation="slide-up"
        className={`group h-[450px] w-full rounded-3xl overflow-hidden isolate transform-gpu shadow-lg hover:shadow-2xl ${theme.shadow} relative border border-white/10 dark:border-white/5 ${theme.border} cursor-pointer ${project.colSpan} transition-all duration-500 hover:-translate-y-2`}
        style={project.delay ? { transitionDelay: project.delay } : undefined}
      >
        {project.media.type === 'video' ? (
          <video
            src={project.media.src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        ) : (
          <img
            src={project.media.src}
            alt={project.media.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
            <span
              className={`text-[11px] uppercase tracking-wider font-semibold px-3 py-1 text-white border rounded-full backdrop-blur-md mb-3 inline-block shadow-sm ${theme.badge}`}
            >
              {project.period}
            </span>
            <h3
              className={`font-extrabold text-white drop-shadow-md ${
                project.colSpan.includes('2') ? 'text-2xl md:text-3xl' : 'text-2xl'
              }`}
            >
              {project.title}
            </h3>
          </div>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <div className="pt-4 flex flex-col gap-4">
                <p
                  className={`text-slate-200 leading-relaxed ${
                    project.colSpan.includes('2')
                      ? 'text-sm md:text-base line-clamp-3 max-w-3xl'
                      : 'text-sm line-clamp-4'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 bg-white/10 border border-white/20 text-white rounded-md backdrop-blur-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </a>
  );
}
