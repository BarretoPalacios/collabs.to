import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-black py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Círculo de luz sutil en el fondo para dar profundidad */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Lado Izquierdo: Texto Persuasivo */}
          <div className="flex flex-col justify-center">
            <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6">
              Contacto Directo
            </span>
            <h2 className="anton-regular text-5xl md:text-7xl text-white uppercase leading-[0.9] mb-8">
              ¿Listo para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
                trascender?
              </span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Hablemos de cómo nuestros talentos pueden elevar el propósito de tu marca frente a las audiencias más exigentes de Perú.
            </p>
            
            <div className="mt-12 space-y-4">
              <p className="text-white font-bold tracking-widest text-xs uppercase">Escríbenos</p>
              <a href="mailto:hola@letscollabs.pe" className="text-2xl md:text-3xl text-zinc-500 hover:text-white transition-colors duration-500 underline underline-offset-8 decoration-zinc-800">
                hola@letscollabs.pe
              </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario Minimalista */}
          <div className="bg-zinc-900/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="bg-transparent border-b border-zinc-800 focus:border-white outline-none py-3 px-1 text-white transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Nombre de empresa"
                    className="bg-transparent border-b border-zinc-800 focus:border-white outline-none py-3 px-1 text-white transition-all duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Email Corporativo</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@empresa.com"
                  className="bg-transparent border-b border-zinc-800 focus:border-white outline-none py-3 px-1 text-white transition-all duration-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Mensaje</label>
                <textarea 
                  rows="3"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-transparent border-b border-zinc-800 focus:border-white outline-none py-3 px-1 text-white transition-all duration-500 resize-none"
                ></textarea>
              </div>

              <button className="w-full mt-8 group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-transform active:scale-95">
                <span className="relative z-10">Enviar Propuesta</span>
                <svg className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;