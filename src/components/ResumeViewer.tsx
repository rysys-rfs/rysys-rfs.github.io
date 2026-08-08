import React, { useState } from 'react';
import { FileText, Download, ZoomIn, ZoomOut, Maximize2, Minimize2, Search, Printer, ChevronLeft, ChevronRight, Check, ExternalLink, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe, Shield, Eye } from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'pdf' | 'interactive'>('pdf');
  const [page, setPage] = useState<number>(1);
  const totalPages = 1;
  const [zoom, setZoom] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 15, 150));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoom(100);

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = './rShelton_Resume_August2026.pdf';
    link.download = 'rShelton_Resume_August2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.open('./rShelton_Resume_August2026.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-10 sm:py-12 bg-slate-50 text-slate-900 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="neobrutal-badge bg-[#00482B] text-white border-slate-900 shadow-[2px_2px_0px_0px_#FFD100]">
              <FileText className="w-3.5 h-3.5" /> IEEE FORMATTED CURRICULUM VITAE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              Interactive Resume Viewer
            </h2>
            <p className="text-slate-800 text-sm sm:text-base max-w-2xl font-mono">
              Inspect Ryne Shelton's official resume, cleanroom metrology experience, B.S. CompE (Highest Honors), and engineering achievements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="bg-white p-1 rounded border-2 border-slate-900 flex items-center gap-1 shadow-[2px_2px_0px_0px_#003865]">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-[#FFD100] text-slate-950 border border-slate-900 shadow-[2px_2px_0px_0px_#00482B]'
                    : 'text-slate-800 hover:text-slate-950'
                }`}
              >
                <Eye className="w-3.5 h-3.5" /> Original PDF
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-[#FFD100] text-slate-950 border border-slate-900 shadow-[2px_2px_0px_0px_#00482B]'
                    : 'text-slate-800 hover:text-slate-950'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Formatted Text
              </button>
            </div>

            <button
              id="download-resume-pdf-btn"
              onClick={handleDownloadPDF}
              className="neobrutal-btn-gold text-xs sm:text-sm flex items-center gap-2"
            >
              {downloaded ? <Check className="w-4 h-4 text-slate-950" /> : <Download className="w-4 h-4" />}
              {downloaded ? 'Downloaded!' : 'Download PDF'}
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 rounded bg-white border-2 border-slate-900 text-slate-900 hover:bg-[#FFD100] shadow-[2px_2px_0px_0px_#00482B] transition-all"
              title="Open PDF in new window / Print"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewer Container */}
        <div className={`rounded-xl bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_#00482B] overflow-hidden transition-all ${isFullscreen ? 'fixed inset-4 z-50 flex flex-col bg-white' : ''}`}>
          
          {/* Toolbar */}
          <div className="bg-slate-100 border-b-2 border-slate-900 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-900 bg-white px-3 py-1.5 rounded border border-slate-900">
                <FileText className="w-3.5 h-3.5 text-[#00482B]" />
                <span className="font-bold">rShelton_Resume_August2026.pdf</span>
              </div>

              {viewMode === 'interactive' && (
                <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-900 rounded px-2.5 py-1 text-xs text-slate-900">
                  <Search className="w-3.5 h-3.5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Find keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent focus:outline-none text-xs text-slate-900 placeholder-slate-500 w-32 font-mono"
                  />
                </div>
              )}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {viewMode === 'interactive' && (
                <>
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 rounded bg-white border border-slate-900 text-slate-900 hover:bg-slate-200 transition-all"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="text-xs font-mono font-bold text-slate-900 px-2"
                  >
                    {zoom}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 rounded bg-white border border-slate-900 text-slate-900 hover:bg-slate-200 transition-all"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-px bg-slate-900 mx-1" />
                </>
              )}

              <a
                href="./rShelton_Resume_August2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded bg-white border border-slate-900 text-slate-900 hover:bg-[#FFD100] transition-all flex items-center gap-1 text-xs px-2.5 font-mono font-bold"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open PDF
              </a>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded bg-white border border-slate-900 text-slate-900 hover:bg-slate-200 transition-all"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Content Render Area */}
          {viewMode === 'pdf' ? (
            <div className="w-full h-[600px] sm:h-[650px] bg-slate-200">
              <iframe
                src="./rShelton_Resume_August2026.pdf"
                className="w-full h-full border-0"
                title="Ryne Shelton PDF Resume"
              />
            </div>
          ) : (
            <div className="p-4 sm:p-8 bg-slate-100 overflow-auto flex justify-center items-center min-h-[600px]">
              <div
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                className="bg-white border-2 border-slate-900 rounded-xl text-slate-900 shadow-[6px_6px_0px_0px_#00482B] p-8 sm:p-12 max-w-3xl w-full transition-transform duration-200 space-y-6 font-mono text-left"
              >
                {/* Header */}
                <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">RYNE F. SHELTON</h1>
                    <p className="text-[#00482B] font-bold text-sm mt-1">Computer & Electrical Engineering Professional</p>
                  </div>
                  <div className="text-xs text-slate-800 space-y-1 sm:text-right font-bold">
                    <div>Portland, OR | +1 (971) 352-5063</div>
                    <div className="text-[#00482B] underline">rshelton93@proton.me</div>
                    <div className="text-slate-700">github.com/rysys-rfs</div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#00482B] border-b border-slate-900 pb-1">
                    Professional Summary
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Computer & Electrical Engineering professional specializing in High-Volume Manufacturing (HVM) cleanroom operations, metrology, and failure analysis. Expert in maintaining, calibrating, and operating Dual Beam (SEM/FIB) and CD-SEM tools. Proven track record in electromechanical troubleshooting, HW/SW parameter optimization, and root-cause failure analysis (RCFA). Adept at executing technical experiments, analyzing high-dimensional data, and authoring rigorous SOPs alongside cross-functional engineering teams.
                  </p>
                </div>

                {/* Core Technical Competencies */}
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#00482B] border-b border-slate-900 pb-1">
                    Core Technical Competencies
                  </h2>
                  <div className="text-xs text-slate-800 space-y-1.5">
                    <div><strong className="text-slate-950">Metrology & Process Tools:</strong> Dual Beam SEM/FIB, CD-SEM, Light Microscopy, Thin Film & Etch Processing, Tool Qualification, HVM Cleanroom Protocols.</div>
                    <div><strong className="text-slate-950">Equipment & Hardware:</strong> Electromechanical Troubleshooting, HW/SW Parameter Optimization, Preventative/Unscheduled Maintenance, Oscilloscopes, Logic Analyzers, Tool Matching.</div>
                    <div><strong className="text-slate-950">Testing & Failure Analysis:</strong> Root-Cause Failure Analysis (RCFA), Experimental Design, Yield Optimization, Calibration Scripting, Data Visualization, Signal Processing.</div>
                    <div><strong className="text-slate-950">Documentation & Collaboration:</strong> Standard Operating Procedures (SOPs), Technical Training, Engineering Records, MS Office Suite, Cross-Functional Team Workflows.</div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#00482B] border-b border-slate-900 pb-1">
                    Professional Experience
                  </h2>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-bold text-xs text-slate-950">
                      <span>Intel Corporation — Hillsboro, OR</span>
                      <span className="text-[#00482B]">Jan 2025 – Aug 2025</span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 italic">Post-silicon Validation Engineer</div>
                    <ul className="text-xs text-slate-800 list-disc list-inside space-y-1 pl-1">
                      <li>Executed root-cause failure analysis (RCFA) on advanced silicon nodes using Dual Beam SEM/FIB instrumentation.</li>
                      <li>Isolated structural and electrical fault mechanisms to identify complex defect modes and drive process yield improvements.</li>
                      <li>Optimized HW/SW parameters for electron/ion beam alignment, high-resolution imaging, and precise sample milling.</li>
                      <li>Collaborated with cross-functional teams to resolve critical process deviations and establish accurate defect root causes.</li>
                      <li>Authored detailed technical reports and generated cross-sectional imagery for engineering qualification routines.</li>
                    </ul>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between font-bold text-xs text-slate-950">
                      <span>Hitachi High-Tech America — Hillsboro, OR</span>
                      <span className="text-[#00482B]">Feb 2024 – Jan 2025</span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 italic">Process Technician</div>
                    <ul className="text-xs text-slate-800 list-disc list-inside space-y-1 pl-1">
                      <li>Operated, maintained, and calibrated CD-SEM metrology equipment within a high-volume manufacturing (HVM) clean-room.</li>
                      <li>Executed preventative and unscheduled hardware maintenance/repair of plasma etching chambers for maximal tool up-time.</li>
                      <li>Electromechanical system troubleshooting using oscilloscopes, logic analyzers, and diagnostic software.</li>
                      <li>Configured HW/SW parameters to execute experimental runs and qualify tools against strict process specifications.</li>
                      <li>Authored step-by-step standard operating procedures (SOPs) and technical training materials for cleanroom personnel.</li>
                    </ul>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between font-bold text-xs text-slate-950">
                      <span>Portland State University & USGS — Portland, OR</span>
                      <span className="text-[#00482B]">Sept 2021 – Aug 2024</span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 italic">Power Systems & Machine Learning Research Engineer</div>
                    <ul className="text-xs text-slate-800 list-disc list-inside space-y-1 pl-1">
                      <li>Executed technical tests and statistical analysis for joint PGE- and USGS-funded machine learning and power systems research.</li>
                      <li>Processed high-dimensional sensor data to generate engineering records, trend charts, and system performance models.</li>
                      <li>Delivered technical documentation and workflow designs in collaboration with multi-disciplinary engineering groups.</li>
                    </ul>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between font-bold text-xs text-slate-950">
                      <span>Datalogic — Eugene, OR</span>
                      <span className="text-[#00482B]">Jan 2022 – Sept 2022</span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 italic">Intern Engineer</div>
                    <ul className="text-xs text-slate-800 list-disc list-inside space-y-1 pl-1">
                      <li>Implemented noise-reduction algorithms and signal processing pipelines for high-speed image localization.</li>
                      <li>Developed script-based data visualization tools to generate experimental performance metrics for development engineers.</li>
                    </ul>
                  </div>
                </div>

                {/* Education & Leadership */}
                <div className="space-y-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#00482B] border-b border-slate-900 pb-1">
                    Education & Leadership
                  </h2>
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded border border-slate-900">
                      <div className="flex justify-between font-bold text-slate-950">
                        <span>Portland State University — Portland, OR</span>
                        <span className="text-[#00482B]">2021 – 2024</span>
                      </div>
                      <div className="text-slate-900 font-bold mt-1">Bachelor of Science in Computer & Electrical Engineering (CompE) Highest Honors</div>
                      <div className="text-slate-700 text-[11px] mt-0.5">Leadership: MCECS Learning Center Manager</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-900">
                      <div className="flex justify-between font-bold text-slate-950">
                        <span>Portland Community College — Portland, OR</span>
                        <span className="text-[#00482B]">2019 – 2021</span>
                      </div>
                      <div className="text-slate-900 font-bold mt-1">Associate of Science</div>
                      <div className="text-slate-700 text-[11px] mt-0.5">Leadership: Lead Tutor & STEM Center Liaison</div>
                    </div>
                  </div>
                </div>

                {/* Affiliations & Honors */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-1">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#00482B]">
                      Affiliations & Honors
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1 rounded border border-slate-900 h-8 flex items-center justify-center">
                        <img src="./ieee.png" alt="IEEE" className="h-6 w-auto object-contain" />
                      </div>
                      <div className="bg-slate-950 p-1 rounded border border-slate-900 h-8 flex items-center justify-center">
                        <img src="./cat.jpeg" alt="CAT" className="h-6 w-auto rounded object-contain" />
                      </div>
                      <div className="bg-white p-1 rounded border border-slate-900 h-8 flex items-center justify-center">
                        <img src="./mecop.jpg" alt="MECOP" className="h-6 w-auto rounded object-contain" />
                      </div>
                      <div className="bg-white p-1 rounded border border-slate-900 h-8 flex items-center justify-center">
                        <img src="./osgc.png" alt="OSGC" className="h-6 w-auto object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded border border-slate-900 space-y-1">
                      <strong className="text-slate-950 block">Affiliations:</strong>
                      <p className="text-slate-800">IEEE — Computer Action Team (MCECS) — PSU Student Government Senator</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-900 space-y-1">
                      <strong className="text-slate-950 block">Honors:</strong>
                      <p className="text-slate-800">NASA Aerospace Scholar — Louis Stokes Alliance Scholar — Renaissance Scholar</p>
                    </div>
                  </div>
                </div>

                {/* Page footer */}
                <div className="pt-4 border-t border-slate-900 flex justify-between text-[10px] text-slate-700 font-bold">
                  <span>RYNE F. SHELTON — Curriculum Vitae</span>
                  <span>Portland, OR</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
