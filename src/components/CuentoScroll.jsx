import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CuentoMinimal = () => {
  const horizontalRef = useRef(null);

  const cuento = [
    "Collabs",
    "Marketing",
    "Influencers",
    "Aliado",
    "En Ml  ",
    "100%",
  ];

  useGSAP(() => {
    // Scroll horizontal para primeras 3
    gsap.to(horizontalRef.current, {
      x: () => -(horizontalRef.current.offsetWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
      },
    });

    // Animación de cambio de color para cada texto
    const textos = gsap.utils.toArray(".texto-cuento");

    textos.forEach((texto, index) => {
      // Aparecer poco a poco
      gsap.from(texto, {x:120, opacity: 0, duration: 1, scale: 0.8 });
    });
  });

  return (
    <div className="overflow-x-hidden">
      {/* Horizontal Scroll */}
      <div
        ref={horizontalRef}
        className="flex gap-10 md:gap-50 h-screen bg-black"
        style={{ width: `max-content` }}
      >
        {cuento.slice(0, 3).map((texto, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-fit h-full flex items-center justify-center p-4 ${
              index === 0
                ? "bg-black"
                : index === 1
                ? "bg-blue-900"
                : "bg-black"
            }  `}
          >
            <h1 className="texto-cuento text-white font-bold text-center text-[40vw] md:text-[20vw]  font-bold">
              {texto}
            </h1>
          </div>
        ))}
      </div>

      {/* Vertical Scroll */}
      {cuento.slice(3).map((texto, index) => (
        <div
          key={index + 3}
          className={`h-screen flex items-center justify-center p-4
            ${
              index === 0
                ? "bg-gradient-to-br from-red-900 to-orange-900"
                : index === 1
                ? "bg-gradient-to-br from-orange-900 to-yellow-900"
                : index === 2
                ? "bg-gradient-to-br from-yellow-900 to-green-900"
                : "bg-gradient-to-br from-gray-900 to-black"
            }`}
        >
          <h1 className="text-white text-[8vw]  font-bold text-center">
            {texto}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CuentoMinimal;
