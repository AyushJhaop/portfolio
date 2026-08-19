import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const targetEmail = 'ayushop645@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            key="contact-modal-box"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 w-full max-w-xl bg-[#141416] border-2 border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold uppercase text-[#D7E2EA] mb-2">Message Sent to Gmail!</h3>
                <p className="text-[#D7E2EA]/70 text-sm">Your message has been routed to <span className="font-mono text-emerald-400">{targetEmail}</span>.</p>
              </div>
            ) : (
              <div>
                <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase mb-2">Let's Connect</h3>
                <p className="text-[#D7E2EA]/70 text-sm sm:text-base mb-8">
                  Have a full-stack project, AI automation, or web application in mind? Drop a message directly to Gmail below!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="yourname@example.com"
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your web app, AI automation, or software needs..."
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full py-4 rounded-full font-bold uppercase tracking-widest text-[#0C0C0C] bg-[#D7E2EA] hover:bg-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Send Message to Gmail</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-[#D7E2EA]/10 flex flex-wrap justify-between items-center text-xs text-[#D7E2EA]/50 gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D7E2EA]" />
                    <span className="font-mono text-xs">{targetEmail}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D7E2EA]" />
                    <span>India / Remote</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
