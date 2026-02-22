// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import gsap from "gsap";

// export default function Navbar() {
//   const logoIcon = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Inicio", path: "/" },
//     { name: "Servicios", path: "/services" },
//     { name: "Campañas", path: "/campañas" },
//     { name: "Portafolio", path: "/portafolio" },
//     { name: "Convocatoria", path: "/convocatoria" },
//     { name: "Contacto", path: "/contacto" },
//   ];

//   // Animación del logo solo una vez al montar el componente
//   useEffect(() => {
//     gsap.from(logoIcon.current, {
//       y: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out"
//     });
//   }, []); // Array de dependencias vacío = solo se ejecuta al montar

//   // Bloquear scroll cuando el menú está abierto
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isOpen]); // Solo se ejecuta cuando cambia isOpen

//   return (

//      <nav className="bg-white/20 backdrop-blur-md fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-30 py-4   text-white z-50 ">

//       {/* Logo */}
//       <div ref={logoIcon} className="text-2xl font-bold flex items-center">
//         <img
//           src="svg/logoimgblack.svg"
//           alt="Collabs Logo"
//           className="inline w-10 mr-2 mb-1"
//         />
//         <Link to="/" onClick={() => setIsOpen(false)} className="text-black">
//           collabs
//         </Link>
//       </div>

//       {/* Botón Hamburguesa (solo visible cuando está cerrado) */}
//       {!isOpen && (
//         <button className="z-50 bg-black p-2 rounded-full" onClick={() => setIsOpen(true)}>
//           <Menu size={32} />
//         </button>
//       )}

//       {/* Overlay del Menú */}
//       <div
//         className={`bg-black fixed inset-0 bg-black flex flex-col items-start justify-center px-8 py-12 gap-6 transform transition-transform duration-500 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Botón Cerrar (dentro del overlay, misma posición que el menú) */}
//         <div className="absolute top-0 right-0 left-0 z-50 px-6 md:px-30 py-4 md:pt-12 flex justify-end">
//           <button onClick={() => setIsOpen(false)}>
//             <X size={32} />
//           </button>
//         </div>

//         {links.map((link, i) => (
//           <Link
//             key={i}
//             to={link.path}
//             onClick={() => setIsOpen(false)}
//             className="font-bold transition-transform duration-300 transform hover:scale-110 hover:text-blue-600 active:scale-110 active:text-blue-600 text-[7vw] md:text-[4vw] lg:text-[3vw]"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// }























import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const logoIcon = useRef(null);
  const navRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState("auto");
  const [hasAnimated, setHasAnimated] = useState(false);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/services" },
    { name: "Campañas", path: "/campañas" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Convocatoria", path: "/convocatoria" },
    { name: "Contacto", path: "/contacto" },
  ];

  // Animación del logo SOLO en el montaje inicial
  useEffect(() => {
    if (!hasAnimated) {
      gsap.to(logoIcon.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        onComplete: () => setHasAnimated(true)
      });
    }
  }, [hasAnimated]);

  // Efecto de scroll para el navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control del overflow del body usando estado
  useEffect(() => {
    setBodyOverflow(isOpen ? "hidden" : "auto");
  }, [isOpen]);

  // Aplicar el overflow al body cuando el estado cambia
  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [bodyOverflow]);

  // Animación del menú SOLO cuando se abre/cierra
  useEffect(() => {
    if (!menuOverlayRef.current) return;

    if (isOpen) {
      // Mostrar overlay inmediatamente
      gsap.set(menuOverlayRef.current, {
        opacity: 1,
        scale: 1,
        display: "block"
      });

      // Animación de entrada de los items del menú
      gsap.fromTo(menuItemsRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );

      // Animación del botón cerrar
      gsap.fromTo(".close-btn",
        {
          rotation: -180,
          opacity: 0
        },
        {
          rotation: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.4
        }
      );

    } else {
      // Animación de salida de los items del menú
      gsap.to(menuItemsRef.current, {
        y: -80,
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.in"
      });

      // Animación del botón cerrar
      gsap.to(".close-btn", {
        rotation: 180,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });

      // Ocultar overlay después de las animaciones
      gsap.to(menuOverlayRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.in",
        delay: 0.3,
        onComplete: () => {
          gsap.set(menuOverlayRef.current, { display: "none" });
        }
      });
    }
  }, [isOpen]);

  // Función para manejar el cierre del menú
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Función para manejar la apertura del menú
  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  // Función para agregar items al array de referencias
  const addToMenuItemsRef = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={` w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/40 backdrop-blur-xl border-b border-white/30  py-3" 
            : "bg-white/25 backdrop-blur-lg border-b border-white/20  py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo - Inicialmente oculto */}
          <div ref={logoIcon} className="flex items-center opacity-0 -translate-y-2">
            <Link 
              to="/" 
              onClick={handleCloseMenu}
              className="flex items-center gap-3 group"
            >
              <img
                src="svg/logoimgblack.svg"
                alt="Collabs Logo"
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <span className="text-2xl font-bold text-black">
                collabs
              </span>
            </Link>
          </div>

          {/* Botón Hamburguesa - Siempre visible */}
          <button 
            className={`z-60 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              isScrolled 
                ? "bg-black/90 hover:bg-black shadow-lg" 
                : "bg-black/80 hover:bg-black shadow-md"
            } ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            onClick={handleOpenMenu}
            aria-label="Abrir menú"
          >
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Overlay del Menú - Inicialmente oculto */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-100 hidden opacity-0"
      >
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/98 via-purple-900/95 to-black/98 backdrop-blur-3xl" />

        {/* Contenido del Menú */}
        <div className="relative z-100 h-full flex flex-col items-center justify-center">
          {/* Botón Cerrar */}
          <button 
            onClick={handleCloseMenu}
            className="close-btn fixed top-6 right-6 z-60 p-4 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-90 shadow-2xl opacity-0"
            aria-label="Cerrar menú"
          >
            <X size={32} className="text-white" />
          </button>

          {/* Items del Menú - Inicialmente ocultos */}
          <div className="flex flex-col items-center justify-center px-8 gap-6 md:gap-8 w-full max-w-4xl">
            {links.map((link, i) => (
              <Link
                key={i}
                ref={addToMenuItemsRef}
                to={link.path}
                onClick={handleCloseMenu}
                className="font-black text-white text-center transition-all duration-500 transform hover:scale-125 hover:text-blue-300 active:scale-110 text-5xl md:text-6xl tracking-tighter leading-tight opacity-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}