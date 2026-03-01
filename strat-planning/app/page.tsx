"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import { 
  FileText, Info, Bell, 
  Download, ChevronDown, Send, MessageSquare, User
} from 'lucide-react';

import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ResourceDocument {
  name: string;
  fileName: string;
  size: string;
}

interface LiveQuestion {
  id: string;
  user: string;
  text: string;
  createdAt?: Timestamp | null;
  timestamp?: string;
}

export default function EventDashboard() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [newQuestion, setNewQuestion] = useState<string>("");
  
  // Live questions come from Firestore (real-time)
  const [publicQuestions, setPublicQuestions] = useState<LiveQuestion[]>([]);
const DOCUMENTS_LIST: ResourceDocument[] = [
    { name: "Operational Report", fileName: "operational-report.pdf", size: "1.2 MB" },
    { name: "Financial Overview", fileName: "finance.pdf", size: "900 KB" },
    { name: "Strategic Plan 2026", fileName: "strat-plan.pdf", size: "3.5 MB" },
  ];

  // Firestore real-time listener (shared across all users)
  useEffect(() => {
    const q = query(collection(db, "questions"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const questions: LiveQuestion[] = snapshot.docs.map((doc) => {
        const data = doc.data() as {
          user?: string;
          text?: string;
          createdAt?: Timestamp | null;
        };

        const createdAt = data.createdAt ?? null;

        const timestamp =
          createdAt && createdAt.toDate
            ? createdAt.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            : "";

        return {
          id: doc.id,
          user: data.user ?? "Delegate",
          text: data.text ?? "",
          createdAt,
          timestamp,
        };
      });

      setPublicQuestions(questions);
    });

    return () => unsubscribe();
  }, []);


  const handlePostQuestion = async () => {
    if (!newQuestion.trim()) return;

    try {
      await addDoc(collection(db, "questions"), {
        user: "Delegate",
        text: newQuestion.trim(),
        createdAt: serverTimestamp(),
      });

      setNewQuestion("");
    } catch (err) {
      console.error("Failed to post question:", err);
      alert("Could not post your question. Please try again.");
    }
  };

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
              Strategic Planning Session is Live • Post your questions below
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
                Use this portal for live updates and official documents. All questions posted in the Live Q&A are public to all delegates.
              </p>
            </section>

            {/* LIVE Q&A SECTION */}
            <section className="bg-white/95 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-2xl overflow-hidden">
              <div className="p-7 md:p-10 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center gap-3 mb-6 text-blue-600">
                  <MessageSquare size={28} />
                  <h2 className="text-2xl md:text-3xl font-black uppercase italic">Live Public Q&A</h2>
                </div>

                {/* Question Input Area */}
                <div className="bg-slate-100 p-4 rounded-3xl mb-8 border-2 border-slate-200">
                  <textarea 
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-blue-600 outline-none text-base font-medium mb-3" 
                    rows={2} 
                    placeholder="Ask something public..."
                    value={newQuestion}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewQuestion(e.target.value)}
                  ></textarea>
                  <button 
                    onClick={handlePostQuestion}
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-95 uppercase italic"
                  >
                    <Send size={20} /> Post Question
                  </button>
                </div>

                {/* Live Feed */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Live Stream of Questions:</p>
                  {publicQuestions.map((q) => (
                    <div key={q.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                            <User size={14} />
                          </div>
                          <span className="font-black text-xs uppercase text-slate-500">{q.user}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">{q.timestamp}</span>
                      </div>
                      <p className="text-slate-800 font-bold leading-tight">{q.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DOCUMENTS DROPDOWN */}
            <div className="overflow-hidden bg-white/95 rounded-3xl shadow-2xl">
              <button 
                onClick={() => setActiveTab(activeTab === 'docs' ? null : 'docs')} 
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg">
                    <FileText size={28} />
                  </div>
                  <div className="text-left font-black text-lg md:text-xl text-slate-900 uppercase italic">Documents</div>
                </div>
                <ChevronDown size={28} className={`transition-transform ${activeTab === 'docs' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeTab === 'docs' && (
                <div className="p-6 pt-0 border-t space-y-3 bg-slate-50/50">
                  {DOCUMENTS_LIST.map((doc, index) => (
                    <a key={index} href={`/docs/${doc.fileName}`} download className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-orange-500 transition-all">
                      <div className="flex flex-col text-left">
                        <span className="font-black text-slate-800 uppercase italic">{doc.name}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-black">{doc.size}</span>
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