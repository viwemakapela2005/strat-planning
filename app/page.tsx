"use client";

import React, { useState } from 'react';
import { 
  FileText, Info, Bell, 
  Download, ChevronDown
} from 'lucide-react';

// TypeScript Interface for files
interface ResourceDocument {
  name: string;
  fileName: string;
  size: string;
}

export default function EventDashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // --- AGM DOCUMENTS LIBRARY ---
  const DOCUMENTS_LIST: ResourceDocument[] = [
    { name: "Operational Report", fileName: "operational-report.pdf", size: "1.2 MB" },
    { name: "Financial Overview", fileName: "finance.pdf", size: "900 KB" },
    { name: "Previous AGM Minutes", fileName: "agm-minutes-2025.pdf", size: "1.5 MB" },
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
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-tight">
              PSCBC Annual General Meeting 2026 is Live
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
          
          {/* HEADER */}
          <header className="mb-10 text-center flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-16 md:h-24 w-auto drop-shadow-2xl object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                }} 
              />
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                PSCBC EVENTS
              </h1>
            </div>
            
            <div className="inline-block px-5 py-1.5 bg-indigo-600/40 backdrop-blur-md rounded-xl border border-indigo-400/30">
              <p className="text-indigo-100 text-lg md:text-2xl font-black tracking-[0.25em] uppercase italic">
                Annual General Meeting (AGM)
              </p>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <div className="space-y-5">
            
            {/* ABOUT & THE PROGRAMME DOWNLOAD */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 md:p-10 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-indigo-700">
                <Info size={28} />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">About the Event</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 font-semibold text-base md:text-lg">
                Welcome to the official 2026 PSCBC Annual General Meeting. Use the portal below to quickly access and download critical official resources and session schedules directly to your device.
              </p>
              
              {/* THE PROGRAMME DIRECT DOWNLOAD BUTTON */}
              <div className="space-y-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Official Schedule:</p>
                <a 
                  href="/docs/programme.pdf" 
                  download="PSCBC_AGM_Programme_2026.pdf" 
                  className="flex items-center justify-between p-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl transition-all shadow-lg group active:scale-95"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <FileText size={24} />
                    </div>
                    <div>
                      <p className="font-black uppercase italic text-lg leading-none">AGM Programme</p>
                      <p className="text-indigo-200 text-xs mt-1 font-bold uppercase tracking-wider">Download PDF • Click to Save</p>
                    </div>
                  </div>
                  <Download size={28} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </section>

            {/* RESOURCE DOCUMENTS DROPDOWN */}
            <div className="overflow-hidden bg-white/95 rounded-3xl shadow-2xl">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg shadow-orange-500/30">
                    <FileText size={28} />
                  </div>
                  <div className="text-left font-black text-lg md:text-xl text-slate-900 uppercase italic">Resource Documents</div>
                </div>
                <ChevronDown size={28} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOpen && (
                <div className="p-6 pt-0 border-t space-y-3 bg-slate-50/50">
                  {DOCUMENTS_LIST.map((doc, index) => (
                    <a 
                      key={index}
                      href={`/docs/${doc.fileName}`} 
                      download={doc.fileName}
                      className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-orange-500 transition-all group"
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-black text-slate-800 uppercase italic">{doc.name}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{doc.size} • Download</span>
                      </div>
                      <Download size={20} className="text-orange-500 group-hover:scale-125 transition-transform" />
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div> {/* Closing Main Content Area */}
        </main>
      </div>
    </div> 
  );
}