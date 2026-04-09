"use client";

import React, { useState } from "react";
import {
  FileText,
  Info,
  Bell,
  Download,
  ChevronDown,
  Shirt,
  CalendarDays,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

interface ResourceDocument {
  name: string;
  fileName: string;
  size: string;
}

export default function EventDashboard() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openSubFolder, setOpenSubFolder] = useState<string | null>(null);

  // CORE DOCUMENTS (SITTING OUTSIDE SUB-FOLDERS)
  const CORE_DOCS: ResourceDocument[] = [
    { name: "Event Programme", fileName: "programme.pdf", size: "1.5 MB" },
    { name: "Annual Report 2024/2025", fileName: "annualreport.pdf", size: "4.2 MB" },
    { name: "Resource Report", fileName: "resourcebook.pdf", size: "2.8 MB" },
    { name: "Operational Report", fileName: "operational-report.pdf", size: "1.2 MB" },
  ];

  const DAY1_DOCS: ResourceDocument[] = [
    { name: "Session Remarks: Mr Frikkie De Bruin", fileName: "sessionRemarks.pdf", size: "850 KB" },
    { name: "SAPU Message of Support", fileName: "sapu_mesOfSupport.pdf", size: "450 KB" },
    { name: "FEDUSA Message of Support", fileName: "fedusa_mesOfSupport.pdf", size: "450 KB" },
    { name: "COSATU Message of Support", fileName: "cosatu_mesOfSupport.pdf", size: "450 KB" },
    { name: "Keynote Address by Hon. Inkosi Mzamo Buthelezi (MP)", fileName: "keynote.pdf", size: "1.2 MB" },
    { name: "Plenary Session 1: State of the Organisation", fileName: "stateofOrg.pdf", size: "2.1 MB" },
    { name: "Plenary Session 2: Vision, Mission and Core Values", fileName: "vissionandMission.pdf", size: "1.8 MB" },
  ];

  const DAY2_DOCS: ResourceDocument[] = [
    { name: "Plenary Session 3: Protecting Collective Bargaining", fileName: "protectingCol_Bar.pdf", size: "1.5 MB" },
    { name: "Report: Mr Frikkie De Bruin", fileName: "protectingReport.pdf", size: "900 KB" },
    { name: "Labour: Thobja Monyai", fileName: "protectingLabour.pdf", size: "750 KB" },
    { name: "Employer: Ms Mmapitso Mashele", fileName: "protectingEmployer.pdf", size: "820 KB" },
    { name: "Plenary Session 4: Embedding Good Governance & Public Service Professionalisation", fileName: "embeddedGoodGovernance.pdf", size: "1.4 MB" },
    { name: "Labour: Embedding Good Governance & Public Service Professionalisation", fileName: "labourEmbedding.pdf", size: "890 KB" },
    { name: "Employer: Embedding Good Governance & Public Service Professionalisation", fileName: "employerEmbedding.pdf", size: "910 KB" },
    { name: "Plenary Session 5: Workforce Well-Being & Transformation Report", fileName: "reportWellBeing.pdf", size: "1.1 MB" },
    { name: "Employer: Workforce Well-Being & Transformation", fileName: "employerWellbeing.pdf", size: "850 KB" },
    { name: "Labour: Workforce Well-Being & Transformation", fileName: "labourWellbeing.pdf", size: "780 KB" },
  ];

  const DAY3_DOCS: ResourceDocument[] = [
    { name: "Report by GS: Future of Work, Technology and Digital Transformation", fileName: "gsFutureOfWork.pdf", size: "1.3 MB" },
    { name: "Labour: Future of Work, Technology and Digital Transformation", fileName: "labFutureOfWork.pdf", size: "880 KB" },
    { name: "Employer: Future of Work, Technology and Digital Transformation", fileName: "empFutureOfWork.pdf", size: "920 KB" },
  ];

  const DocRow = ({ doc }: { doc: ResourceDocument }) => (
    <a
      href={`/docs/${doc.fileName}`}
      download
      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-md transition-all group"
    >
      <div className="flex flex-col text-left">
        <span className="font-bold text-slate-800 text-sm uppercase italic group-hover:text-orange-600 transition-colors">
          {doc.name}
        </span>
        <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          PDF • {doc.size}
        </span>
      </div>
      <Download size={18} className="text-orange-500 group-hover:scale-110 transition-transform" />
    </a>
  );

  return (
    <div className="min-h-screen text-slate-900 pb-20 font-sans relative overflow-x-hidden text-left">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('photo.jpeg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[3px]"></div>
      </div>

      <div className="relative z-10">
        <div className="bg-indigo-700/90 backdrop-blur-xl text-white px-4 py-3 flex items-center justify-center shadow-2xl sticky top-0 z-50 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Bell size={16} className="animate-bounce text-amber-300" />
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-tight text-center">
              PSCBC Strategic Planning Session is over • Access documents and your pictures below. Thank you
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
          <header className="mb-10 text-center flex flex-col items-center justify-center gap-6">
            <img src="/logo.png" alt="Logo" className="h-32 md:h-48 w-auto drop-shadow-2xl object-contain" />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              PSCBC EVENTS
            </h1>
            <div className="inline-block px-5 py-1.5 bg-indigo-600/40 backdrop-blur-md rounded-xl border border-indigo-400/30">
              <p className="text-indigo-100 text-lg md:text-2xl font-black tracking-[0.25em] uppercase italic">
                Strategic Planning Session
              </p>
            </div>
          </header>

          <div className="space-y-5">
            {/* ABOUT SECTION */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 md:p-10 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-indigo-700">
                <Info size={28} />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">About</h2>
              </div>
              <p className="text-slate-700 leading-relaxed font-semibold text-base md:text-lg">
                Welcome to the Strategic Planning Session portal. Below you can participate in the Live Q&A, check the dress code, and access official documents. 
                <br /><br />
                <span className="bg-slate-100 p-2 rounded-lg text-sm border-l-4 border-indigo-600">
                  <strong>Wi-Fi:</strong> Radisson_Guest • <strong>Option:</strong> Conferencing • <strong>Network:</strong> Radisson_ICC • <strong>Password:</strong> ICC650
                </span>
              </p>
            </section>

            {/* DRESS CODE */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 md:p-10 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 text-orange-600">
                <Shirt size={28} />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">Dress Code</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-3xl border border-slate-200">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-2">Day 1</span>
                  <div className="text-2xl mb-2">🇿🇦</div>
                  <span className="text-xs font-bold uppercase italic leading-tight">Party Colours</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-3xl border border-slate-200">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-2">Day 2</span>
                  <div className="w-8 h-8 rounded-full shadow-inner mb-2 bg-green-600 border-2 border-white"></div>
                  <span className="text-xs font-bold uppercase italic">Green</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-3xl border border-slate-200">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-2">Day 3</span>
                  <div className="w-8 h-8 rounded-full shadow-inner mb-2 bg-black border-2 border-white"></div>
                  <span className="text-xs font-bold uppercase italic">Black</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-indigo-600 rounded-3xl shadow-lg text-white border border-indigo-400">
                  <span className="text-[10px] font-black uppercase text-indigo-200 mb-2">Cocktail</span>
                  <div className="w-8 h-8 rounded-full shadow-inner mb-2 bg-white"></div>
                  <span className="text-xs font-bold uppercase italic">White</span>
                </div>
              </div>
            </section>

            {/* SLIDO */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-2xl overflow-hidden">
              <div className="p-1 bg-slate-200">
                <iframe src="https://app.sli.do/event/98R4jLXjEZ7jAAp7bfESBA" height="700px" width="100%" frameBorder="0" style={{ minHeight: "600px", borderRadius: "2rem" }} allow="clipboard-write" title="Slido"></iframe>
              </div>
            </section>

            {/* DOCUMENTS SECTION */}
            <div className="overflow-hidden bg-white/95 rounded-[2.5rem] shadow-2xl border border-white/40">
              <button
                onClick={() => setActiveTab(activeTab === "docs" ? null : "docs")}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg">
                    <FileText size={28} />
                  </div>
                  <div className="text-left font-black text-lg md:text-xl text-slate-900 uppercase italic">
                    Documents
                  </div>
                </div>
                <ChevronDown size={28} className={`transition-transform duration-300 ${activeTab === "docs" ? "rotate-180" : ""}`} />
              </button>

              {activeTab === "docs" && (
                <div className="p-6 pt-0 space-y-4 bg-slate-50/50">
                  <div className="space-y-2">
                    {CORE_DOCS.map((doc, i) => <DocRow key={i} doc={doc} />)}
                  </div>
                  <hr className="border-slate-200" />
                  
                  {/* Day 1 Subfolder */}
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                    <button 
                      onClick={() => setOpenSubFolder(openSubFolder === 'day1' ? null : 'day1')}
                      className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-indigo-700">
                        <CalendarDays size={20} />
                        <span className="font-black uppercase italic tracking-wide text-sm">Day 1 Presentations</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform ${openSubFolder === 'day1' ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubFolder === 'day1' && (
                      <div className="p-4 pt-0 space-y-2 border-t border-slate-100">
                        {DAY1_DOCS.map((doc, i) => <DocRow key={i} doc={doc} />)}
                      </div>
                    )}
                  </div>

                  {/* Day 2 Subfolder */}
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                    <button 
                      onClick={() => setOpenSubFolder(openSubFolder === 'day2' ? null : 'day2')}
                      className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-indigo-700">
                        <CalendarDays size={20} />
                        <span className="font-black uppercase italic tracking-wide text-sm">Day 2 Presentations</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform ${openSubFolder === 'day2' ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubFolder === 'day2' && (
                      <div className="p-4 pt-0 space-y-2 border-t border-slate-100">
                        {DAY2_DOCS.map((doc, i) => <DocRow key={i} doc={doc} />)}
                      </div>
                    )}
                  </div>

                  {/* Day 3 Subfolder */}
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                    <button 
                      onClick={() => setOpenSubFolder(openSubFolder === 'day3' ? null : 'day3')}
                      className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-indigo-700">
                        <CalendarDays size={20} />
                        <span className="font-black uppercase italic tracking-wide text-sm">Day 3 Presentations</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform ${openSubFolder === 'day3' ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubFolder === 'day3' && (
                      <div className="p-4 pt-0 space-y-2 border-t border-slate-100">
                        {DAY3_DOCS.map((doc, i) => <DocRow key={i} doc={doc} />)}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* PICTURES SECTION */}
            <div className="overflow-hidden bg-white/95 rounded-[2.5rem] shadow-2xl border border-white/40">
              <button
                onClick={() => setActiveTab(activeTab === "pics" ? null : "pics")}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg">
                    <ImageIcon size={28} />
                  </div>
                  <div className="text-left font-black text-lg md:text-xl text-slate-900 uppercase italic">
                    Pictures
                  </div>
                </div>
                <ChevronDown size={28} className={`transition-transform duration-300 ${activeTab === "pics" ? "rotate-180" : ""}`} />
              </button>

              {activeTab === "pics" && (
                <div className="p-6 pt-0 space-y-3 bg-slate-50/50">
                  <a
                    href="https://photos.app.goo.gl/55pm9Vhjg8Bc2L8P7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-indigo-500 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <CalendarDays size={20} className="text-indigo-600" />
                      <span className="font-black text-slate-800 uppercase italic">Day 1 Pictures</span>
                    </div>
                    <ExternalLink size={20} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://photos.app.goo.gl/5UwbvFPdjqSEjWau6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-indigo-500 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <CalendarDays size={20} className="text-indigo-600" />
                      <span className="font-black text-slate-800 uppercase italic">Day 2 Pictures</span>
                    </div>
                    <ExternalLink size={20} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://photos.app.goo.gl/SR3x3BipNk9xC6Pc9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-indigo-500 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <CalendarDays size={20} className="text-indigo-600" />
                      <span className="font-black text-slate-800 uppercase italic">Day 3 Pictures</span>
                    </div>
                    <ExternalLink size={20} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}