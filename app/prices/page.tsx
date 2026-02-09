'use client'
import React from 'react';
import { BadgeDollarSign, ArrowLeft, Receipt, Zap, Info } from 'lucide-react';
import Link from 'next/link';

export default function PricesPage() {
  const priceList = [
    { item: "Tap Out", price: "$350-$950", desc: "Pricing is based on hours required ( between 2hrs - 6hrs ) 1-2 people are allowed to join" },
    { item: "Quarter Sleeve", price: "$280+", desc: "Starter rate for custom multi-session pieces" },
    { item: "Half Sleeve", price: "$350+", desc: "Starter rate for custom multi-session pieces" },
    { item: "Top Sleeve", price: "$550+", desc: "Starter rate for custom multi-session pieces" },
    { item: " Hand Tattoo", price: "$250+", desc: "Starter rate for custom multi-session pieces" },
    { item: "Side Neck Tattoo", price: "$250+", desc: "Starter rate for custom multi-session pieces" },
    { item: "Leg Quarter Sleeve", price: "$500+", desc: "Starter rate for custom multi-session pieces" },
    { item: "Small Tattoos", price: "$50+", desc: "Starter rate for custom multi-session pieces" },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono selection:bg-[#880808] selection:text-white overflow-x-hidden relative">
     
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com')]" />

     
      <div className="p-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 font-black uppercase text-xs hover:text-[#880808] transition-colors">
          <ArrowLeft size={16} />  Back 
        </Link>
      </div>

      <section className="py-12 px-4 flex flex-col items-center justify-center relative">
       
        <div className="w-full max-w-2xl bg-white border-4 border-black p-8 md:p-12 shadow-[20px_20px_0px_#880808] relative">
          
          <div className="flex justify-between items-start mb-12 border-b-4 border-black pb-6">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tighter">Rate Card</h1>
              <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Billing Dept // Tats By JB</p>
            </div>
            <BadgeDollarSign size={40} className="text-[#880808]" />
          </div>

         
          <div className="space-y-10">
            {priceList.map((p, i) => (
              <div key={i} className="group relative">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-[#880808] mb-1">ITEM_CODE: 00{i + 1}</span>
                    <h3 className="font-black text-xl uppercase tracking-tight group-hover:translate-x-2 transition-transform">{p.item}</h3>
                  </div>
                  <span className="font-black text-3xl text-black tabular-nums">{p.price}</span>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed max-w-xs italic">
                  {p.desc}
                </p>
                <div className="w-full h-[2px] bg-gray-100 mt-4 group-hover:bg-black transition-colors" />
              </div>
            ))}
          </div>

         
          <div className="mt-16 bg-gray-50 p-6 border-2 border-black border-dashed">
            <h4 className="flex items-center gap-2 font-black uppercase text-xs mb-4">
              <Info size={14} className="text-[#880808]" /> Billing Disclosures
            </h4>
            <ul className="space-y-2 text-[9px] font-bold uppercase text-gray-500 leading-tight">
              <li className="flex gap-2">• Booking Fees require a $20 deposit.</li>
              <li className="flex gap-2">• Pricing includes custom design and sterile supply fees.</li>
              <li className="flex gap-2">• Cash is preferred. Card processing through Cash App or Apple Pay.</li>
              <li className="flex gap-2">• You will be sent the address afterwards and reminders.</li>
            </ul>
          </div>

         
          <div className="mt-12 flex justify-center">
            <Link href="/booking" className="bg-black text-white px-10 py-4 font-black uppercase tracking-tighter hover:bg-[#880808] transition-all flex items-center gap-3 w-full justify-center">
              <Receipt size={18} /> Request Formal Quote
            </Link>
          </div>

          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
            <h2 className="text-[12rem] font-black uppercase -rotate-12">PAID</h2>
          </div>
        </div>

        <p className="mt-12 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">Tats By JB © 2026 Philadelphia, PA</p>
      </section>
    </div>
  );
}
