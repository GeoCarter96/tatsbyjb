'use client'
import React, { useState } from 'react';
import { 
  Instagram, Mail, Calendar, Skull, ShieldAlert, 
  BadgeDollarSign, FileText, Zap, X, Quote, 
  User, Crosshair, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- Modal Component Definition ---
interface ModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative p-6 bg-white shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, rotate: -3 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img src={selectedImage} alt="Enlarged Clinical Work" className="w-full h-auto object-contain" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#880808] text-white p-2 hover:bg-black transition-colors"
          >
            <X size={24} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function BloodyWhiteGrungePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, rot: '-rotate-3', img: '/tat1.png' },
    { id: 2, rot: 'rotate-2', img: '/tat2.png' },
    { id: 3, rot: '-rotate-1', img: '/tat3.png' }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono selection:bg-[#880808] selection:text-white overflow-x-hidden">
      
     
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com')]" />

   
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[#f8f8f8]">
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 border-8 border-black bg-white flex items-center justify-center mb-8 rotate-3 shadow-[15px_15px_0px_#880808]">
          <div className="text-center p-4">
            <img 
                src="tatslogo.png" 
                alt="Studio Logo" 
                className="mx-auto mb-2 w-30 h-40 object-contain" 
            />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-4">
            Quality <span className="text-[#880808] italic">First</span>
          </h2>
          <p className="max-w-xl mx-auto font-bold text-gray-500 uppercase text-xs tracking-[0.4em]">
            Traditional Art• Sterile Environment• North Philly
          </p>
        </div>
      </section>

      {/* --- MISSION & BIO SECTION --- */}
      <section className="py-24 bg-white border-t-8 border-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Mission Column */}
          <div className="text-left">
            <div className="inline-block mb-6 bg-[#880808] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
           SHOP OPEN MON - SUN
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Built on <span className="bg-black text-white px-2">precision</span>,<br /> 
             Detailed <br />
              and <span className="text-[#880808]">value driven</span>.
            </h3>
            <p className="text-xs font-bold uppercase text-gray-400 leading-relaxed max-w-sm tracking-widest">
"To transform personal stories into timeless art through precision, creativity, and a commitment to safe, professional craftsmanship".
            </p>
          </div>

          {/* Artist Bio Column */}
          <div className="relative p-8 border-4 border-black bg-[#f8f8f8] shadow-[10px_10px_0px_#880808]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white">
                <User size={32} />
              </div>
              <div>
                <h4 className="font-black uppercase text-xl leading-none">JB- Lead Artist</h4>
                <p className="text-[10px] font-black text-[#880808] uppercase mt-1 tracking-tighter">Specialization: Realism</p>
              </div>
            </div>
            
            <div className="space-y-4 text-[11px] font-bold uppercase leading-tight text-gray-600 mb-8">
              <p className="flex gap-2">
                <Crosshair size={14} className="shrink-0 text-black" />
               For JB, tattooing is more than just ink—it's a collaborative journey to bring a client's vision to life on their personal canvas.
              </p>
              <p className="border-l-4 border-[#880808] pl-3 italic text-black">
                 "At Tats By JB, we foster a creative hub where diverse voices are celebrated. Our mission is to provide an inclusive, safe space for both artists and clients to collaborate on unique masterpieces".
              </p>
            </div>

            {/* CALL TO ACTION BUTTON */}
            <Link 
              href="/booking" 
              className="group flex items-center justify-between bg-black text-white p-4 font-black uppercase text-xs tracking-widest hover:bg-[#880808] transition-all"
            >
              <span>Initiate Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Status Stamp */}
            <div className="absolute -top-4 -right-4 bg-white border-2 border-black p-2 -rotate-12 shadow-sm">
                <p className="text-[8px] font-black uppercase leading-none">North Philly<br/>Verified Tech</p>
            </div>
          </div>
        </div>

        {/* Background "Ghost" text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none uppercase">
          TatsByJB
        </div>
      </section>

      {/* Clinical Gallery Section */}
      <section id="gallery" className="py-24 bg-[#ebebeb] relative overflow-hidden border-y-4 border-black">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h3 className="text-4xl font-black uppercase inline-block bg-black text-white px-4 py-2 -rotate-1">Artistic Evidence</h3>
            <p className="font-bold text-[#880808] mt-2 uppercase text-xs">You Could Be Featured Next  </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {images.map((item) => (
              <motion.div 
                key={item.id} 
                className={`group relative bg-white p-4 pb-12 shadow-2xl transition-transform hover:scale-105 hover:z-30 cursor-pointer ${item.rot}`}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(item.img)}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#880808] rounded-full shadow-inner z-10" />
                <div className="aspect-square bg-gray-200 overflow-hidden border border-gray-100 mb-4">
                  <img src={item.img} alt="Clinical Work" className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="font-bold text-[10px] uppercase text-gray-400 flex justify-between">
                  <span>REF_NO: 00{item.id}</span>
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
