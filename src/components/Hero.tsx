import React from 'react';
import { MessageCircle, BookOpen, Code, FileText, Presentation as PresentationChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-300 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Joki Tugas Cepat & <span className="text-blue-100">Profesional</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Makalah, Coding, PPT, Desain, dan lainnya dikerjakan tepat waktu dan tanpa ribet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/6281271267286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Lihat Layanan
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cepat & Tepat Waktu</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>100% Rahasia</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Berkualitas Tinggi</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <FileText className="w-12 h-12 mb-3 text-blue-100" />
                  <span className="text-sm font-medium">Makalah</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <Code className="w-12 h-12 mb-3 text-blue-100" />
                  <span className="text-sm font-medium">Coding</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <PresentationChart className="w-12 h-12 mb-3 text-blue-100" />
                  <span className="text-sm font-medium">PPT</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <BookOpen className="w-12 h-12 mb-3 text-blue-100" />
                  <span className="text-sm font-medium">Essay</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <FileText className="w-12 h-12 mb-3 text-blue-100" />
                  <span className="text-sm font-medium">Laporan</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <BookOpen className="w-12 h-12 mb-3 text-blue-100" />
                  <span className="text-sm font-medium">Desain</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;