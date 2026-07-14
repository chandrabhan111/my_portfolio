import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFileExcel, FaGears, FaEnvelope, FaCircleCheck, FaHospital, FaCartShopping, FaStore, FaWarehouse, FaUtensils } from 'react-icons/fa6';
import Footer from '../components/Footer';

export default function StockAlertDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: 'E-commerce'
  });
  const [status, setStatus] = useState('');

  const industries = [
    { name: 'Medical', icon: FaHospital, desc: 'Critical supply monitoring' },
    { name: 'Grocery', icon: FaCartShopping, desc: 'Perishable stock alerts' },
    { name: 'E-commerce', icon: FaStore, desc: 'Prevent overselling' },
    { name: 'Warehouse', icon: FaWarehouse, desc: 'Bulk inventory tracking' },
    { name: 'Restaurants', icon: FaUtensils, desc: 'Daily ingredient levels' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Fallback to Web3Forms for now (user's existing setup can be updated to n8n later)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8c7647fd-5869-4958-89c5-300b3f2c402a", // Correct user key
          subject: `New Lead: AI Stock Alert System from ${formData.businessName}`,
          ...formData
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', businessName: '', businessType: 'E-commerce' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#030712] min-h-screen text-gray-100 font-sans antialiased">
      {/* Navbar Minimal */}
      <nav className="fixed w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <FaArrowLeft className="text-sm" />
            <span className="font-medium text-sm">Back to Portfolio</span>
          </Link>
          <div className="text-xl font-bold font-mono tracking-tighter">
            <span className="text-white">c</span>
            <span className="text-blue-500">s.</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Live Demo Environment
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Smart Stock Alert System
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Never lose a sale due to "Out of Stock" again. See how AI automation monitors your inventory 24/7.
            </p>
          </div>

          {/* 1. Demo Preview Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500">01.</span> Live Demo Preview
            </h2>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              {/* Simulated UI */}
              <div className="space-y-6 relative z-10">
                {/* Excel Row Simulation */}
                <div className="bg-[#101520] border border-white/10 rounded-xl p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <FaFileExcel className="text-3xl text-green-500" />
                    <div>
                      <div className="text-sm text-gray-400">Google Sheets Data</div>
                      <div className="font-bold text-white">Product: Premium Headphones</div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Current Stock</div>
                      <div className="text-xl font-bold text-red-400">2</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Alert Limit</div>
                      <div className="text-xl font-bold text-gray-300">5</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-white/20 to-blue-500"></div>
                </div>

                {/* Email Alert Simulation */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-[#101520] border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)] rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                    <FaEnvelope className="text-red-400 text-xl" />
                    <div>
                      <div className="text-sm font-bold text-gray-200">URGENT: Low Stock Alert</div>
                      <div className="text-xs text-gray-500">To: Warehouse Manager</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Hello, <br/><br/>
                    The product <strong>Premium Headphones</strong> has fallen below the minimum stock limit. <br/>
                    Current Stock: <span className="text-red-400 font-bold">2 units</span> <br/><br/>
                    Please restock immediately to prevent sales loss.
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 2. How It Works */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500">02.</span> How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4 text-2xl">
                  <FaFileExcel />
                </div>
                <h3 className="font-bold text-white mb-2">1. Connect Data</h3>
                <p className="text-sm text-gray-400">Connects to your existing Google Sheets, Shopify, or POS system inventory.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center relative">
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-1/3 -left-3 w-6 h-px bg-white/20"></div>
                <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-px bg-white/20"></div>
                
                <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4 text-2xl">
                  <FaGears />
                </div>
                <h3 className="font-bold text-white mb-2">2. Automate</h3>
                <p className="text-sm text-gray-400">n8n constantly checks stock levels against your customized minimum limits.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-4 text-2xl">
                  <FaEnvelope />
                </div>
                <h3 className="font-bold text-white mb-2">3. Notify</h3>
                <p className="text-sm text-gray-400">Instantly sends an email or WhatsApp alert to you and your suppliers.</p>
              </div>
            </div>
          </section>

          {/* 3. Where It Helps */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500">03.</span> Industries We Help
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map(ind => (
                <div key={ind.name} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex flex-col items-center text-center hover:bg-white/[0.05] transition-colors">
                  <ind.icon className="text-2xl text-blue-400 mb-3" />
                  <h3 className="text-sm font-bold text-white mb-1">{ind.name}</h3>
                  <p className="text-[10px] text-gray-500">{ind.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Lead Form */}
          <section id="setup">
            <div className="bg-gradient-to-br from-[#0a1128] to-[#030712] border border-blue-500/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
              
              <div className="max-w-lg mx-auto relative z-10 text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to automate your stock?</h2>
                <p className="text-gray-400 text-sm">Fill out the form below and I will build a customized automation system for your business.</p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">Business Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm" 
                      placeholder="Acme Corp" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">Business Type</label>
                    <select 
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full bg-[#101520] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm appearance-none"
                    >
                      {industries.map(ind => (
                        <option key={ind.name} value={ind.name}>{ind.name}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-500 text-white font-bold py-4 rounded-lg mt-4 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                >
                  {status === 'sending' ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    'Setup My System'
                  )}
                </button>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center gap-2 text-green-400 text-sm">
                    <FaCircleCheck />
                    <span>Your request has been sent successfully! I will contact you shortly.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </form>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
