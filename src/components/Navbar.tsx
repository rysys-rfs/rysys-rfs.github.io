import React, { useState, useEffect } from 'react';
import { Cpu, Github, Mail, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Playlist', href: '#playlist' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-slate-900 py-2 shadow-[0px_4px_0px_0px_#00482B]'
          : 'bg-white/90 backdrop-blur-sm border-b-2 border-slate-900/80 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          id="nav-logo"
          href="#"
          className="flex items-center gap-3 group transition-all"
        >
          <div className="h-11 sm:h-12 bg-white rounded-md p-1 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#FFD100] flex items-center transition-all group-hover:shadow-[4px_4px_0px_0px_#00482B] group-hover:-translate-y-0.5">
            <img
              src="/rfs.png"
              alt="RFS - Ryne F. Shelton"
              className="h-full w-auto object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-slate-900 font-extrabold text-sm tracking-tight leading-tight group-hover:text-[#00482B] transition-colors">
              Ryne F. Shelton
            </span>
            <span className="text-[10px] font-mono font-bold text-[#00482B] tracking-wide flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FFD100] border border-slate-900" /> B.S. CompE (Highest Honors)
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 hover:text-[#00482B] hover:underline underline-offset-4 decoration-2 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 pl-4 border-l-2 border-slate-900">
            <a
              id="nav-github-btn"
              href="https://github.com/rysys-rfs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded bg-white border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-contact-btn"
              href="#contact"
              className="neobrutal-btn-primary"
            >
              Contact Engineering
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md bg-white border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_#00482B]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-b-2 border-slate-900 px-4 pt-3 pb-5 mt-2 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-mono font-bold text-slate-900 hover:bg-slate-100 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-2">
            <a
              href="https://github.com/rysys-rfs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 text-xs font-mono font-bold bg-white border-2 border-slate-900 rounded-md text-slate-900 shadow-[2px_2px_0px_0px_#FFD100]"
            >
              GitHub
            </a>
            <a
              href="mailto:rshelton93@proton.me"
              className="flex-1 text-center py-1.5 text-xs font-mono bg-[#00482B] border-2 border-slate-900 rounded-md text-white font-bold shadow-[2px_2px_0px_0px_#FFD100]"
            >
              Email
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
