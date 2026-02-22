import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from 'gsap/SplitText';

// Registrar el plugin SplitText
gsap.registerPlugin(SplitText);

export default function Test() {
const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Animación del título principal
    if (titleRef.current) {
      const splitTitle = new SplitText(titleRef.current, {
        type: 'chars,words,lines',
        wordsClass: 'word',
        charsClass: 'char',
        linesClass: 'line'
      });

      gsap.from(splitTitle.chars, {

        opacity: 0,
        y: 100,
        rotationX: -90,
        stagger: 0.05,
        ease: 'easeOut',

      });
    }

    // Animación del subtítulo
    if (subtitleRef.current) {
      const splitSubtitle = new SplitText(subtitleRef.current, {
        type: 'words',
        wordsClass: 'word'
      });

      gsap.from(splitSubtitle.words, {
        duration: 0.6,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        delay: 1,
        ease: 'power2.out'
      });
    }

    // Animación de párrafo por líneas
    if (paragraphRef.current) {
      const splitParagraph = new SplitText(paragraphRef.current, {
        type: 'lines',
        linesClass: 'line'
      });

      gsap.from(splitParagraph.lines, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        delay: 1.5,
        ease: 'power2.out'
      });
    }

    // Cleanup function
    return () => {
      if (titleRef.current) {
        const splitTitle = SplitText.revert(titleRef.current);
      }
      if (subtitleRef.current) {
        const splitSubtitle = SplitText.revert(subtitleRef.current);
      }
      if (paragraphRef.current) {
        const splitParagraph = SplitText.revert(paragraphRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-8">
      <h1 
        ref={titleRef} 
        className="text-5xl md:text-7xl font-bold text-center mb-8 text-white"
      >
        Bienvenido a GSAP SplitText
      </h1>
      
      <h2 
        ref={subtitleRef}
        className="text-2xl md:text-3xl text-center mb-12 text-cyan-300"
      >
        Animaciones increíbles con React y GSAP
      </h2>
      
      <p 
        ref={paragraphRef}
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed"
      >
        SplitText es un plugin poderoso que te permite dividir texto en caracteres, palabras y líneas para crear animaciones espectaculares. Perfecto para landing pages y efectos de texto.
      </p>
    </div>
  );
}
