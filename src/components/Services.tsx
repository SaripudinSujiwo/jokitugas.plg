import React from 'react';
import { FileText, Code, Presentation as PresentationChart, Network, PenTool, Languages, Palette, BookOpen, FileEdit, User, Award, Lightbulb, Video, CheckCircle, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Makalah & Artikel",
      description: "Penulisan makalah akademik, artikel ilmiah, dan jurnal",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileEdit,
      title: "Laporan Magang",
      description: "Penyusunan laporan magang dan PKL yang berkualitas",
      color: "from-green-500 to-green-600"
    },
    {
      icon: PresentationChart,
      title: "PowerPoint (PPT)",
      description: "Desain presentasi menarik dan profesional",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Network,
      title: "Cisco Packet Tracer",
      description: "Simulasi jaringan dan konfigurasi perangkat",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: PenTool,
      title: "Tugas Tulis Tangan",
      description: "Penulisan tugas dengan tulisan tangan yang rapi",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Languages,
      title: "Tugas Bahasa Arab",
      description: "Bantuan tugas bahasa Arab dan terjemahan",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Palette,
      title: "Desain Web / Feed Sosial Media",
      description: "Desain website dan konten media sosial",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: "Latihan Soal & Pembahasan",
      description: "Pembuatan soal latihan dengan pembahasan lengkap",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FileText,
      title: "Essay",
      description: "Penulisan essay akademik dan kreatif",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: User,
      title: "Resume & CV",
      description: "Pembuatan CV dan resume yang menarik",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Award,
      title: "Karya Tulis Ilmiah",
      description: "Penyusunan KTI untuk berbagai keperluan",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Lightbulb,
      title: "Proposal",
      description: "Pembuatan proposal penelitian dan bisnis",
      color: "from-lime-500 to-lime-600"
    },
    {
      icon: Video,
      title: "Video Animasi",
      description: "Pembuatan video animasi edukatif dan presentasi",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: CheckCircle,
      title: "Cek Turnitin",
      description: "Pengecekan plagiarisme dengan Turnitin",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: BarChart,
      title: "Infografis / Poster Edukasi",
      description: "Desain infografis dan poster edukatif",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Layanan <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai layanan bantuan tugas akademik untuk membantu kesuksesan studi Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
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
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;