import React from 'react';
import { MessageSquare, Users, Send } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Kirim Detail Tugas",
      description: "Hubungi kami via WhatsApp dan kirimkan detail tugas beserta deadline yang diinginkan",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Tim Kami Kerjakan",
      description: "Tim profesional kami akan mengerjakan tugas sesuai dengan standar akademik yang tinggi",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Send,
      title: "Tugas Dikirim",
      description: "Hasil tugas akan dikirim melalui WhatsApp atau email sesuai deadline yang disepakati",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cara <span className="text-blue-600">Kerja</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proses sederhana dan mudah untuk mendapatkan bantuan tugas berkualitas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="text-center relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/6281271267286" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 inline-block shadow-lg"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;