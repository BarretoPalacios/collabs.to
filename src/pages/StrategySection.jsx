import React from 'react';

const StrategySection = () => {
  const pillars = [
    {
      number: "01",
      title: "Content with Purpose",
      desc: "No buscamos viralidad vacía. Creamos narrativas educativas que transforman la percepción de marca y aportan valor real al usuario."
    },
    {
      number: "02",
      title: "C-Level Connection",
      desc: "Acceso exclusivo a perfiles ejecutivos y líderes de opinión que hablan el lenguaje de los negocios y la alta dirección."
    },
    {
      number: "03",
      title: "Data-Driven ROI",
      desc: "Métricas que van más allá del 'like'. Analizamos el impacto en la reputación, el alcance educativo y la conversión corporativa."
    }
  ];

  return (
    <section className="bg-black py-24 px-6 border-t border-white/5">
      <div className="container mx-auto">
        {/* Cabecera sutil */}
        <div className="flex flex-col mb-16">
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Metodología</span>
          <h2 className="anton-regular text-4xl md:text-6xl text-white uppercase leading-none">
            Elevando el estándar del <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Marketing de Influencia
            </span>
          </h2>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative pt-8 border-t border-zinc-800 hover:border-white transition-colors duration-700">
              {/* Número decorativo */}
              <span className="anton-regular text-5xl text-zinc-900 group-hover:text-zinc-800 transition-colors duration-700 absolute -top-4 right-0">
                {pillar.number}
              </span>
              
              <h3 className="anton-regular text-2xl text-white uppercase mb-4 tracking-wider">
                {pillar.title}
              </h3>
              
              <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                {pillar.desc}
              </p>

              {/* Decoración inferior - Línea que crece al hover */}
              <div className="mt-8 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-white to-transparent transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;