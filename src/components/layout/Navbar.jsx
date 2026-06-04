import { site } from '../../data/site';

export default function Navbar({ onToggleTheme }) {
  return (
    <nav className="fixed w-full bg-white/70 dark:bg-darker/70 backdrop-blur-xl z-50 shadow-sm border-b border-white/20 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="text-xl font-bold text-primary">
            {site.initials}
          </a>
          <div className="hidden md:flex space-x-8 items-center cursor-pointer">
            {site.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              <i className="fas fa-moon dark:hidden" />
              <i className="fas fa-sun hidden dark:block text-yellow-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
