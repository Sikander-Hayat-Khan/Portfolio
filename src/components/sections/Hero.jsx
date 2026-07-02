import { site } from '../../data/site';
import { useTypewriter } from '../../hooks/useTypewriter';
import Reveal from '../ui/Reveal';

export default function Hero() {
  const typewriterText = useTypewriter(site.typewriterRoles);

  const DownloadStaticPDF = () => {
    const pdfUrl = "/Assets/Resume.pdf"; // Path to your PDF file in the public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume–Sikander-Hayat-Khan.pdf"; // The filename given to the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 relative perspective overflow-hidden"
    >
      <div className="text-center px-4 max-w-5xl mx-auto z-10">
        <Reveal className="w-full">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-[40%_60%_70%_30%] animate-[spin_8s_linear_infinite] blur-md opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary to-secondary rounded-[60%_40%_30%_70%] animate-[spin_6s_linear_infinite_reverse] blur-sm opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-dark rounded-full z-10 shadow-[0_0_30px_rgba(79,70,229,0.5)] border-4 border-white/10 overflow-hidden flex items-center justify-center">
              <img
                src={site.profileImage}
                alt={site.name}
                className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-700 ease-out drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary font-medium text-sm tracking-wide shadow-[0_0_15px_rgba(79,70,229,0.15)] relative animate-bounce-slow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <span>Available for New Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            Hi, I&apos;m <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              {site.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 mb-8 font-semibold h-[40px] flex justify-center items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-400">
              {typewriterText}
            </span>
            <span className="cursor-blink">|</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {site.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative flex items-center gap-2">
                View My Work{' '}
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/80 dark:bg-darker/80 backdrop-blur-md text-slate-900 dark:text-white rounded-full font-semibold border border-slate-200/50 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Let&apos;s Connect
            </a>
            <button
              onClick={DownloadStaticPDF}
              className="px-8 py-4 bg-white/80 dark:bg-darker/80 backdrop-blur-md text-slate-900 dark:text-white rounded-full font-semibold border border-slate-200/50 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Download Resume
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
