export const BrandTrust = () => {
  return (
    <section className="bg-black py-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-[0.3em] text-xs mb-12">
          Marcas que transforman con nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Aquí irían tus imágenes de logos */}
          <img src="svg/marca_1.png" alt="Marca 1" className="h-8 md:h-12" />
          <img src="/logo-marca2.svg" alt="Marca 2" className="h-8 md:h-12" />
          <img src="/logo-marca3.svg" alt="Marca 3" className="h-8 md:h-12" />
          <img src="/logo-marca4.svg" alt="Marca 4" className="h-8 md:h-12" />
        </div>
      </div>
    </section>
  );
};