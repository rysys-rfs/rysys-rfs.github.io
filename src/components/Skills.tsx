import React from 'react';
import { Code, Database, Globe, Server, Terminal, Shield, Cpu, Layout, Microscope, Wrench, Search, FileText } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Metrology & Process Tools',
      icon: Microscope,
      skills: [
        'Dual Beam SEM/FIB',
        'CD-SEM Metrology',
        'Light Microscopy',
        'Thin Film Processing',
        'Plasma Etch Processing',
        'Tool Qualification',
        'HVM Cleanroom Protocols',
      ],
    },
    {
      category: 'Equipment & Hardware',
      icon: Wrench,
      skills: [
        'Electromechanical Troubleshooting',
        'HW/SW Parameter Optimization',
        'Preventative & Unscheduled Maintenance',
        'Oscilloscopes',
        'Logic Analyzers',
        'Tool Matching',
      ],
    },
    {
      category: 'Testing & Failure Analysis',
      icon: Search,
      skills: [
        'Root-Cause Failure Analysis (RCFA)',
        'Experimental Design',
        'Yield Optimization',
        'Calibration Scripting',
        'Data Visualization',
        'Signal Processing',
      ],
    },
    {
      category: 'Documentation & Collaboration',
      icon: FileText,
      skills: [
        'Standard Operating Procedures (SOPs)',
        'Technical Training',
        'Engineering Records',
        'MS Office Suite',
        'Cross-Functional Team Workflows',
        'Technical Reporting',
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 sm:py-12 bg-slate-50 text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
            <Cpu className="w-3.5 h-3.5" /> IEEE TECHNICAL SPECIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
            Core Technical Competencies
          </h2>
          <p className="text-slate-800 text-sm sm:text-base font-mono">
            Cleanroom metrology instrumentation, electromechanical hardware, root-cause failure analysis, and engineering records.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const accents = [
              'shadow-[4px_4px_0px_0px_#00482B] border-slate-900',
              'shadow-[4px_4px_0px_0px_#FFD100] border-slate-900',
              'shadow-[4px_4px_0px_0px_#003865] border-slate-900',
              'shadow-[4px_4px_0px_0px_#00482B] border-slate-900',
            ];
            return (
              <div
                key={idx}
                className={`p-5 rounded-lg bg-white border-2 ${accents[idx % accents.length]} transition-all space-y-4`}
              >
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <div className="w-9 h-9 rounded bg-[#FFD100] border-2 border-slate-900 flex items-center justify-center text-slate-950 shadow-[2px_2px_0px_0px_#00482B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-mono">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] transition-all shadow-[2px_2px_0px_0px_#00482B]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
