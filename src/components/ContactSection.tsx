import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Architectural Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#0B0B0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-3">
            08 / Contact
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
            Interested in architecture, collaboration or internship opportunities? Let's connect.
          </p>
        </div>

        {/* Two-Column Grid: Direct Contact Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Verified Direct Details & Actions */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-[#141414] border border-white/10 p-8 space-y-6">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-1">
                  Primary Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg sm:text-xl font-mono text-white hover:text-[#B85D3B] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-1">
                  Alternate Email
                </span>
                <a
                  href={`mailto:${personalInfo.alternateEmail}`}
                  className="text-sm font-mono text-neutral-300 hover:text-white transition-colors break-all"
                >
                  {personalInfo.alternateEmail}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-base font-mono text-white hover:text-[#B85D3B] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-1">
                  Location
                </span>
                <span className="text-base text-white font-medium">{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons: EMAIL ME & DOWNLOAD CV */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#B85D3B] hover:text-white transition-all duration-300 text-center"
              >
                <span>Email Me</span>
                <span>→</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-medium text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all duration-300 cursor-pointer text-center"
              >
                <span>Download CV</span>
                <span>↓</span>
              </button>
            </div>

            {/* Placeholder Links Notice */}
            <div className="pt-6 border-t border-white/10 text-[11px] font-mono text-neutral-500">
              <span className="text-neutral-400">Social Profiles:</span> [LinkedIn / Behance / ArchDaily Profile links can be configured here]
            </div>
          </div>

          {/* Column 2: Architectural Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-8 sm:p-10">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 pb-3 border-b border-white/10">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="p-8 text-center bg-white/5 border border-white/10">
                <span className="text-2xl text-[#B85D3B] block mb-2">✓</span>
                <h4 className="text-lg font-bold text-white mb-2">Message Opened in Your Email Client</h4>
                <p className="text-xs text-neutral-400">
                  Thank you for reaching out. I look forward to reviewing your inquiry promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block uppercase tracking-widest text-neutral-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ar. Rajesh Mehta"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:outline-none focus:border-[#B85D3B]"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-widest text-neutral-400 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. studio@domain.com"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:outline-none focus:border-[#B85D3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-neutral-400 mb-2">
                    Subject / Project Typology
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Design Collaboration"
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-neutral-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about the role, collaborative opportunity, or architectural inquiry..."
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:outline-none focus:border-[#B85D3B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-[#B85D3B] hover:text-white transition-colors cursor-pointer"
                >
                  Send Inquiry via Email
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Architectural Colophon & Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Abhijit Gholap.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-widest">
            <span>B.Arch Portfolio</span>
            <span>•</span>
            <span>Navi Mumbai, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
