import { certifications, educationEntries, experienceEntries } from '../../data/education';
import Reveal from '../ui/Reveal';

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 relative z-10 bg-slate-50/50 dark:bg-darker/50 backdrop-blur-sm border-y border-slate-200/50 dark:border-white/5"
        >
            <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
                        Professional Experience
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-1 gap-12">
                    <Reveal animation="slide-right">
                        <h3 className="text-2xl font-bold mb-8 flex justify-center items-center gap-3 text-slate-800 dark:text-slate-100">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <i className="fas fa-graduation-cap" />
                            </div>
                            Internship
                        </h3>
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent">
                            {experienceEntries.map((entry) => (
                                <div
                                    key={entry.title}
                                    className="relative flex items-start flex-col sm:flex-row group"
                                >
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-dark shadow relative z-10 shrink-0 mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform ${entry.iconStyle}`}
                                    >
                                        <i className={`fas ${entry.icon} text-sm`} />
                                    </div>
                                    <div className="bg-white/60 dark:bg-dark/60 p-6 rounded-2xl border border-slate-200 dark:border-white/10 w-full backdrop-blur-md shadow-sm group-hover:shadow-md transition-shadow group-hover:border-primary/30">
                                        <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                                            {entry.title}
                                        </h4>
                                        <p className="text-primary font-medium mb-2">{entry.institution}</p>
                                        <p className="text-slate-800 dark:text-white group-hover:text-primary transition-colors font-medium mb-2">{entry.location}</p>
                                        <p className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full inline-block mb-4 text-slate-600 dark:text-slate-400">
                                            {entry.period}
                                        </p>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* <Reveal animation="slide-left">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-white">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <i className="fas fa-certificate" />
                        </div>
                        Certifications
                        </h3>
                        <div className="space-y-6">
                        {certifications.map((cert) => (
                                <div
                                key={cert.title}
                                className="bg-white/60 dark:bg-dark/60 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all backdrop-blur-md group"
                                >
                                <h4 className="font-bold text-lg mb-1 text-slate-800 dark:text-white group-hover:text-secondary transition-colors">
                                {cert.title}
                                </h4>
                                <p className="text-sm font-medium text-secondary mb-3">{cert.issuer}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {cert.description}
                                </p>
                                </div>
                                ))}
                                </div>
                    </Reveal> */}
                </div>
            </div>
        </section>
    );
}
