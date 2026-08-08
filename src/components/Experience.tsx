import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Building2, Compass, Microchip } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Post-silicon Validation Engineer',
      company: 'Intel Corporation',
      period: 'Jan 2025 – Aug 2025',
      location: 'Hillsboro, OR',
      description: 'Executed root-cause failure analysis (RCFA) on advanced silicon nodes using Dual Beam SEM/FIB instrumentation.',
      achievements: [
        'Executed root-cause failure analysis (RCFA) on advanced silicon nodes using Dual Beam SEM/FIB instrumentation.',
        'Isolated structural and electrical fault mechanisms to identify complex defect modes and drive process yield improvements.',
        'Optimized HW/SW parameters for electron/ion beam alignment, high-resolution imaging, and precise sample milling.',
        'Collaborated with cross-functional teams to resolve critical process deviations and establish accurate defect root causes.',
        'Authored detailed technical reports and generated cross-sectional imagery for engineering qualification routines.',
      ],
      badge: 'Semiconductor Validation',
    },
    {
      role: 'Process Technician',
      company: 'Hitachi High-Tech America',
      period: 'Feb 2024 – Jan 2025',
      location: 'Hillsboro, OR',
      description: 'Operated, maintained, and calibrated CD-SEM metrology equipment within a high-volume manufacturing (HVM) clean-room.',
      achievements: [
        'Operated, maintained, and calibrated CD-SEM metrology equipment within an HVM cleanroom.',
        'Executed preventative and unscheduled hardware maintenance/repair of plasma etching chambers for maximal tool up-time.',
        'Electromechanical system troubleshooting using oscilloscopes, logic analyzers, and diagnostic software.',
        'Configured HW/SW parameters to execute experimental runs and qualify tools against strict process specifications.',
        'Authored step-by-step standard operating procedures (SOPs) and technical training materials for cleanroom personnel.',
      ],
      badge: 'Cleanroom Metrology',
    },
    {
      role: 'Power Systems & Machine Learning Research Engineer',
      company: 'Portland State University & USGS',
      period: 'Sept 2021 – Aug 2024',
      location: 'Portland, OR',
      description: 'Executed technical tests and statistical analysis for joint PGE- and USGS-funded machine learning and power systems research.',
      achievements: [
        'Executed technical tests and statistical analysis for joint PGE- and USGS-funded machine learning and power systems research.',
        'Processed high-dimensional sensor data to generate engineering records, trend charts, and system performance models.',
        'Delivered technical documentation and workflow designs in collaboration with multi-disciplinary engineering groups.',
      ],
      badge: 'PGE & USGS Research',
    },
    {
      role: 'Intern Engineer',
      company: 'Datalogic',
      period: 'Jan 2022 – Sept 2022',
      location: 'Eugene, OR',
      description: 'Implemented noise-reduction algorithms and signal processing pipelines for high-speed image localization.',
      achievements: [
        'Implemented noise-reduction algorithms and signal processing pipelines for high-speed image localization.',
        'Developed script-based data visualization tools to generate experimental performance metrics for development engineers.',
      ],
      badge: 'Signal Processing & Vision',
    },
  ];

  return (
    <section id="experience" className="py-10 sm:py-12 bg-white text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
            <Briefcase className="w-3.5 h-3.5" /> IEEE CHRONOLOGICAL CAREER RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
            Professional Experience
          </h2>
          <p className="text-slate-800 text-sm sm:text-base font-mono">
            Post-silicon validation, HVM cleanroom metrology, power grid research, and industrial signal processing.
          </p>
        </div>

        {/* Professional Profile Spotlight Card with Headshot */}
        <div className="max-w-4xl mx-auto mb-8 p-5 sm:p-6 rounded-lg bg-slate-50 border-2 border-slate-900 shadow-[5px_5px_0px_0px_#00482B] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10">
            
            {/* Professional Headshot */}
            <div className="relative shrink-0">
              <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-md overflow-hidden border-2 border-slate-900 shadow-[3px_3px_0px_0px_#FFD100] bg-white flex items-center justify-center">
                <img
                  src="/propic.png"
                  alt="Ryne F. Shelton - Professional Headshot"
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#00482B] border-2 border-slate-900 text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold shadow-[2px_2px_0px_0px_#FFD100]">
                B.S. CompE
              </div>
            </div>

            {/* Profile Detail Content */}
            <div className="space-y-3 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-mono">Ryne F. Shelton</h3>
                <span className="text-xs font-mono font-bold text-slate-950 bg-[#FFD100] border-2 border-slate-900 px-2 py-0.5 rounded shadow-[2px_2px_0px_0px_#003865]">
                  IEEE Professional
                </span>
              </div>

              <div className="text-sm font-bold text-slate-900 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="text-[#00482B] font-mono">Post-silicon Validation & Cleanroom Metrology Engineer</span>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-800 pt-1">
                <div className="flex items-center gap-1 text-slate-900 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#00482B] shrink-0" />
                  <span>Portland Metropolitan Area, OR</span>
                </div>
                <div className="flex items-center gap-1 text-slate-900 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                  <span>Silicon Forest Tech Corridor</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 border-t-2 border-slate-900 font-mono">
                Based in <strong className="text-slate-950 underline">Portland, Oregon</strong>, with hands-on experience across major Pacific Northwest technology facilities including Intel Corporation (Hillsboro), Hitachi High-Tech America (Hillsboro), and Portland State University's Power Engineering Laboratories.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_#00482B]">
                  Hillsboro Cleanrooms
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
                  PSU Engineering
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_#003865]">
                  Dual Beam SEM/FIB
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_#00482B]">
                  CD-SEM Metrology
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-1 before:bg-slate-900">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative flex items-start group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-900 group-hover:bg-[#FFD100] transition-all z-10 shadow-[2px_2px_0px_0px_#00482B]" />

              {/* Card Container */}
              <div className={`w-full pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-10 md:text-right md:w-1/2' : 'md:pl-10 md:ml-auto md:w-1/2'}`}>
                <div className="p-5 rounded-lg bg-slate-50 border-2 border-slate-900 hover:border-slate-900 transition-all space-y-3 shadow-[4px_4px_0px_0px_#00482B] hover:shadow-[6px_6px_0px_0px_#FFD100]">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#00482B] font-mono justify-start md:justify-start">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00482B]" /> {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-[#0077C8]" /> {exp.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-mono">{exp.role}</h3>
                  <div className="text-sm font-bold text-[#00482B] font-mono">{exp.company}</div>

                  <p className="text-xs text-slate-800 leading-relaxed text-left font-mono">{exp.description}</p>

                  <ul className="space-y-2 pt-2 text-xs text-slate-800 text-left font-mono">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00482B] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-left">
                    <span className="inline-block text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-[#FFD100] border-2 border-slate-900 text-slate-950 shadow-[2px_2px_0px_0px_#00482B]">
                      {exp.badge}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


