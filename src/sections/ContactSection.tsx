import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { Mail, Send, MapPin, CheckCircle2, Copy, Check, ArrowUp, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom SaaS Development',
    message: '',
  });

  const targetEmail = 'ayushop645@gmail.com';
  const githubUrl = 'https://github.com/AyushJhaop';
  const linkedinUrl = 'https://www.linkedin.com/in/ayush-jha-63b657319/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `Portfolio Message: ${formData.service} from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const subject = encodeURIComponent(`Portfolio Message: ${formData.service} from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
      }
    } catch {
      const subject = encodeURIComponent(`Portfolio Message: ${formData.service} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          service: 'Custom SaaS Development',
          message: '',
        });
      }, 5000);
    }
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
                Whether you need a full-stack web application, AI automation workflows, or a custom digital experience, I'm always open to discussing new opportunities.
              </p>
            </div>

            {/* Direct Email Card with Copy Button */}
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col gap-3 group hover:border-[#D7E2EA]/40 transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                Direct Gmail Address
              </span>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <a
                  href={`mailto:${targetEmail}`}
                  className="text-base sm:text-lg md:text-xl font-mono font-semibold text-[#D7E2EA] hover:text-white transition-colors underline underline-offset-4 decoration-[#D7E2EA]/30 hover:decoration-[#D7E2EA]"
                >
                  {targetEmail}
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
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#141414] border border-[#D7E2EA]/15 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                <GithubIcon className="w-4 h-4 fill-current" />
                <span>GitHub</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#141414] border border-[#D7E2EA]/15 rounded-2xl flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
                <span>LinkedIn</span>
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
                    Message Sent to Gmail!
                  </h3>
                  <p className="text-[#D7E2EA]/70 text-sm sm:text-base max-w-md font-light">
                    Thank you! Your inquiry has been routed directly to <span className="font-mono text-emerald-400">{targetEmail}</span>. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA]">
                      Send a Message to Gmail
                    </h3>
                    <p className="text-[#D7E2EA]/60 text-xs sm:text-sm font-light">
                      Fill out the form below to send an email directly to ayushop645@gmail.com.
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
                        placeholder="Your Name"
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
                        placeholder="yourname@example.com"
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
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#D7E2EA] text-[#0C0C0C] rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white transition-colors cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0C0C0C]" />
                        <span>Sending to Gmail...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message to Gmail</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
