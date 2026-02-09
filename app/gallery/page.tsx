'use client'
import React, { useState } from 'react';
import { ArrowLeft, Maximize2, X, Instagram, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Sleeves', 'Neck Tats', 'Hand Tats', 'Chest Tats', 'Back Tats', 'Face Tats', 'Belly Tats'];
  
  const tattoos = [
    { id: 1, category: 'Sleeves', img: '/sleeve1.png', span: 'row-span-1' },
    { id: 2, category: 'Sleeves', img: '/sleeve2.png', span: 'row-span-1' },
    { id: 3, category: 'Sleeves', img: '/sleeve3.png', span: 'row-span-1' },
    { id: 4, category: 'Sleeves', img: '/sleeve4.png', span: 'row-span-1' },
    { id: 5, category: 'Sleeves', img: '/sleeve5.png', span: 'row-span-1' },
    { id: 6, category: 'Neck Tats', img: '/neck1.png', span: 'row-span-1' },
    { id: 7, category: 'Neck Tats', img: '/neck2.png', span: 'row-span-1' },
    { id: 8, category: 'Neck Tats', img: '/neck3.png', span: 'row-span-1' },
    { id: 9, category: 'Neck Tats', img: '/neck4.png', span: 'row-span-1' },
    { id: 10, category: 'Neck Tats', img: '/neck5.png', span: 'row-span-1' },
    { id: 11, category: 'Neck Tats', img: '/neck6.png', span: 'row-span-1' },
    { id: 12, category: 'Hand Tats', img: '/hand1.png', span: 'row-span-1' },
    { id: 13, category: 'Hand Tats', img: '/hand2.png', span: 'row-span-1' },
    { id: 14, category: 'Hand Tats', img: '/hand3.png', span: 'row-span-1' },
    { id: 15, category: 'Hand Tats', img: '/hand4.png', span: 'row-span-1' },
    { id: 16, category: 'Hand Tats', img: '/hand5.png', span: 'row-span-1' },
    { id: 17, category: 'Chest Tats', img: '/chest1.png', span: 'row-span-1' },
    { id: 18, category: 'Chest Tats', img: '/chest2.png', span: 'row-span-1' },
    { id: 19, category: 'Chest Tats', img: '/chest3.png', span: 'row-span-1' },
    { id: 20, category: 'Back Tats', img: '/back1.png', span: 'row-span-1' },
    { id: 21, category: 'Back Tats', img: '/back2.png', span: 'row-span-1' },
    { id: 22, category: 'Face Tats', img: '/face1.png', span: 'row-span-1' },
    { id: 23, category: 'Face Tats', img: '/face2.png', span: 'row-span-1' },
    { id: 24, category: 'Belly Tats', img: '/belly.png', span: 'row-span-1' },
  ];

  const filteredTattoos = filter === 'All' ? tattoos : tattoos.filter(t => t.category === filter);

  return (
    <div className="bg-white text-black min-h-screen font-mono selection:bg-[#880808] selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com')]" />

      
      <nav className="p-8 border-b-8 border-black sticky top-0 bg-white z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2 font-black uppercase text-xs hover:text-[#880808] transition-colors">
            <ArrowLeft size={16} />  Back 
          </Link>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1 text-[10px] font-black uppercase border-2 border-black transition-all ${filter === cat ? 'bg-[#880808] text-white border-[#880808]' : 'hover:bg-black hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>
<div className="bg-black text-white p-4 text-center border-b-8 border-black">
  <h2 className="text-2xl font-black uppercase italic tracking-tighter">
    Viewing: <span className="text-[#880808]">{filter}</span>
  </h2>
  <p className="text-[9px] font-bold opacity-50 uppercase tracking-[0.2em] mt-1">
    Click any image to enlarge // Portfolio Archive
  </p>
</div>
      
      <section className="p-4 md:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {filteredTattoos.map((tattoo) => (
            <motion.div
              layout
              key={tattoo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`relative overflow-hidden group cursor-none border-4 border-black ${tattoo.span}`}
              onClick={() => setSelectedImage(tattoo.img)}
            >
              <img src={tattoo.img} alt={tattoo.category} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              
              
              <div className="absolute inset-0 bg-[#880808]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-black text-white p-3 rotate-3 font-black uppercase text-[10px] flex items-center gap-2">
                  <Maximize2 size={14} /> View Image
                </div>
              </div>

             
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 border-2 border-black">
                <span className="text-[8px] font-black uppercase tracking-tighter text-black">{tattoo.category} // ID_{tattoo.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
       <footer className="p-8 mt-16 border-t-8 border-black bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-black uppercase text-gray-500">© 2026 JB Studios Philly // All Rights Reserved</p>
              
              <a 
                href="https://www.instagram.com/tatsbyjb1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white py-4 px-8 font-black uppercase tracking-widest hover:bg-[#880808] transition-all shadow-[6px_6px_0px_#ccc] flex items-center gap-3"
              >
                <Instagram size={18} />
                Follow Us For More
              </a>
          </div>
      </footer>

     
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white hover:text-[#880808] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-4xl max-h-full border-8 border-white shadow-[0_0_50px_rgba(136,8,8,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Fullscreen Work" className="max-w-full max-h-[80vh] object-contain" />
              <div className="bg-white p-4 font-black uppercase text-xs border-t-8 border-black flex justify-between">
               
                <span className="text-[#880808]">JB_STUDIOS_PHILLY</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
