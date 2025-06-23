import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Putri",
      role: "Mahasiswa Universitas Indonesia",
      content: "Alhamdulillah tugas makalahnya bagus banget! Sesuai deadline dan hasilnya memuaskan. Tim jokintugas.plg sangat profesional dan responsif.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      role: "Mahasiswa IT Telkom",
      content: "Cisco Packet Tracer dan coding assignment dikerjakan dengan sangat baik. Penjelasannya juga detail dan mudah dipahami. Recommended!",
      rating: 5
    },
    {
      name: "Indira Sari",
      role: "Mahasiswa Pascasarjana UGM",
      content: "Bantuan untuk proposal tesis sangat membantu. Penelitian yang mendalam dan sesuai dengan standar akademik. Terima kasih banyak!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Apa Kata <span className="text-blue-600">Mereka</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimoni dari mahasiswa dan pelajar yang telah mempercayakan tugas mereka kepada kami
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Bergabunglah dengan ribuan mahasiswa yang telah merasakan pelayanan terbaik kami
          </p>
          <a 
            href="https://wa.me/6281271267286" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 inline-block shadow-lg"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;