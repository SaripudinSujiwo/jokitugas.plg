import React from 'react';
import { Target, Shield, Clock, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tentang <span className="text-blue-600">JokiTugas.plg</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami adalah platform terpercaya yang menyediakan layanan bantuan tugas akademik 
            untuk mahasiswa dan pelajar di seluruh Indonesia. Dengan tim profesional dan 
            pengalaman bertahun-tahun, kami berkomitmen memberikan hasil terbaik.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fokus Kualitas</h3>
            <p className="text-gray-600">Setiap tugas dikerjakan dengan standar akademik tertinggi</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Rahasia</h3>
            <p className="text-gray-600">Privasi dan kerahasiaan data klien adalah prioritas utama</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tepat Waktu</h3>
            <p className="text-gray-600">Pengerjaan sesuai deadline yang telah disepakati</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Profesional</h3>
            <p className="text-gray-600">Tim berpengalaman dengan track record yang terpercaya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;