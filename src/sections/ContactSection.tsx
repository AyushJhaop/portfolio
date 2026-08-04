import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { Mail, Send, MapPin, CheckCircle2, Copy, Check, ArrowUp } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom SaaS Development',
    message: '',
  });

  const email = 'ayushjha.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: 'Custom SaaS Development',
        message: '',
      });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 border-t border-[#D7E2EA]/15 shadow-2xl overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
          <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base md:text-lg uppercase tracking-widest mt-4">
            Let's Build Something Great Together
          </p>
        </FadeIn>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Left Column: Contact Info & Status */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-5 h-full flex flex-col justify-between gap-6">
            {/* Availability Badge */}
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Available for new projects & roles
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA] leading-tight">
                Got a project or idea in mind?
              </h3>
              <p className="text-[#D7E2EA]/60 text-sm sm:text-base font-light leading-relaxed">
                Whether you need a full-stack SaaS app, AI automation workflows, or a high-converting web design, I'm always open to discussing new opportunities.
              </p>
            </div>

            {/* Direct Email Card with Copy Button */}
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col gap-3 group hover:border-[#D7E2EA]/40 transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg md:text-xl font-mono font-semibold text-[#D7E2EA] hover:text-white transition-colors underline underline-offset-4 decoration-[#D7E2EA]/30 hover:decoration-[#D7E2EA]"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-[#1E1E1E] border border-[#D7E2EA]/20 text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all cursor-pointer flex items-center justify-center"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-emerald-400 font-mono tracking-wide">
                  Copied to clipboard!
                </span>
              )}
            </div>

            {/* Info Badges (Location & Response Time) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[20px] p-5 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#D7E2EA]/60 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/40">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-[#D7E2EA]">India / Remote</span>
                </div>
              </div>
              <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[20px] p-5 flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D7E2EA]/60 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D7E2EA]/40">Response Time</span>
                  <span className="text-xs sm:text-sm font-medium text-[#D7E2EA]">&lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#141414] border border-[#D7E2EA]/15 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#141414] border border-[#D7E2EA]/15 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#141414] border border-[#D7E2EA]/15 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X / Twitter</span>
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-emerald-400 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#D7E2EA] mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#D7E2EA]/70 text-sm sm:text-base max-w-md font-light">
                    Thank you for reaching out! I've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA]">
                      Send a Message
                    </h3>
                    <p className="text-[#D7E2EA]/60 text-xs sm:text-sm font-light">
                      Fill out the form below and I'll respond within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#D7E2EA]/70">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ayush Jha"
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/40 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#D7E2EA]/70">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ayush@example.com"
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#D7E2EA]/70">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/40 transition-colors cursor-pointer"
                    >
                      <option value="Custom SaaS Development">Custom SaaS Development</option>
                      <option value="AI Automation Solutions">AI Automation Solutions</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#D7E2EA]/70">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, goals, or scope..."
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-[#D7E2EA] text-[#0C0C0C] rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white transition-colors cursor-pointer shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#D7E2EA]/50 font-light uppercase tracking-wider">
          <p>© {new Date().getFullYear()} AYUSH JHA. ALL RIGHTS RESERVED.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
