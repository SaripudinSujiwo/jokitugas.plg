import React from 'react';
import { MessageCircle, Mail, Instagram, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              jokintugas.plg
            </h3>
            <p className="text-gray-300 mb-6">
              Teman Setia Tugas Anda
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform terpercaya untuk bantuan tugas akademik dengan kualitas tinggi dan pelayanan profesional.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">
              Layanan Utama
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">Makalah & Artikel</li>
              <li className="text-gray-300">Laporan Magang</li>
              <li className="text-gray-300">PowerPoint (PPT)</li>
              <li className="text-gray-300">Cisco Packet Tracer</li>
              <li className="text-gray-300">Essay & KTI</li>
              <li className="text-gray-300">Dan masih banyak lagi...</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/6281271267286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-200 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>0812-7126-7286</span>
                <ExternalLink className="w-4 h-4 opacity-50" />
              </a>
              
              <a 
                href="mailto:saripudinsujiwo@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>saripudinsujiwo@gmail.com</span>
              </a>
              
              <a 
                href="https://instagram.com/jokintugas.plg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors duration-200 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@jokintugas.plg</span>
                <ExternalLink className="w-4 h-4 opacity-50" />
              </a>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Siap Memulai Tugas Anda?
            </h3>
            <p className="text-blue-100 mb-6">
              Konsultasi gratis untuk mendiskusikan kebutuhan tugas akademik Anda
            </p>
            <a 
              href="https://wa.me/6281271267286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 inline-block shadow-lg"
            >
              Mulai Konsultasi
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 jokintugas.plg – All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;