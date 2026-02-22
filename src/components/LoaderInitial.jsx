import { useEffect, useState } from "react";
import gsap from "gsap";

const LoaderInitial = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Entrada
    gsap.to("#logo", {
      opacity: 1,
      scale: 1.2,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(".letter", {
      y: 0,
      opacity: 1,
      scale: 1.3,
      ease: "bounce.out",
      duration: 1,
      stagger: 0.15,
      delay: 0.5,
      onComplete: () => {
        gsap.to(".letter", {
        
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      },
    });

    // ⏳ Programar salida después de 3 segundos
    const timer = setTimeout(() => {
      gsap.to("#container", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false), // desmonta el loader
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // desaparece del DOM

  return (
    <div
      id="container"
      className="flex justify-center items-center h-screen bg-black p-5 "
    >
      <div className="flex items-center gap-[clamp(20px,5vw,60px)] flex-wrap justify-center">
        <img
          id="logo"
          src="svg/logoimgwhite.svg"
          alt="Collabs Logo"
          className="w-[clamp(80px,15vw,160px)] opacity-0 scale-0"
        />
        <div
          id="text"
          className="text-white text-center lowercase tracking-[clamp(5px,1vw,15px)]"
          style={{
            fontSize: "clamp(40px,8vw,120px)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            c
          </span>
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            o
          </span>
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            l
          </span>
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            l
          </span>
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            a
          </span>
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            b
          </span>
          <span className="letter inline-block opacity-0 translate-y-[100px]">
            s
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoaderInitial;
