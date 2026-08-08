import React from 'react';
import { ArrowRight, Github, Mail, Code2, Sparkles, Download, Layers, Cpu, CircuitBoard, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-white text-slate-900 bg-grid-pattern border-b-2 border-slate-900">
      {/* Background Subtle Highlights - Portland Forest Green & River Blue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00482B]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#003865]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD100] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD100]"></span>
              </span>
              CLEANROOM • DUAL BEAM SEM/FIB • CD-SEM METROLOGY • RCFA
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-mono">
              Engineering Solutions in <span className="text-[#00482B] border-b-4 border-[#00482B] pb-0.5">Semiconductor Metrology</span>, <span className="bg-[#FFD100] px-1.5 py-0.5 border-2 border-slate-900 text-slate-950">Embedded Hardware</span>, & <span className="text-[#003865] underline decoration-[#0077C8] decoration-4">Systems Infrastructure</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-800 max-w-2xl leading-relaxed font-mono">
              Computer & Electrical Engineering professional (<strong className="bg-[#FFD100] text-slate-950 px-1 py-0.5 border border-slate-900">B.S. CompE, Highest Honors</strong>) with expertise spanning HVM cleanroom metrology (CD-SEM, Dual Beam SEM/FIB, RCFA), embedded systems & firmware, power quality analytics, and Linux IT infrastructure.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="hero-view-projects"
                href="#projects"
                className="neobrutal-btn-gold flex items-center gap-2"
              >
                Explore Selected Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-github-link"
                href="https://github.com/rysys-rfs"
                target="_blank"
                rel="noopener noreferrer"
                className="neobrutal-btn-secondary flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-900" />
                GitHub Profile
              </a>

              <a
                id="hero-email-link"
                href="mailto:rshelton93@proton.me"
                className="p-2.5 rounded-md bg-white border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[3px_3px_0px_0px_#00482B] transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Quick stats pills - Neobrutalist Cards */}
            <div className="pt-5 border-t-2 border-slate-900 grid grid-cols-3 gap-3 max-w-lg">
              <div className="p-3 bg-slate-50 border-2 border-slate-900 rounded-md shadow-[3px_3px_0px_0px_#00482B]">
                <div className="text-base sm:text-lg font-bold text-slate-900 font-mono leading-tight">Highest Honors</div>
                <div className="text-[11px] text-[#00482B] font-mono mt-0.5 font-bold">B.S. CompE PSU</div>
              </div>
              <div className="p-3 bg-[#FFD100] border-2 border-slate-900 rounded-md shadow-[3px_3px_0px_0px_#00482B]">
                <div className="text-base sm:text-lg font-bold text-slate-950 font-mono leading-tight">HVM Metrology</div>
                <div className="text-[11px] text-slate-900 font-mono mt-0.5 font-bold">Dual Beam SEM/FIB</div>
              </div>
              <div className="p-3 bg-slate-50 border-2 border-slate-900 rounded-md shadow-[3px_3px_0px_0px_#003865]">
                <div className="text-base sm:text-lg font-bold text-slate-900 font-mono leading-tight">4 Key Roles</div>
                <div className="text-[11px] text-[#0077C8] font-mono mt-0.5 font-bold">Intel, Hitachi, PSU</div>
              </div>
            </div>

            {/* Affiliation & Honor Icon Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 bg-slate-50 border-2 border-slate-900 p-3 rounded-lg shadow-[4px_4px_0px_0px_#00482B]">
                <div className="bg-white px-3 py-1.5 rounded border-2 border-slate-900 flex items-center justify-center h-11 sm:h-12 hover:scale-105 transition-transform shadow-[2px_2px_0px_0px_#00482B]" title="IEEE - Institute of Electrical and Electronics Engineers">
                  <img src="./ieee.png" alt="IEEE" className="h-7 sm:h-8 w-auto object-contain" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded border-2 border-slate-900 flex items-center justify-center h-11 sm:h-12 hover:scale-105 transition-transform shadow-[2px_2px_0px_0px_#FFD100]" title="CAT - Computer Action Team (MCECS - Maseeh College of Engineering and Computer Science)">
                  <img src="./cat.jpeg" alt="CAT - Computer Action Team (MCECS)" className="h-7 sm:h-8 w-auto object-contain rounded" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded border-2 border-slate-900 flex items-center justify-center h-11 sm:h-12 hover:scale-105 transition-transform shadow-[2px_2px_0px_0px_#003865]" title="MECOP Engineering Scholar">
                  <img src="./mecop.jpg" alt="MECOP" className="h-7 sm:h-8 w-auto object-contain rounded" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded border-2 border-slate-900 flex items-center justify-center h-11 sm:h-12 hover:scale-105 transition-transform shadow-[2px_2px_0px_0px_#00482B]" title="OSGC - Oregon Space Grant Consortium (NASA Aerospace Scholar)">
                  <img src="./osgc.png" alt="OSGC" className="h-7 sm:h-8 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visuals & Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {/* Portrait Frame */}
              <div className="relative group rounded-lg overflow-hidden border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_#00482B] flex flex-col justify-between h-full min-h-[260px]">
                <div className="relative w-full h-full min-h-[260px] overflow-hidden flex items-center justify-center">
                  <img
                    src="./self.png"
                    alt="Ryne Shelton"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white border-2 border-slate-900 p-2 rounded text-left shadow-[2px_2px_0px_0px_#FFD100]">
                    <div className="text-xs font-bold text-slate-900 font-mono">Ryne F. Shelton</div>
                    <div className="text-[10px] text-[#00482B] font-mono font-bold leading-tight">B.S. CompE (Highest Honors)</div>
                  </div>
                </div>
              </div>

              {/* Code snippet / IC Spec Card */}
              <div className="relative rounded-lg bg-slate-900 text-slate-100 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#FFD100] p-3.5 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-700 pb-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00482B] border border-emerald-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFD100] border border-yellow-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#003865] border border-sky-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-[#FFD100]" /> ryne-ic-spec.ts
                    </span>
                  </div>

                  <div className="font-mono text-[11px] leading-relaxed space-y-1 text-slate-200">
                    <div>
                      <span className="text-emerald-400">const</span> <span className="text-[#FFD100]">engineer</span> = &#123;
                    </div>
                    <div className="pl-2">
                      <span className="text-slate-400">degree:</span> <span className="text-amber-300">'B.S. CompE'</span>,
                    </div>
                    <div className="pl-2">
                      <span className="text-slate-400">honors:</span> <span className="text-amber-300">'Highest Honors'</span>,
                    </div>
                    <div className="pl-2">
                      <span className="text-slate-400">tools:</span> [
                      <span className="text-emerald-300">'SEM/FIB'</span>, <span className="text-emerald-300">'CD-SEM'</span>
                      ],
                    </div>
                    <div className="pl-2">
                      <span className="text-slate-400">industry:</span> [
                      <div className="pl-2 text-sky-300">'Intel Post-Silicon'</div>
                      <div className="pl-2 text-sky-300">'Hitachi High-Tech'</div>
                      <div className="pl-2 text-sky-300">'PSU & USGS'</div>
                      ]
                    </div>
                    <div>&#125;;</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portland Union Station / Silicon Forest Regional Skyline Card */}
            <div className="relative rounded-lg overflow-hidden border-2 border-slate-900 bg-slate-950 shadow-[4px_4px_0px_0px_#003865] group h-44 sm:h-48 flex flex-col justify-end">
              <img
                src="./portland_skyline.jpg"
                alt="Portland Union Station Skyline at Night"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="relative z-10 p-3 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold bg-white border-2 border-slate-900 px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#FFD100]">
                  <MapPin className="w-3.5 h-3.5 text-[#00482B]" /> Portland, OR Tech Hub
                </div>
                <span className="text-[10px] text-slate-900 bg-[#FFD100] border-2 border-slate-900 px-2.5 py-1 rounded font-bold shadow-[2px_2px_0px_0px_#00482B]">
                  Union Station & Silicon Forest
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
