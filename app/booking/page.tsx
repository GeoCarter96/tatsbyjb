'use client'
import { useState, useRef } from 'react';
import { Zap, ShieldAlert, ArrowLeft, X } from 'lucide-react'; 
import Link from 'next/link';

export default function BookingPage() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

const handleClick = () => {
  if (fileInputRef.current) {
    fileInputRef.current.click();
  }
};

 const handleFileSelection = (newFiles: FileList | null) => {
  if (!newFiles) return;

  const validFiles = Array.from(newFiles).filter(file => 
    file.type.startsWith('image/')
  );
  
  setFiles((prev) => [...prev, ...validFiles]);
};

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  
  if (e.dataTransfer.files) {
    handleFileSelection(e.dataTransfer.files);
  }
};


const removeFile = (index: number) => {
  setFiles(files.filter((_, i) => i !== index));
};

  return (
    <div className="bg-white text-black min-h-screen font-mono selection:bg-[#880808] selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com')]" />

      <div className="p-8 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 font-black uppercase text-xs hover:text-[#880808] transition-colors">
          <ArrowLeft size={16} />  Back 
        </Link>
      </div>

      <section className="py-12 bg-white flex flex-col items-center justify-center px-4 relative">
        <div className="w-full max-w-2xl bg-white text-black border-4 border-black p-6 md:p-10 relative z-10 shadow-[15px_15px_0px_#880808]">
          <div className="flex justify-between items-start mb-8 border-b-4 border-black pb-4">
            <div>
              <h1 className="font-black text-4xl uppercase tracking-tighter">Initial Contract</h1>
              <p className="text-[10px] font-bold text-gray-500 mt-1">INTAKE DEPARTMENT // TATS BY JB</p>
            </div>
            <div className="bg-[#880808] text-white text-[10px] px-2 py-1 font-bold">FORM_ID: 666-B</div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase">Legal Name</label>
                <input type="text" placeholder="Required" className="w-full p-4 border-2 border-black outline-none focus:border-[#880808] font-bold uppercase text-[10px] bg-gray-50" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase">Phone Number</label>
                <input type="text" placeholder="000-000-0000" className="w-full p-4 border-2 border-black outline-none focus:border-[#880808] font-bold uppercase text-[10px] bg-gray-50" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase">Email Address</label>
              <input type="email" placeholder="Subject@Email.com" className="w-full p-4 border-2 border-black outline-none focus:border-[#880808] font-bold uppercase text-[10px] bg-gray-50" />
            </div>
            
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase">Visual Reference</label>
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
                onChange={(e) => handleFileSelection(e.target.files)}
              />
              <div 
                onClick={handleClick}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#880808] transition-colors cursor-pointer group bg-gray-50"
              >
                <Zap size={24} className="mx-auto mb-2 text-gray-400 group-hover:text-[#880808]" />
                <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-black">Upload Images (Drag & Drop)</span>
              </div>

              {/* Preview Grid */}
              {files.length > 0 && (
                <div className="grid grid-cols-4 gap-2 pt-2">
                  {files.map((file, idx) => (
                    <div key={idx} className="relative group border-2 border-black aspect-square bg-white">
                      <img 
                        src={URL.createObjectURL(file)} 
                        alt="preview" 
                        className="w-full h-full object-cover" 
                      />
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                        className="absolute -top-1 -right-1 bg-[#880808] text-white p-1 hover:scale-110 transition-transform shadow-[2px_2px_0px_black]"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase">Project Description</label>
              <textarea placeholder="Placement, size, and detail requirements..." className="w-full p-4 border-2 border-black outline-none focus:border-[#880808] font-bold uppercase text-[10px] h-32 bg-gray-50" />
            </div>

            <div className="bg-[#fff1f1] border-l-4 border-[#880808] p-4 my-6">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert size={16} className="text-[#880808]" />
                <span className="text-[10px] font-black uppercase">Sterile Procedure Waiver</span>
              </div>
              <p className="text-[9px] leading-tight text-gray-600 uppercase font-bold">
                By submitting, you acknowledge that you are 18+, not under the influence, and aware that tattoos are permanent procedures.
              </p>
            </div>

            <button type="submit" className="w-full bg-black text-white py-6 font-black uppercase tracking-widest hover:bg-[#880808] transition-all shadow-[8px_8px_0px_#ccc] active:translate-y-1 active:shadow-none">
              Submit Consent Form
            </button>
          </form>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Secure Submission  // Philadelphia, PA</p>
        </div>
      </section>
    </div>
  );
}
