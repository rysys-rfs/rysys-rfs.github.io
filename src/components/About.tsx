import React from 'react';
import { User, Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap, Microscope, Wrench, FileCheck, Layers, MapPin, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Metrology & Process Tools',
      description: 'Expert in maintaining, calibrating, and operating Dual Beam (SEM/FIB) and CD-SEM tools in HVM cleanroom environments.',
      icon: Microscope,
      accent: 'border-slate-900 shadow-[3px_3px_0px_0px_#00482B]'
    },
    {
      title: 'Root-Cause Failure Analysis',
      description: 'Adept at executing RCFA on advanced silicon nodes to isolate structural and electrical fault mechanisms and optimize yield.',
      icon: ShieldCheck,
      accent: 'border-slate-900 shadow-[3px_3px_0px_0px_#FFD100]'
    },
    {
      title: 'Hardware & Electromechanical',
      description: 'Troubleshooting with oscilloscopes, logic analyzers, HW/SW parameter alignment, and plasma etch chamber maintenance.',
      icon: Wrench,
      accent: 'border-slate-900 shadow-[3px_3px_0px_0px_#003865]'
    },
    {
      title: 'Technical Documentation & SOPs',
      description: 'Authoring rigorous SOPs, engineering qualification reports, training materials, and high-dimensional data visualization scripts.',
      icon: FileCheck,
      accent: 'border-slate-900 shadow-[3px_3px_0px_0px_#00482B]'
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-12 bg-slate-50 text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
            <User className="w-3.5 h-3.5" /> PROFESSIONAL SUMMARY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
            Cleanroom Metrology & Failure Analysis Expertise
          </h2>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-mono">
            Computer & Electrical Engineering professional specializing in High-Volume Manufacturing (HVM) cleanroom operations, metrology, and failure analysis. Proven track record operating Dual Beam (SEM/FIB) and CD-SEM systems, executing electromechanical troubleshooting, and conducting root-cause failure analysis (RCFA) across semiconductor and research workflows.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-lg bg-white border-2 ${item.accent} transition-all group`}
              >
                <div className="w-11 h-11 rounded bg-slate-100 border-2 border-slate-900 flex items-center justify-center text-[#00482B] group-hover:bg-[#FFD100] group-hover:text-slate-950 transition-all mb-3 shadow-[2px_2px_0px_0px_#00482B]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-mono">{item.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-mono">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Portland Location & Engineering Base Card */}
        <div className="mt-8 rounded-lg bg-white border-2 border-slate-900 overflow-hidden shadow-[5px_5px_0px_0px_#00482B]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left imagery panel */}
            <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden group">
              <img
                src="/portland_skyline.jpg"
                alt="Portland Oregon Skyline & Mount Hood - Silicon Forest Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/90" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-900 bg-white/95 px-3 py-1.5 rounded border-2 border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
                <span className="flex items-center gap-1 font-bold text-[#00482B]">
                  <MapPin className="w-3.5 h-3.5 text-[#00482B]" /> Portland, Oregon
                </span>
                <span className="text-slate-900 font-bold">Silicon Forest Tech Hub</span>
              </div>
            </div>

            {/* Right details panel */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="neobrutal-badge bg-[#FFD100] text-slate-950 border-slate-900 shadow-[2px_2px_0px_0px_#00482B]">
                  <Building2 className="w-3.5 h-3.5" /> PACIFIC NORTHWEST TECH CORRIDOR
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-mono">Located in Portland, Oregon</h3>
                <p className="text-sm text-slate-800 leading-relaxed font-mono">
                  Graduated with <strong className="bg-[#FFD100] px-1 border border-slate-900 text-slate-950">Highest Honors</strong> in Bachelor of Science in Computer & Electrical Engineering from Portland State University. Deeply rooted in Oregon's technology sector with direct cleanroom and lab experience at <strong className="text-[#00482B] underline">Intel (Hillsboro)</strong>, <strong className="text-[#00482B] underline">Hitachi High-Tech (Hillsboro)</strong>, <strong className="text-[#00482B] underline">PSU Power Lab (Portland)</strong>, and <strong className="text-[#00482B] underline">Datalogic (Eugene)</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-slate-900">
                <div className="text-xs font-mono text-slate-700 space-x-3 font-bold">
                  <span>• Hillsboro Cleanrooms</span>
                  <span>• Portland State University</span>
                </div>
                <a
                  href="#contact"
                  className="neobrutal-btn-gold"
                >
                  Contact Ryne Shelton
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

