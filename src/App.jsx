
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { Mail, Github, Linkedin, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import hero from './mocks/hero.json';
import contact from './mocks/contact.json';
import projects from './mocks/projects.json';

const App = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  if (!hero || !projects || !contact) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-indigo-600" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-indigo-100 selection:text-indigo-900 font-sans text-neutral-900">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-40 pb-20 md:pt-64 md:pb-40 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
              <div className="flex-1 transition-all duration-700 ease-out translate-y-0 opacity-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                    Profile
                  </span>
                  <span className="h-[1px] w-8 bg-neutral-300"></span>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    {hero.role} — {hero.brand}
                  </span>
                </div>

                <h1 className="text-6xl md:text-9xl font-black tracking-tight leading-[0.85] mb-8 text-neutral-900">
                  {hero.headline}
                </h1>
                
                <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed mb-10">
                  {hero.subheadline}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all active:scale-95 group"
                  >
                    {hero.ctaPrimary}
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 rounded-full font-bold hover:bg-neutral-50 transition-all active:scale-95"
                  >
                    {hero.ctaSecondary}
                  </button>
                </div>
              </div>

              <div className="flex-shrink-0 relative transition-all duration-700 delay-200 ease-out opacity-100 scale-100 hidden lg:block">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px]">
                  {/* Decorative Abstract Background */}
                  <div className="absolute inset-0 bg-indigo-50 rounded-[3rem] -rotate-6 translate-x-6 translate-y-6 -z-10" />
                  <div className="absolute inset-0 border border-neutral-200 rounded-[3rem] rotate-3 -z-10" />
                  
                  <div className="w-full h-full overflow-hidden rounded-[3rem] shadow-2xl relative group">
                    <img 
                      src={hero.profileImage} 
                      alt={hero.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Floating Status Badge */}
                  <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-neutral-100 hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-0.5">Status</p>
                        <p className="text-sm font-bold text-neutral-900">Available for Work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square rounded-full bg-gradient-to-br from-indigo-100 to-transparent blur-3xl" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 px-6 bg-white border-y border-neutral-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] mb-4 block">Selected Works</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Impactful Projects</h2>
              </div>
              <p className="text-neutral-500 max-w-sm text-sm md:text-base leading-relaxed">
                A technical showcase of scalable systems designed to bridge the gap between complex engineering and elegant brand experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section id="experience" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-black tracking-tighter mb-10">Strategic Tech Stack</h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: "Languages", list: ["TypeScript", "JavaScript", "HTML5", "CSS/SCSS"] },
                  { title: "Frontend", list: ["React", "Next.js", "Tailwind"] },
                  { title: "CMS & Platforms", list: ["WordPress", "WooCommerce", "Vercel"] },
                  { title: "Full Stack", list: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
                ].map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="font-bold text-neutral-900 border-l-2 border-indigo-600 pl-4">{skill.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.list.map(item => (
                        <span key={item} className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-neutral-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Expertise</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10 relative z-10">
                Focused on building robust digital assets that drive growth. My approach combines technical rigor with business intelligence.
              </p>
              <ul className="space-y-5 relative z-10">
                {['High-Performance React Architectures', 'Conversion-Optimized Interfaces', 'Headless WordPress Ecosystems'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <CheckCircle2 className="text-indigo-400" size={14} />
                    </div>
                    <span className="font-medium text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-40 px-6 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                {contact.title}
              </h2>
              <p className="text-neutral-400 text-xl mb-12 max-w-md leading-relaxed">
                {contact.description}
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-lg hover:text-indigo-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium underline decoration-neutral-700 underline-offset-4">{contact.email}</span>
                </a>
                <div className="flex gap-4 pt-6">
                  {[
                    { icon: Github, link: contact.github },
                    { icon: Linkedin, link: contact.linkedin }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.link} 
                      className="w-14 h-14 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-neutral-900 hover:border-white transition-all transform hover:-translate-y-1"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[3rem] text-neutral-900 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white -rotate-12 shadow-lg">
                <span className="font-black text-xl">Let's Go</span>
              </div>
              
              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Transmission Successful</h3>
                  <p className="text-neutral-500 mb-8">Your inquiry has been received. I'll respond within one business day.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-indigo-600 font-black uppercase tracking-widest text-sm hover:underline"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-neutral-100 focus:border-indigo-600 transition-colors focus:outline-none font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="e.g. satoshi@bitcoin.org"
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-neutral-100 focus:border-indigo-600 transition-colors focus:outline-none font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Message</label>
                    <textarea 
                      required
                      rows={3} 
                      placeholder="Briefly describe your vision..."
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-neutral-100 focus:border-indigo-600 transition-colors focus:outline-none font-medium text-lg resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-6 bg-neutral-900 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-neutral-800 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                  >
                    {formStatus === 'submitting' ? 'Transmitting...' : 'Send Inquiry'}
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter">
            FUSEN<span className="text-indigo-600">.</span>
          </div>
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Fusen Chua. Handcrafted with Precision.
          </p>
          <div className="flex items-center gap-10">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-indigo-600 transition-colors"
            >
              Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
