import { site } from '../../data/site';
import Reveal from '../ui/Reveal';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-dark text-white py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">
            I&apos;m currently looking for new opportunities in Web Development and
            AI/ML. My inbox is always open whether you have a question or just want
            to say hi!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all backdrop-blur-md shadow-lg shadow-black/50"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <i className="fas fa-envelope" />
              </div>
              <span className="font-medium text-slate-200">{site.email}</span>
            </a>
            <a
              href="tel:+923178598159"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-secondary/20 hover:border-secondary/50 transition-all backdrop-blur-md shadow-lg shadow-black/50"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">
                <i className="fas fa-phone" />
              </div>
              <span className="font-medium text-slate-200">{site.phone}</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-dark hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] transition-all text-xl backdrop-blur-md cursor-pointer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(79,70,229,0.4)] transition-all text-xl backdrop-blur-md cursor-pointer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(244,63,94,0.4)] transition-all text-xl backdrop-blur-md cursor-pointer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 text-slate-500 text-sm font-medium">
            <p>&copy; 2026 {site.name}. Crafted with passion.</p>
            <p className="mt-2 text-slate-600">NUST, Islamabad (44000)</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
