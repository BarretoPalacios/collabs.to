import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Estilos de animación personalizados */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes revealUp {
          0% { transform: translateY(100px); opacity: 0; filter: blur(10px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-slow { animation: fadeIn 2s ease-out forwards; }
      `}} />

      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Video de Fondo con Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-black/20"></div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Título Principal con animación de revelado */}
            <h1 className="anton-regular text-[12vw] md:text-[6.5vw] font-black uppercase tracking-tighter leading-[0.9] overflow-hidden">
              <span className="block animate-reveal">
                Talent Management
              </span>
              <span className="block animate-reveal [animation-delay:0.2s] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                & Influencer Marketing
              </span>
            </h1>

            {/* Descripción con aparición suave */}
            <p className="anton-regular text-lg md:text-2xl font-light tracking-wide max-w-3xl mx-auto text-gray-300 italic animate-fade-slow [animation-delay:0.8s] opacity-0">
              Agencia <span className="text-white">#1 en Perú 🇵🇪</span> de influencers educativos, corporativos y con propósito.
            </p>

            {/* Botón con hover effect */}
            <div className="pt-10 animate-fade-slow [animation-delay:1s] opacity-0">
              <a
                href="https://linktr.ee/letscollabs?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/40 hover:bg-white hover:text-black rounded-full overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 tracking-widest text-xs uppercase">Unirme a las Convocatorias</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Decoración Minimalista con animación Bounce Suave */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-fade-slow [animation-delay:1.5s] opacity-0">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold">Descubre</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent relative overflow-hidden">
             {/* Animación de línea que baja infinitamente */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/40 animate-scroll-line"></div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes scrollLine {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100%); }
            }
            .animate-scroll-line { animation: scrollLine 2s infinite cubic-bezier(0.45, 0, 0.55, 1); }
          `}} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;











