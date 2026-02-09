'use client'
import React from 'react';
import { FileText, ShieldAlert, ArrowLeft, Scale, AlertTriangle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PolicyPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono selection:bg-[#880808] selection:text-white overflow-x-hidden relative">
      
     
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com')]" />

     
      <div className="p-8 relative z-10 flex justify-between items-center border-b-2 border-black bg-white/80 backdrop-blur-sm sticky top-0">
        <Link href="/" className="inline-flex items-center gap-2 font-black uppercase text-xs hover:text-[#880808] transition-colors">
          <ArrowLeft size={16} />  Back 
        </Link>
        
      </div>

      <section className="py-16 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-white border-2 border-black p-8 md:p-16 relative shadow-[20px_20px_0px_#ebebeb]">
          
         
          <div className="border-b-8 border-black pb-8 mb-12">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Shop <span className="text-[#880808]">Policy</span>
            </h1>
            <p className="mt-4 font-bold text-gray-500 uppercase text-xs tracking-widest flex items-center gap-2">
              <Scale size={14} /> Legal Requirements & Studio Standards
            </p>
          </div>

          
          <div className="space-y-12">
            
           
            <div className="relative pl-12">
              <span className="absolute left-0 top-0 text-4xl font-black text-gray-200">01</span>
              <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                <ShieldAlert className="text-[#880808]" size={20} /> Age & Identification
              </h3>
              <p className="text-sm font-bold uppercase leading-relaxed text-gray-600">
                18+ Photo ID Required for all procedures. No exceptions. We do not accept parental consent for minors. Valid Government-issued ID only. 
              </p>
            </div>

            
            <div className="relative pl-12">
              <span className="absolute left-0 top-0 text-4xl font-black text-gray-200">02</span>
              <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                <AlertTriangle className="text-[#880808]" size={20} /> Deposit Protocol
              </h3>
              <p className="text-sm font-bold uppercase leading-relaxed text-gray-600">
                Non-refundable deposits are mandatory for all appointments. This amount covers design time and secures your slot. Deposits are NOT apart of the tattoo price. NO DEPOSIT = NO SERVICE. color is $30 each. we do not provide numbing cream. 
              </p>
            </div>

           
            <div className="relative pl-12">
              <span className="absolute left-0 top-0 text-4xl font-black text-gray-200">03</span>
              <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                <Clock className="text-[#880808]" size={20} /> Scheduling
              </h3>
              <p className="text-sm font-bold uppercase leading-relaxed text-gray-600">
                Rescheduling fee is $30. Failure to provide notice results in deposit loss. No walk ins , by appoinment only. after 20 min wait, appointment is canceled.
              </p>
            </div>

            
            <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-200">
              <div className="flex items-start gap-4 bg-gray-50 p-6">
                <FileText size={24} className="shrink-0 opacity-20" />
                <p className="text-[10px] font-bold uppercase text-gray-400 leading-tight italic">
                  Tats By JB reserves the right to refuse service to anyone for any reason, specifically regarding health concerns, sobriety, or disrespectful conduct. Sterile environment standards are non-negotiable.
                </p>
              </div>
            </div>

          </div>

          
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#880808] rounded-full flex items-center justify-center -rotate-12 bg-white hidden md:flex">
             <div className="text-[#880808] font-black text-center text-[10px] uppercase leading-none px-2">
                Official<br/>Studio<br/>Bylaws<br/>2026
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
