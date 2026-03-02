"use client";

import React, { useState } from "react";
import {
  FileText,
  Info,
  Bell,
  Download,
  ChevronDown,
  Shirt,
} from "lucide-react";

interface ResourceDocument {
  name: string;
  fileName: string;
  size: string;
}

export default function EventDashboard() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // UPDATED LIST WITH YOUR NEW REPORTS
  const DOCUMENTS_LIST: ResourceDocument[] = [
    { name: "Event Programme", fileName: "programme.pdf", size: "1.5 MB" },
    { name: "Annual Report 2024/2025", fileName: "annualreport.pdf", size: "4.2 MB" },
    { name: "Resource Report", fileName: "resourcebook.pdf", size: "2.8 MB" },
    { name: "Operational Report", fileName: "operational-report.pdf", size: "1.2 MB" },
  ];

  return (
    <div className="min-h-screen text-slate-900 pb-20 font-sans relative overflow-x-hidden text-left">
      {/* BACKGROUND LAYER */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('photo.jpeg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[3px]"></div>
      </div>

      <div className="relative z-10">
        {/* TOP ANNOUNCEMENT BAR */}
        <div className="bg-indigo-700/90 backdrop-blur-xl text-white px-4 py-3 flex items-center justify-center shadow-2xl sticky top-0 z-50 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Bell size={16} className="animate-bounce text-amber-300" />
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-tight text-center">
              Strategic Planning Session is Live • Ask your questions in the Slido below
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
          {/* HEADER SECTION */}
          <header className="mb-10 text-center flex flex-col items-center justify-center gap-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-32 md:h-48 w-auto drop-shadow-2xl object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] text-center">
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
              </p>
            </section>

            {/* DRESS CODE SECTION */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 md:p-10 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 text-orange-600">
                <Shirt size={28} />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">Dress Code</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-3xl border-2 border-slate-200">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-2">Day 1</span>
                  <div className="text-2xl mb-2">🇿🇦</div>
                  <span className="text-xs font-bold uppercase italic leading-tight">Party Colours</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-3xl border-2 border-slate-200">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-2">Day 2</span>
                  <div className="w-8 h-8 rounded-full shadow-inner mb-2 bg-green-600 border-2 border-white"></div>
                  <span className="text-xs font-bold uppercase italic">Green</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-3xl border-2 border-slate-200">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-2">Day 3</span>
                  <div className="w-8 h-8 rounded-full shadow-inner mb-2 bg-black border-2 border-white"></div>
                  <span className="text-xs font-bold uppercase italic">Black</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-indigo-600 rounded-3xl shadow-lg text-white">
                  <span className="text-[10px] font-black uppercase text-indigo-200 mb-2">Cocktail</span>
                  <div className="w-8 h-8 rounded-full shadow-inner mb-2 bg-white border-2 border-indigo-300"></div>
                  <span className="text-xs font-bold uppercase italic">White</span>
                </div>
              </div>
            </section>

            {/* SLIDO Q&A SECTION */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-2xl overflow-hidden">
              <div className="p-1 bg-slate-200">
                <iframe 
                  src="https://app.sli.do/event/98R4jLXjEZ7jAAp7bfESBA" 
                  height="700px" 
                  width="100%" 
                  frameBorder="0" 
                  style={{ minHeight: "600px", borderRadius: "2rem" }} 
                  allow="clipboard-write" 
                  title="Slido"
                ></iframe>
              </div>
            </section>

            {/* DOCUMENTS DROPDOWN */}
            <div className="overflow-hidden bg-white/95 rounded-3xl shadow-2xl">
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
                <ChevronDown
                  size={28}
                  className={`transition-transform ${activeTab === "docs" ? "rotate-180" : ""}`}
                />
              </button>

              {activeTab === "docs" && (
                <div className="p-6 pt-0 border-t space-y-3 bg-slate-50/50">
                  {DOCUMENTS_LIST.map((doc, index) => (
                    <a
                      key={index}
                      href={`/docs/${doc.fileName}`}
                      download
                      className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-orange-500 transition-all"
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-black text-slate-800 uppercase italic">
                          {doc.name}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase font-black">
                          {doc.size}
                        </span>
                      </div>
                      <Download size={20} className="text-orange-500" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}