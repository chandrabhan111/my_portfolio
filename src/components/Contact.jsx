import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Web3Forms API Submission
    const data = new FormData();
    Object.entries(formValues).forEach(([key, val]) => {
      data.append(key, val);
    });
    // Hardcoding the user's Web3Forms access key
    data.append('access_key', '8c7647fd-5869-4958-89c5-300b3f2c402a');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const resData = await response.json();
      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: `Thank you, ${formValues.name}! Your message has been sent successfully. Chandrabhan will get back to you shortly.`,
        });
        setFormValues({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: resData.message || 'Something went wrong!',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong! Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email Me', value: 'chandrabhanghar@gmail.com', href: 'mailto:chandrabhanghar@gmail.com' },
    { icon: FaPhone, label: 'Call Me', value: '+91 6378091973', href: 'tel:+916378091973' },
    { icon: FaLocationDot, label: 'Location', value: 'Jaipur, Rajasthan, India', href: null },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-primary tracking-wider uppercase mb-2 block">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact Me
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out for project collaboration, job opportunities, or just a quick technical chat about backend architecture!
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl border border-brand-primary/10 bg-brand-primary/5 text-brand-primary">
                    <info.icon className="text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a href={info.href} className="text-base font-semibold text-gray-200 hover:text-brand-primary transition-colors duration-300">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-gray-200">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-primary focus:bg-white/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-primary focus:bg-white/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-primary focus:bg-white/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Let's build something awesome..."
                  className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-primary focus:bg-white/5 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="self-start flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-primary to-brand-accent text-black font-bold text-sm rounded-xl hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
              >
                {loading ? (
                  <>
                    <span>Sending...</span>
                    <AiOutlineLoading3Quarters className="animate-spin text-sm" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>

            {/* Feedback Alerts */}
            {status.message && (
              <div
                className={`mt-6 p-4 rounded-xl text-sm text-center font-medium border ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                }`}
              >
                {status.message}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
