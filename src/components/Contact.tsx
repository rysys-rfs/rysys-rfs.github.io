import React, { useState } from 'react';
import { Mail, Github, Send, CheckCircle2, MapPin, MessageSquare, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-10 sm:py-12 bg-slate-50 text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
              <MessageSquare className="w-3.5 h-3.5" /> IEEE TECHNICAL INQUIRIES
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              Direct Contact & Communications
            </h2>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-mono">
              Available for engineering roles, technical inquiries, research consultations, and collaboration in semiconductor metrology, post-silicon validation, and power systems.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:rshelton93@proton.me"
                className="flex items-center gap-4 p-4 rounded-lg bg-white border-2 border-slate-900 hover:bg-[#FFD100] shadow-[4px_4px_0px_0px_#00482B] transition-all group"
              >
                <div className="w-10 h-10 rounded bg-[#00482B] border-2 border-slate-900 flex items-center justify-center text-[#FFD100] group-hover:bg-slate-900 group-hover:text-[#FFD100] transition-all shadow-[2px_2px_0px_0px_#FFD100]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-800 font-mono font-bold">Direct Email</div>
                  <div className="text-sm font-bold text-slate-950 font-mono">rshelton93@proton.me</div>
                </div>
              </a>

              <a
                href="tel:+19713525063"
                className="flex items-center gap-4 p-4 rounded-lg bg-white border-2 border-slate-900 hover:bg-[#FFD100] shadow-[4px_4px_0px_0px_#003865] transition-all group"
              >
                <div className="w-10 h-10 rounded bg-[#003865] border-2 border-slate-900 flex items-center justify-center text-white group-hover:bg-slate-900 group-hover:text-white transition-all shadow-[2px_2px_0px_0px_#0077C8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-800 font-mono font-bold">Direct Phone</div>
                  <div className="text-sm font-bold text-slate-950 font-mono">+1 (971) 352-5063</div>
                </div>
              </a>

              <a
                href="https://github.com/rysys-rfs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white border-2 border-slate-900 hover:bg-[#FFD100] shadow-[4px_4px_0px_0px_#00482B] transition-all group"
              >
                <div className="w-10 h-10 rounded bg-slate-950 border-2 border-slate-900 flex items-center justify-center text-white group-hover:bg-[#00482B] group-hover:text-white transition-all shadow-[2px_2px_0px_0px_#00482B]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-800 font-mono font-bold">GitHub Profile</div>
                  <div className="text-sm font-bold text-slate-950 font-mono">github.com/rysys-rfs</div>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_#00482B] font-mono">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded bg-[#FFD100] border-2 border-slate-900 text-slate-950 flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#00482B]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-xs text-slate-800 max-w-md mx-auto">
                    Thank you for reaching out, Ryne F. Shelton will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="neobrutal-btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-4">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-900">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded bg-slate-50 border-2 border-slate-900 focus:border-[#00482B] focus:outline-none text-sm text-slate-900 placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-900">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded bg-slate-50 border-2 border-slate-900 focus:border-[#00482B] focus:outline-none text-sm text-slate-900 placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-900">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 rounded bg-slate-50 border-2 border-slate-900 focus:border-[#00482B] focus:outline-none text-sm text-slate-900 placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="neobrutal-btn-gold w-full flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
