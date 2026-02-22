import React from 'react';

const ImpactSection = () => {
  const metrics = [
    {
      number: "+10M",
      label: "Impresiones",
      sublabel: "Contenido Educativo Anual",
      description: "Impactamos en la toma de decisiones a través de narrativas con valor técnico y académico."
    },
    {
      number: "+50",
      label: "Especialistas",
      sublabel: "Perfiles C-Level & Expertos",
      description: "Nuestra red exclusiva de líderes de opinión que dominan el ecosistema corporativo peruano."
    },
    {
      number: "100%",
      label: "Propósito",
      sublabel: "Contenido Ético & Verificado",
      description: "Garantizamos que cada campaña construya reputación positiva y legado social."
    }
  ];

  return (
    <section className="bg-black py-24 px-6 relative">
      <div className="container mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <h2 className="anton-regular text-4xl md:text-5xl text-white uppercase tracking-tighter">
            El Impacto en <span className="text-zinc-600">Números</span>
          </h2>
          <div className="h-[1px] flex-grow mx-8 bg-zinc-800 hidden md:block"></div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold">
            Data-Driven Agency
          </p>
        </div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50">
          {metrics.map((item, index) => (
            <div 
              key={index} 
              className="bg-black p-10 md:p-14 group hover:bg-zinc-950 transition-all duration-500 relative overflow-hidden"
            >
              {/* Efecto de luz Plata al fondo (Hover) */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>

              {/* Número Gigante (Efecto Plata) */}
              <h3 className="anton-regular text-7xl md:text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 tracking-tighter">
                {item.number}
              </h3>

              {/* Etiquetas */}
              <div className="space-y-1 mb-6">
                <p className="text-white text-xl font-bold uppercase tracking-widest leading-none">
                  {item.label}
                </p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium">
                  {item.sublabel}
                </p>
              </div>

              {/* Descripción sutil */}
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-[250px] opacity-80 group-hover:opacity-100 transition-opacity">
                {item.description}
              </p>

              {/* Línea de acento inferior */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gray-100 to-transparent group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Cita de cierre opcional */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em]">
            Certificando la influencia desde el conocimiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;