import React from 'react';

const TalentsSection = () => {
  const talents = [
    { name: "Jorge Ramirez", specialty: "CEO Collabs", size: "md:col-span-2 md:row-span-2", img: "/img/talent_1.jpg" },
    { name: "Lizeth", specialty: "Vida Universitaria", size: "md:col-span-1 md:row-span-1", img: "/img/talent_3.jpg" },
    { name: "Flavio Galvez", specialty: "Estratega digital", size: "md:col-span-1 md:row-span-2", img: "/img/talent_2.jpg" },
    { name: "Melanie", specialty: "Diseñadora de Marcas", size: "md:col-span-1 md:row-span-1", img: "/img/talent_5.png" },
    { name: "Nicolle", specialty: "Creadora de Contenido", size: "md:col-span-1 md:row-span-1", img: "/img/talent_6.png" },
    { name: "Frani", specialty: "Contenido de Belleza", size: "md:col-span-1 md:row-span-1", img: "/img/talent_11.png" },
    { name: "Vale", specialty: "Moda Lifestyle", size: "md:col-span-1 md:row-span-1", img: "/img/talent_9.png" },
    { name: "Fernando LLanos", specialty: "Periodista", size: "md:col-span-1 md:row-span-2", img: "/img/talent_4.png" },
    { name: "Fatima", specialty: "Viajes y Contenido", size: "md:col-span-1 md:row-span-1", img: "/img/talent_7.png" },
    { name: "Bukano", specialty: "Musico y creador", size: "md:col-span-1 md:row-span-1", img: "/img/talent_8.png" },
    { name: "Kath Orcón", specialty: "Ingeniera y Diseñadora", size: "md:col-span-1 md:row-span-1", img: "/img/talent_10.png" },
  ];

  return ( 
    <section className="bg-black py-24 px-6">
      <div className="container mx-auto">
        
     
        {/* Encabezado de Sección */}
        <div className="mb-16 text-start">
          <h2 className="anton-regular text-5xl md:text-7xl text-white uppercase leading-none">
            Nuestros <br /> <span className="text-gray-500">Talentos con Propósito</span>
          </h2>
          <div className="w-20 h-[2px] bg-white mt-6"></div>
        </div>

        {/* Bento Grid de 10 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[450px] md:auto-rows-[280px]">
          {talents.map((talent, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${talent.size} border border-white/5 shadow-2xl`}
            >
              {/* Imagen con Zoom Suave */}
              <img
                src={talent.img}
                alt={talent.name}
                className="absolute inset-0 w-full h-full object-cover object-[50%_25%] md:object-topTestimonialsSection grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Negro Gradual */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-all duration-500 group-hover:from-black/95"></div>

              {/* Info del Talento */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 mb-2 block overflow-hidden">
                  <span className="block animate-slide-up">{talent.specialty}</span>
                </span>
                <h3 className="anton-regular text-2xl md:text-3xl text-white uppercase leading-none mb-4">
                  {talent.name}
                </h3>
                
                {/* Link Media Kit */}
                <div className="h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                    Ver Media Kit
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Catálogo Completo */}
        <div className="mt-16 flex justify-center">
          <button className="group relative flex items-center gap-4 px-12 py-5 bg-transparent border border-zinc-800 rounded-full text-white overflow-hidden transition-all hover:border-white duration-500">
            <span className="relative z-10 uppercase tracking-[0.4em] text-xs font-bold">
              Explorar Catálogo Completo
            </span>
            {/* Efecto de llenado en el botón */}
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up { animation: slideUp 0.5s ease-out; }
      `}} />
    </section>
  );
};

export default TalentsSection;