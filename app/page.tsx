"use client";

import React, { useState } from 'react';
import { 
  FileText, Info, Shirt, Bell, 
  MessageSquare, Presentation, Download, Clock, ChevronDown, Send, Mail
} from 'lucide-react';

export default function EventDashboard() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [question, setQuestion] = useState("");

  // --- CONFIGURATION ---
  const YOUR_EMAIL = "viwem@pscbc.org.za"; // REPLACE WITH YOUR ACTUAL EMAIL
  const EVENT_SUBJECT = "PSCBC Strat Planning Question";

  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleEmailSend = () => {
    if (!question.trim()) return alert("Please type a question first!");
    
    // Formats the email link
    const subject = encodeURIComponent(EVENT_SUBJECT);
    const body = encodeURIComponent(question);
    const mailtoUrl = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
    
    // Opens the user's email app
    window.location.href = mailtoUrl;
    setQuestion(""); // Clears the box
  };

  return (
    <div className="min-h-screen text-slate-900 pb-20 font-sans relative overflow-x-hidden text-left">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('photo.jpeg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[3px]"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10">
        
        {/* PUSH ANNOUNCEMENTS */}
        <div className="bg-indigo-700/90 backdrop-blur-xl text-white px-4 py-3 flex items-center justify-center shadow-2xl sticky top-0 z-50 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Bell size={16} className="animate-bounce text-amber-300" />
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-tight text-center">
              Strategic Planning Session is Live
            </span>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
          
          {/* HEADER SECTION WITH LOGO */}
          <header className="mb-10 text-center flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-16 md:h-24 w-auto drop-shadow-2xl object-contain"
                onError={(e) => { (e.target as any).style.display = 'none'; }} 
              />
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                PSCBC EVENTS
              </h1>
            </div>
            
            <div className="inline-block px-5 py-1.5 bg-indigo-600/40 backdrop-blur-md rounded-xl border border-indigo-400/30">
              <p className="text-indigo-100 text-lg md:text-2xl font-black tracking-[0.25em] uppercase italic text-center">
                Strategic Planning Session
              </p>
            </div>
          </header>

          <div className="space-y-5">
            
            {/* ABOUT & PROGRAMME */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 md:p-10 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-indigo-700">
                <Info size={28} />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">About the Event</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 font-semibold text-base md:text-lg">
                Welcome to the official 2026 PSCBC Strategic Planning Session. Access your operational reports, 
                submit questions, and stay updated with live announcements.
              </p>
              <a 
                href="programme.pdf" 
                download 
                className="flex items-center justify-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl hover:bg-black hover:scale-[1.02] transition-all font-black text-base md:text-xl shadow-xl shadow-black/30 w-full"
              >
                <Download size={24} />
                DOWNLOAD PROGRAMME
              </a>
            </section>

            {/* SHIRT COLOURS */}
            <section className="bg-white/95 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-7 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Shirt size={28} className="text-slate-800" />
                <h2 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-slate-900">Shirt Colours</h2>
              </div>
              <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
                <div className="p-3 md:p-6 rounded-3xl bg-blue-50/80 border border-blue-100 shadow-sm">
                  <p className="text-[10px] md:text-sm font-black text-blue-700 uppercase mb-3 tracking-widest text-center">Tue</p>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full shadow-lg border-4 border-white mx-auto"></div>
                  <p className="font-black text-blue-900 text-xs md:text-lg mt-3 uppercase">Blue</p>
                </div>
                <div className="p-3 md:p-6 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-sm">
                  <p className="text-[10px] md:text-sm font-black text-slate-400 uppercase mb-3 tracking-widest text-center">Wed</p>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-slate-200 rounded-full shadow-lg mx-auto"></div>
                  <p className="font-black text-slate-800 text-xs md:text-lg mt-3 uppercase">White</p>
                </div>
                <div className="p-3 md:p-6 rounded-3xl bg-green-50/80 border border-green-100 shadow-sm">
                  <p className="text-[10px] md:text-sm font-black text-green-700 uppercase mb-3 tracking-widest text-center">Thu</p>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full shadow-lg border-4 border-white mx-auto"></div>
                  <p className="font-black text-green-900 text-xs md:text-lg mt-3 uppercase">Green</p>
                </div>
              </div>
            </section>

            {/* DROPDOWNS */}
            <div className="space-y-4">
              
              {/* DOCUMENTS */}
              <div className="overflow-hidden bg-white/95 rounded-3xl shadow-2xl">
                <button onClick={() => toggleTab('docs')} className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white transition-all">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg shadow-orange-500/30"><FileText size={28} /></div>
                    <div className="text-left font-black text-lg md:text-xl text-slate-900 uppercase italic">Documents</div>
                  </div>
                  <ChevronDown size={28} className={`transition-transform duration-500 ${activeTab === 'docs' ? 'rotate-180' : ''}`} />
                </button>
                {activeTab === 'docs' && (
                  <div className="p-6 pt-0 border-t space-y-3 bg-slate-50/50">
                    <a href="/docs/operational-report.pdf" download className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-orange-500 transition-all font-bold">
                      <span className="text-sm md:text-base">Operational Report</span>
                      <Download size={20} className="text-orange-500" />
                    </a>
                  </div>
                )}
              </div>

              {/* EMAIL Q&A FACILITY */}
              <div className="overflow-hidden bg-white/95 rounded-3xl shadow-2xl">
                <button onClick={() => toggleTab('qa')} className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white transition-all">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/30"><Mail size={28} /></div>
                    <div className="text-left font-black text-lg md:text-xl text-slate-900 uppercase italic">Q & A Facility</div>
                  </div>
                  <ChevronDown size={28} className={`transition-transform duration-500 ${activeTab === 'qa' ? 'rotate-180' : ''}`} />
                </button>
                {activeTab === 'qa' && (
                  <div className="p-6 pt-0 border-t bg-slate-50/50">
                    <p className="text-xs font-bold text-slate-400 my-4 uppercase tracking-widest text-left">Your question will be sent via Email to the Secretariat:</p>
                    <textarea 
                      className="w-full p-5 bg-white border-2 border-slate-200 rounded-2xl focus:border-blue-600 outline-none text-base font-medium mb-4" 
                      rows={3} 
                      placeholder="Type your question for the panel here..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    ></textarea>
                    <button 
                      onClick={handleEmailSend}
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl transition-all active:scale-95 uppercase"
                    >
                      <Send size={20} /> Submit Question
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}