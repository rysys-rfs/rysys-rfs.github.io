import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Code, Layers, Sparkles, Filter, Activity, Cpu, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Power & Grid' | 'Machine Learning' | 'Hardware & Metrology' | 'Tools & Web';
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  metrics?: string;
  sponsor?: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 'intel-dualbeam-rcfa',
      title: 'Dual Beam SEM/FIB Silicon Failure Analysis',
      description: 'Root-cause failure analysis (RCFA) on advanced silicon nodes using Dual Beam SEM/FIB instrumentation.',
      longDescription: 'Executed root-cause failure analysis (RCFA) on advanced silicon node technologies at Intel Corporation. Isolated structural and electrical fault mechanisms to identify complex defect modes, optimized HW/SW parameters for electron/ion beam alignment, and authored detailed technical reports with cross-sectional imagery.',
      category: 'Hardware & Metrology',
      tech: ['Dual Beam SEM/FIB', 'RCFA', 'Beam Alignment', 'Cross-Sectional Milling', 'Defect Isolation'],
      githubUrl: 'https://github.com/rysys-rfs',
      demoUrl: '#',
      featured: true,
      metrics: 'Isolated complex silicon defect modes',
      sponsor: 'Intel Corporation',
    },
    {
      id: 'hitachi-cdsem-metrology',
      title: 'CD-SEM & Plasma Etch Qualification Protocols',
      description: 'Operation, calibration, and electromechanical maintenance of CD-SEM metrology inside HVM cleanrooms.',
      longDescription: 'Operated, maintained, and calibrated CD-SEM metrology equipment inside a High-Volume Manufacturing (HVM) cleanroom at Hitachi High-Tech America. Performed preventative and unscheduled repairs on plasma etching chambers, utilized oscilloscopes and logic analyzers for electromechanical troubleshooting, and authored step-by-step SOPs.',
      category: 'Hardware & Metrology',
      tech: ['CD-SEM Metrology', 'HVM Cleanroom', 'Plasma Etch Maintenance', 'Oscilloscopes', 'SOP Authoring'],
      githubUrl: 'https://github.com/rysys-rfs',
      demoUrl: '#',
      featured: true,
      metrics: 'Maximized cleanroom tool up-time',
      sponsor: 'Hitachi High-Tech America',
    },
    {
      id: 'automated-grid-event',
      title: 'Automated Grid Event Response System',
      description: 'Statistical analysis and ML models processing high-dimensional sensor data for power systems research.',
      longDescription: 'Executed technical tests and statistical analysis for joint PGE- and USGS-funded machine learning and power systems research at Portland State University. Processed high-dimensional sensor data to generate engineering records, trend charts, and system performance models.',
      category: 'Power & Grid',
      tech: ['Power Systems', 'Machine Learning', 'High-Dimensional Data', 'Statistical Analysis', 'PGE & USGS Data'],
      githubUrl: 'https://github.com/rysys-rfs',
      demoUrl: '#',
      featured: true,
      metrics: 'Joint PGE & USGS Funded Research',
      sponsor: 'PGE & USGS Research',
    },
    {
      id: 'datalogic-cnn-localization',
      title: 'High-Speed Image Localization & Signal Pipelines',
      description: 'Noise-reduction algorithms and signal processing pipelines for high-speed image localization.',
      longDescription: 'Implemented noise-reduction algorithms and signal processing pipelines for high-speed image localization during an engineering internship at Datalogic. Developed script-based data visualization tools to generate experimental performance metrics for development engineers.',
      category: 'Machine Learning',
      tech: ['Signal Processing', 'Noise Reduction', 'Image Localization', 'Scripting', 'Data Visualization'],
      githubUrl: 'https://github.com/rysys-rfs',
      demoUrl: '#',
      featured: false,
      sponsor: 'Datalogic Engineering',
    },
  ];

  const categories = ['All', 'Power & Grid', 'Machine Learning', 'Hardware & Metrology', 'Tools & Web'];

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-10 sm:py-12 bg-white text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
              <FolderGit2 className="w-3.5 h-3.5" /> IEEE RESEARCH & HARDWARE PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              Selected Engineering Projects
            </h2>
            <p className="text-slate-800 text-sm sm:text-base font-mono">
              Dual Beam SEM/FIB failure analysis, CD-SEM cleanroom qualification, power systems ML research, and high-speed signal processing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded border-2 transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FFD100] text-slate-950 border-slate-900 shadow-[3px_3px_0px_0px_#00482B]'
                    : 'bg-white border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const shadows = [
              'shadow-[4px_4px_0px_0px_#00482B]',
              'shadow-[4px_4px_0px_0px_#FFD100]',
              'shadow-[4px_4px_0px_0px_#003865]',
            ];
            return (
              <div
                key={project.id}
                className={`group rounded-lg bg-slate-50 border-2 border-slate-900 ${shadows[idx % shadows.length]} p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#FFD100]`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#00482B] text-white border-2 border-slate-900">
                      {project.category}
                    </span>
                    {project.sponsor && (
                      <span className="text-[10px] font-mono font-bold text-slate-950 bg-[#FFD100] px-2 py-0.5 rounded border-2 border-slate-900">
                        {project.sponsor}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00482B] transition-colors font-mono">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-800 leading-relaxed font-mono">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="text-xs font-mono font-bold text-slate-950 bg-white border-2 border-slate-900 px-3 py-1.5 rounded flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#00482B]">
                      <Zap className="w-3.5 h-3.5 text-[#00482B]" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t-2 border-slate-900 space-y-3">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-900 border border-slate-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-bold text-[#00482B] hover:underline underline-offset-4"
                    >
                      View Details &rarr;
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-white border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] transition-all"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Project Detail */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white border-2 border-slate-900 rounded-lg max-w-lg w-full p-6 space-y-5 shadow-[6px_6px_0px_0px_#00482B] relative font-mono text-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00482B] uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded bg-slate-100 border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100]"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-800 leading-relaxed font-mono">
                {selectedProject.longDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#00482B] uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 border-2 border-slate-900 text-slate-900">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t-2 border-slate-900">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neobrutal-btn-secondary flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="neobrutal-btn-gold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
