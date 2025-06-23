import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah revisi bisa dilakukan?",
      answer: "Ya, kami menyediakan revisi gratis sesuai dengan instruksi awal. Revisi dapat dilakukan maksimal 2 kali untuk memastikan hasil sesuai dengan harapan Anda."
    },
    {
      question: "Apakah tugas dijamin orisinal?",
      answer: "Absolutly! Semua tugas dikerjakan dari nol dan dijamin bebas plagiarisme. Kami juga menyediakan layanan pengecekan Turnitin untuk memastikan originalitas."
    },
    {
      question: "Berapa lama pengerjaan tugas?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas tugas. Umumnya 1-7 hari kerja. Untuk tugas urgent, kami juga melayani dengan tambahan biaya express."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Pembayaran dapat dilakukan via transfer bank, e-wallet, atau aplikasi pembayaran digital. Sistem pembayaran fleksibel dengan DP 50% di awal dan pelunasan setelah tugas selesai."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Keamanan dan kerahasiaan data klien adalah prioritas utama kami. Semua informasi dijaga ketat dan tidak akan dibagikan kepada pihak ketiga."
    },
    {
      question: "Bidang studi apa saja yang dilayani?",
      answer: "Kami melayani hampir semua bidang studi mulai dari Teknik, Ekonomi, Hukum, Pendidikan, Kesehatan, IT, Sosial, hingga Sains dan banyak lagi."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pertanyaan <span className="text-blue-600">Umum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Masih ada pertanyaan lain? Jangan ragu untuk menghubungi kami
          </p>
          <a 
            href="https://wa.me/6281271267286" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 inline-block shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;