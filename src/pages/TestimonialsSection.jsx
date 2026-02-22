import React from 'react';

const TestimonialsSection = () => {
  const reviews = [
    {
      quote: "Lograron conectar nuestra marca con audiencias que no solo consumen contenido, sino que buscan aprender. La credibilidad de sus influencers es de otro nivel.",
      author: "Ricardo Sanabria",
      position: "Marketing Director en TechCorp Perú",
      logo: "/logos/client1.png" 
    },
    {
      quote: "La primera agencia que entiende que el ROI en el sector corporativo se mide en reputación y confianza, no solo en impresiones.",
      author: "Claudia Villarán",
      position: "CEO de Innova Group",
      logo: "/logos/client2.png"
    }
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Comillas decorativas gigantes de fondo */}
      <div className="absolute top-10 left-10 text-[20rem] anton-regular text-white/[0.03] leading-none select-none">
        “
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center">
          
          <span className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-12">
            Trusted by Leaders
          </span>

          {/* Slider / Grid de Testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
            {reviews.map((rev, index) => (
              <div key={index} className="flex flex-col justify-between space-y-8">
                {/* Texto del testimonio */}
                <blockquote className="text-xl md:text-3xl font-light leading-relaxed text-gray-200 italic">
                  "{rev.quote}"
                </blockquote>

                {/* Info del Autor */}
                <div className="flex items-center gap-6 pt-8 border-t border-zinc-800">
                  <div className="flex flex-col">
                    <cite className="not-italic anton-regular text-xl text-white uppercase tracking-wider">
                      {rev.author}
                    </cite>
                    <span className="text-sm text-zinc-500 font-medium">
                      {rev.position}
                    </span>
                  </div>
                  
                  {/* Espacio para logo de la empresa (opcional) */}
                  {/* <img src={rev.logo} alt="Company Logo" className="h-6 opacity-50 ml-auto" /> */}
                </div>
              </div>
            ))}
          </div>

          {/* Indicador de "Impacto Real" */}
          <div className="mt-24 pt-12 border-t border-white/5 w-full flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center">
              <p className="anton-regular text-4xl text-white">95%</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Retención de Marcas</p>
            </div>
            <div className="text-center">
              <p className="anton-regular text-4xl text-white">+200</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Campañas Exitosas</p>
            </div>
            <div className="text-center">
              <p className="anton-regular text-4xl text-white">10M</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">Alcance Educativo</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;