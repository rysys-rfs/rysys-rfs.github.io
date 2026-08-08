import React from 'react';
import { Terminal, Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white border-t-2 border-slate-900 py-10 text-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#00482B] border-2 border-slate-900 flex items-center justify-center text-[#FFD100] shadow-[2px_2px_0px_0px_#FFD100]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 font-mono">Ryne F. Shelton</span>
              <span className="text-slate-700 text-xs block font-mono">Computer & Electrical Engineering Professional</span>
            </div>
          </div>

          <div className="text-xs text-slate-800 text-center md:text-left font-mono font-bold">
            © {new Date().getFullYear()} Ryne F. Shelton • IEEE Aligned Curriculum Vitae
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rysys-rfs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-100 border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:rshelton93@proton.me"
              className="p-2 rounded bg-slate-100 border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#FFD100] border-2 border-slate-900 text-slate-950 shadow-[2px_2px_0px_0px_#00482B] hover:-translate-y-0.5 transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 font-bold" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
