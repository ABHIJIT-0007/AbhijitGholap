import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onOpenCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Experience', href: '#experience' },
    { label: 'Drawings', href: '#drawings' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex flex-col tracking-tight"
          aria-label="Abhijit Gholap Portfolio"
        >
          <span className="font-semibold text-sm sm:text-base tracking-[0.2em] text-white uppercase group-hover:text-[#B85D3B] transition-colors">
            Abhijit Gholap
          </span>
          <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-mono">
            Architecture Portfolio / B.Arch
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-[0.18em] font-medium text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B85D3B] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="hidden xl:flex items-center space-x-2 text-[11px] font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Sem VII • Mumbai University</span>
          </div>

          <button
            onClick={onOpenCV}
            className="text-xs uppercase tracking-[0.16em] font-medium px-4 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
          >
            View CV
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-white transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-white transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0E0E0E]/98 backdrop-blur-xl z-40 px-6 py-10 flex flex-col justify-between border-t border-white/10">
          <nav className="flex flex-col space-y-6 text-sm uppercase tracking-[0.2em] text-neutral-300">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 pb-3 hover:text-[#B85D3B]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full text-center text-xs uppercase tracking-[0.18em] py-3.5 bg-white text-black font-semibold hover:bg-neutral-200"
            >
              View CV
            </button>
            <p className="text-center font-mono text-[11px] text-neutral-500">
              Navi Mumbai, India • abhijitgholap000@gmail.com
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
