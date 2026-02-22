import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Componente: FlagMarcas con GSAP
// Props:
// - logos: array de URLs o imports de imágenes
// - speed: número que controla la velocidad del loop (default 20)
// - tilt: grados de inclinación (default -3)

export default function FlagHorizontal({ logos = [], speed = 20 }) {
  const trackRef = useRef(null);

  const items = logos.length
    ? logos
    : [
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png",
        "https://static.vecteezy.com/system/resources/previews/020/927/282/non_2x/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg",
        "https://images.icon-icons.com/3912/PNG/512/hp_logo_icon_248070.png",
        "https://www.shutterstock.com/image-vector/samsung-logo-icon-south-korean-600nw-2269709285.jpg",
      ];

  const doubled = [...items, ...items];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Animación infinita y fluida
      gsap.to(track, {
        xPercent: -50,
        duration: speed,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      className="w-[110%] overflow-hidden select-none bg-white border-b-12 border-b-blue-500 "
 
    >
      <div className="w-full bg-transparent py-4 md:py-6 relative">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap items-center"
          style={{ width: `${doubled.length * 200}px` }}
        >
          {doubled.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex-shrink-0 md:mx-3 flex items-center justify-center"
              style={{ width: 160 }}
            >
              <img
                src={src}
                alt={`marca-${i}`}
                className="max-h-12 md:max-h-16  object-contain block object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}