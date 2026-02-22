import FlagHorizontal from "../components/FlagHorizontal";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import TextSplitAnimate from "../components/TextSplitAnimate";

// Registrar el plugin SplitText
gsap.registerPlugin(SplitText);

export default function Hero() {
  const imgAnimate = useRef(null);
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const titleRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animación para "creamos"
    if (titleRef.current) {
      const splitTitle1 = new SplitText(titleRef.current, {
        type: "chars",
        charsClass: "char",
      });

      tl.from(splitTitle1.chars, {
        y: -100,
        opacity: 0,
        rotation: "random(-180, 180)",
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.4,
          from: "start",
        },
      })
        // Animación posterior para "influenceer"
        .to(
          splitTitle1.chars,
          {
            y: -20,
            duration: 0.3,
            ease: "power2.inOut",
            stagger: 0.05,
          },
          "+=0.2"
        ); // Espera 0.2s después de la animación inicial
    }

    // Animación para "marketing"
    if (titleRef2.current) {
      const splitTitle2 = new SplitText(titleRef2.current, {
        type: "chars",
        charsClass: "char",
      });

      tl.from(splitTitle2.chars, {
        x: 200,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          amount: 0.6,
          from: "start",
        },
      })
        // Animación posterior para "colaboraciones"
        .to(
          splitTitle2.chars,
          {
            color: "#fff",
            backgroundColor: "#000",
            x: 30,
            scale: 1.1,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.03,
          },
          "+=0.3"
        );
    }

    // Animación para "autenticas"
    if (titleRef3.current) {
      const splitTitle3 = new SplitText(titleRef3.current, {
        type: "chars",
        charsClass: "char",
      });

      tl.from(splitTitle3.chars, {
        y: 100,
        opacity: 0,
        rotationY: 90,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.08,
      })
        // Animación posterior para "autenticas"
        .to(
          splitTitle3.chars,
          {
            y: 10,
            rotation: "random(-10, 10)",
            duration: 0.5,
            ease: "bounce.out",
            stagger: {
              amount: 0.8,
              from: "end",
            },
          },
          "+=0.4"
        );
    }

    gsap.from(imgAnimate.current, {
      x: 500,
      rotation: -30,
      duration: 3,
      ease: "back.out(2)",
      // delay: 4, // Delay para que empiece después del texto
    });

    return () => {
      [titleRef, titleRef2, titleRef3].forEach((ref) => {
        if (ref.current) {
          const splits = ref.current.querySelectorAll(".char");
          splits.forEach((el) => el.remove());
        }
      });
    };
  }, []);

  return (
    <div className="block max-w-contain  mx-auto">
      <Navbar />
      <section className="  bg-blue-200   relative w-full min-h-screen flex flex-wrap flex-col md:flex-row  overflow-hidden">
        {/* Texto principal */}
        <div className="md:w-1/2 self-start  md:items-center text-black text-start  p-8 ">
          <div className="block">
            <p
              ref={titleRef}
              className="uppercase anton-regular text-[18vw] md:text-[8vw] font-bold"
            >
              Influencer
            </p>

            <p
              ref={titleRef2}
              className="uppercase  anton-regular text-[18vw] md:text-[8vw] font-bold"
            >
              Marketing
            </p>

            <p
              ref={titleRef3}
              className="uppercase anton-regular text-[18vw] md:text-[8vw] font-bold"
            >
              UGC’s
            </p>
          </div>
        </div>

        <div className="md:w-1/2 self-center flex flex-row  items-center justify-center border">
          {/* Galería de Instagram */}
          <div className="">
            <img
              ref={imgAnimate}
              src={"/img/equipo.jpg"}
              alt={`Instagram `}
              className="w-100 h-full object-cover rotate-0"
            />
          </div>
        </div>
      </section>

      <TextSplitAnimate />


       <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
             <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                   <br /><br /><br /><br /><br /><br />

                    <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
             <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                   <br /><br /><br /><br /><br /><br />
    </div>
  );
}
