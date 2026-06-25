"use client";

import React, { useState } from "react";
import {
  FileText,
  Info,
  Bell,
  Download,
  ChevronDown,
  CalendarDays,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

interface ResourceDocument {
  name: string;
  fileName: string;
  size: string;
}

export default function Page() {
  // 🚩 SET THIS TO true TO SHOW THE MAINTENANCE SCREEN
  // 🚩 CHANGE THIS TO false WHEN YOUR BOSSES APPROVE THE PROJECT TO GO LIVE!
  const IS_MAINTENANCE = false;

  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openSubFolder, setOpenSubFolder] = useState<boolean>(false);

  // CORE DOCUMENTS (SITTING OUTSIDE SUB-FOLDERS)
  const CORE_DOCS: ResourceDocument[] = [
    { name: "Event Programme", fileName: "programme.pdf", size: "1.5 MB" },
    { name: "Annual Report 2024/2025", fileName: "annualreport.pdf", size: "4.2 MB" },
    { name: "Resource Report", fileName: "resourcebook.pdf", size: "2.8 MB" },
    { name: "Operational Report", fileName: "operational-report.pdf", size: "1.2 MB" },
  ];

  // CONSOLIDATED PRESENTATIONS FOR A 1-DAY EVENT
  const PRESENTATION_DOCS: ResourceDocument[] = [
    { name: "Session Remarks: Mr Frikkie De Bruin", fileName: "sessionRemarks.pdf", size: "850 KB" },
    { name: "SAPU Message of Support", fileName: "sapu_mesOfSupport.pdf", size: "450 KB" },
    { name: "FEDUSA Message of Support", fileName: "fedusa_mesOfSupport.pdf", size: "450 KB" },
    { name: "COSATU Message of Support", fileName: "cosatu_mesOfSupport.pdf", size: "450 KB" },
    { name: "Keynote Address by Hon. Inkosi Mzamo Buthelezi (MP)", fileName: "keynote.pdf", size: "1.2 MB" },
    { name: "Plenary Session 1: State of the Organisation", fileName: "stateofOrg.pdf", size: "2.1 MB" },
    { name: "Plenary Session 2: Vision, Mission and Core Values", fileName: "vissionandMission.pdf", size: "1.8 MB" },
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

  // 1. MAINTENANCE SCREEN CONDITION
  if (IS_MAINTENANCE) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans relative overflow-x-hidden p-6 text-center">
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('photo.jpeg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[5px]"></div>
        </div>

        <div className="relative z-10 max-w-xl bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-2xl flex flex-col items-center">
          <img src="/logo.png" alt="Logo" className="h-24 md:h-32 w-auto mb-6 object-contain" />
          <h1 className="text-2xl md:text-3xl font-black uppercase italic text-indigo-950 mb-4 tracking-tight">
            AGM Portal Coming Soon
          </h1>
          <p className="text-slate-600 font-semibold text-base md:text-lg leading-relaxed mb-6">
            The 2026 PSCBC Annual General Meeting resource platform is currently being finalized. Documents and media galleries will be available shortly.
          </p>
          <div className="w-full bg-slate-100 p-3 rounded-2xl text-xs md:text-sm border-l-4 border-indigo-600 text-left font-medium text-slate-700">
            <strong>Wi-Fi Setup Ready:</strong> NH_Hotel_Guest • <strong>Password:</strong> NH650
          </div>
        </div>
      </div>
    );
  }

  // 2. LIVE EVENT DASHBOARD VIEW
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
              THE PSCBC WELCOMES YOU TO THE 29th ANNUAL GENERAL MEETING.
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
                2026 ANNUAL GENERAL MEETING
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
                Welcome to the 2026 PSCBC Annual General Meeting. Below you can access official documents, as well as view and download pictures taken during the meeting.  
                <br /><br />
                <span className="bg-slate-100 p-2 rounded-lg text-sm border-l-4 border-indigo-600">
                  <strong>Wi-Fi:</strong> NH_Hotel_Guest • <strong>Password:</strong> NH650
                </span>
              </p>
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
                  
                  {/* Single Consolidated Presentations Subfolder */}
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                    <button 
                      onClick={() => setOpenSubFolder(!openSubFolder)}
                      className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-indigo-700">
                        <CalendarDays size={20} />
                        <span className="font-black uppercase italic tracking-wide text-sm">Meeting Presentations</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform ${openSubFolder ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubFolder && (
                      <div className="p-4 pt-0 space-y-2 border-t border-slate-100">
                        {PRESENTATION_DOCS.map((doc, i) => <DocRow key={i} doc={doc} />)}
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
                      <ImageIcon size={20} className="text-indigo-600" />
                      <span className="font-black text-slate-800 uppercase italic">View AGM Shared Gallery</span>
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