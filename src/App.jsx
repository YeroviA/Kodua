import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiTailwindcss,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiWordpress
} from "react-icons/si";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      text: "Transformamos ideas en código funcional",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      text: "Desarrollamos soluciones digitales para tu negocio",
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      text: "Impulsa tu presencia en línea con KÓDUA",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#101A28] text-white font-sans relative">
      {/* SEO Avanzado */}
      <Helmet>
        <html lang="es" />
        <title>KÓDUA | Consultoría y Desarrollo Web en Aguascalientes</title>
        <meta
          name="description"
          content="KÓDUA es una consultoría digital ubicada en Aguascalientes, México. Creamos sitios web, aplicaciones personalizadas y soluciones tecnológicas para impulsar tu negocio."
        />
        <meta
          name="keywords"
          content="KÓDUA, desarrollo web, Aguascalientes, software, consultoría, programación, diseño web, apps, desarrollo web Aguascalientes, aplicaciones a medida, soluciones digitales"
        />
        <meta name="author" content="KÓDUA Consultoría" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kodua.com" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        {/* Open Graph */}
        <meta property="og:title" content="KÓDUA | Desarrollo Web y Consultoría Digital en Aguascalientes" />
        <meta property="og:description" content="Creamos sitios web, aplicaciones y soluciones digitales personalizadas que impulsan tu negocio." />
        <meta property="og:image" content="URL_DE_TU_LOGO_O_IMAGEN_COMPARTIBLE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kodua.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KÓDUA | Desarrollo Web y Consultoría Digital en Aguascalientes" />
        <meta name="twitter:description" content="Creamos sitios web, aplicaciones y soluciones digitales para empresas y emprendedores en Aguascalientes." />
        <meta name="twitter:image" content="URL_DE_TU_LOGO_O_IMAGEN_COMPARTIBLE" />

        {/* JSON-LD LocalBusiness con servicios y equipo */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KÓDUA",
              "image": "URL_DE_TU_LOGO_O_IMAGEN",
              "url": "https://www.kodua.com",
              "telephone": "+524493917215",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dirección opcional",
                "addressLocality": "Aguascalientes",
                "addressRegion": "Ags",
                "postalCode": "20000",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.8823,
                "longitude": -102.291
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/andreau-yerovi-acevedo-lópez-8825b854/",
                "https://wa.me/524493917215"
              ],
              "founder": {
                "@type": "Person",
                "name": "Andreau Yerovi Acevedo López"
              },
              "department": [
                {
                  "@type": "Organization",
                  "name": "Equipo de Desarrollo",
                  "description": "Desarrolladores y diseñadores apasionados por la tecnología y la innovación."
                }
              ],
              "makesOffer": [
                {
                  "@type": "Service",
                  "name": "Desarrollo de sitios web",
                  "description": "Diseño y desarrollo de sitios web modernos, adaptables y funcionales."
                },
                {
                  "@type": "Service",
                  "name": "Aplicaciones web y móviles",
                  "description": "Desarrollo de aplicaciones escalables y seguras para todo tipo de negocio."
                },
                {
                  "@type": "Service",
                  "name": "Mantenimiento y soporte",
                  "description": "Soporte continuo y optimización de plataformas digitales existentes."
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#101A28]/70 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-widest text-white">KÓDUA</h1>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <a href="#inicio" className="font-semibold text-white hover:text-gray-300 transition">Inicio</a>
            <a href="#servicios" className="font-semibold text-white hover:text-gray-300 transition">Servicios</a>
            <a href="#portafolio" className="font-semibold text-white hover:text-gray-300 transition">Portafolio</a>
            <a href="#testimonios" className="font-semibold text-white hover:text-gray-300 transition">Testimonios</a>
            <a href="#contacto" className="font-semibold text-white hover:text-gray-300 transition">Contacto</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 text-center text-white font-medium">
            <a href="#inicio" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Inicio</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Servicios</a>
            <a href="#portafolio" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Portafolio</a>
            <a href="#testimonios" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Testimonios</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contacto</a>
          </div>
        )}
      </header>

      {/* HERO con Carrusel */}
      <section id="inicio" className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
              <div>
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">{slide.text}</h2>
                <a
                  href="#servicios"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Descubre más
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section id="quienes-somos" className="py-24 bg-[#0D1520] px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
          <p className="text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            En <span className="font-semibold text-white">KÓDUA</span> somos una consultoría joven,
            creativa y apasionada por la tecnología.
            Creemos que cada proyecto tiene un potencial único,
            y nuestra misión es verlo más allá de lo evidente —
            descubrir oportunidades, innovar y transformar ideas en soluciones digitales que dejan huella.
            <br /><br />
            No solo desarrollamos software, diseñamos experiencias que combinan funcionalidad,
            estética y estrategia. Somos ese impulso nuevo que fusiona energía juvenil con
            visión tecnológica y profesionalismo.
          </p>

          {/* Valores o pilares */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-[#101A28] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2 text-white">💡 Innovación</h4>
              <p className="text-gray-400 text-sm">
                Desarrollamos con visión creativa y tecnología moderna, buscando siempre
                soluciones diferentes y efectivas.
              </p>
            </div>

            <div className="bg-[#101A28] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2 text-white">🔥 Energía Joven</h4>
              <p className="text-gray-400 text-sm">
                Somos una nueva generación de desarrolladores y diseñadores digitales,
                llenos de pasión, propósito y mentalidad fresca.
              </p>
            </div>

            <div className="bg-[#101A28] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2 text-white">🤝 Compromiso Real</h4>
              <p className="text-gray-400 text-sm">
                Nos involucramos a fondo en cada proyecto, asegurando que cada línea de código
                aporte valor a tu negocio.
              </p>
            </div>

            <div className="bg-[#101A28] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2 text-white">🚀 Visión de Futuro</h4>
              <p className="text-gray-400 text-sm">
                Vemos más de lo que otros ven: anticipamos tendencias,
                analizamos el impacto digital y proyectamos hacia el mañana.
              </p>
            </div>
          </div>
          {/* Cierre inspiracional */}
          <div className="mt-16 max-w-2xl mx-auto">
            <p className="text-gray-300 italic text-lg">
              “Somos jóvenes, pero con una visión clara: construir el futuro digital con energía, propósito y creatividad.”
            </p>
          </div>
        </div>
      </section>
      {/* Servicios */}
      <section id="servicios" className="py-24 bg-[#101A28] px-6 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">Nuestros Servicios</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          En <span className="text-white font-semibold">KÓDUA</span> impulsamos tu crecimiento digital con soluciones
          creativas, funcionales y seguras. No solo desarrollamos software — construimos experiencias digitales que transforman tu marca.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Servicio 1 */}
          <div className="bg-[#162235] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Sitios Web a Medida</h4>
            <p className="text-gray-400 mb-4">
              Diseñamos y desarrollamos sitios web únicos, modernos y adaptados a tus objetivos de negocio.
            </p>
            <ul className="text-sm text-gray-400 text-left space-y-1">
              <li>• Diseño UX/UI personalizado</li>
              <li>• Optimización SEO</li>
              <li>• Integración con redes sociales</li>
              <li>• Hosting y dominio incluido</li>
            </ul>
          </div>

          {/* Servicio 2 */}
          <div className="bg-[#162235] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Aplicaciones Web</h4>
            <p className="text-gray-400 mb-4">
              Desarrollamos plataformas potentes, escalables y seguras que evolucionan con tu negocio.
            </p>
            <ul className="text-sm text-gray-400 text-left space-y-1">
              <li>• Dashboards y sistemas administrativos</li>
              <li>• Integraciones con APIs y ERPs</li>
              <li>• Desarrollo fullstack con React y Node.js</li>
              <li>• Autenticación y seguridad avanzada</li>
            </ul>
          </div>

          {/* Servicio 3 */}
          <div className="bg-[#162235] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v16h16V4M4 8h16" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Mantenimiento y Soporte</h4>
            <p className="text-gray-400 mb-4">
              Nos encargamos de que tu sistema esté siempre optimizado, actualizado y funcionando sin interrupciones.
            </p>
            <ul className="text-sm text-gray-400 text-left space-y-1">
              <li>• Actualizaciones y mejoras constantes</li>
              <li>• Monitoreo y respaldo de datos</li>
              <li>• Soporte técnico personalizado</li>
              <li>• Auditorías de rendimiento</li>
            </ul>
          </div>

          {/* Servicio 4 */}
          <div className="bg-[#162235] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Consultoría Tecnológica</h4>
            <p className="text-gray-400 mb-4">
              Te ayudamos a planificar estrategias digitales efectivas para optimizar tus procesos y potenciar tu presencia online.
            </p>
            <ul className="text-sm text-gray-400 text-left space-y-1">
              <li>• Asesoría en arquitectura de software</li>
              <li>• Transformación digital</li>
              <li>• Evaluación de proyectos</li>
              <li>• Innovación tecnológica</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="py-24 bg-[#0D1520] px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Tecnologías que usamos</h3>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Utilizamos las herramientas más modernas y confiables del ecosistema web para garantizar rendimiento, seguridad y escalabilidad.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <SiReact className="text-5xl text-cyan-400 mb-2" />
            <span>React.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNodedotjs className="text-5xl text-green-500 mb-2" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-sky-400 mb-2" />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl text-yellow-400 mb-2" />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-5xl text-blue-400 mb-2" />
            <span>PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPhp className="text-5xl text-indigo-400 mb-2" />
            <span>PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPython className="text-5xl text-yellow-300 mb-2" />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-5xl text-yellow-400 mb-2" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiHtml5 className="text-5xl text-orange-500 mb-2" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCss3 className="text-5xl text-blue-500 mb-2" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGit className="text-5xl text-red-500 mb-2" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <SiWordpress className="text-5xl text-blue-500 mb-2" />
            <span>Wordpress</span>
          </div>
        </div>
      </section>
      {/* Portafolio */}
      <section
        id="portafolio"
        className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 text-center"
      >
        <h3 className="text-3xl font-bold mb-12">Proyectos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#162235] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h4 className="text-xl font-bold mb-2">AccesoLab</h4>
            <p className="text-gray-400">
              Sitio corporativo optimizado para laboratorios, con e-comerse, plataforma de pagos, facturacion y logistica de envios.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="bg-cyan-500/20 text-cyan-700 px-3 py-1 rounded-full text-sm">PHP</span>
              <span className="bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-yellow-500/20 text-yellow-700 px-3 py-1 rounded-full text-sm">MySQL</span>
            </div>
          </div>

          <div className="bg-[#162235] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h4 className="text-xl font-bold mb-2">Xochimilco Oculto</h4>
            <p className="text-gray-400">
              Landing de turismo cultural con mapa interactivo, galería multimedia, sistema de reservaciones, pagos en linea, sistema de usuarios y dashboard de administrador.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="bg-cyan-500/20 text-cyan-700 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-yellow-500/20 text-yellow-700 px-3 py-1 rounded-full text-sm">MySQL</span>
            </div>
          </div>

          {/* Nuevo proyecto agregado */}
          <div className="bg-[#162235] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h4 className="text-xl font-bold mb-2">Gino Eventos</h4>
            <p className="text-gray-400">
              Plataforma moderna para la gestión de eventos, reservaciones y cotizaciones,
              desarrollada para un negocio de organización de eventos.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="bg-cyan-500/20 text-cyan-700 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-yellow-500/20 text-yellow-700 px-3 py-1 rounded-full text-sm">MySQL</span>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonios */}
      <section id="testimonios" className="py-24 bg-[#0D1520] px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Lo que dicen nuestros clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "María González",
              text: "KÓDUA transformó completamente la presencia digital de mi negocio. Son muy profesionales y atentos.",
            },
            {
              name: "Luis Hernández",
              text: "Excelente comunicación y resultados. Mi plataforma ahora es más rápida y moderna.",
            },
            {
              name: "Ana Martínez",
              text: "Su equipo entiende realmente lo que necesitas y lo convierte en una solución funcional y estética.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-[#162235] text-gray-400 rounded-xl p-6 shadow-lg">
              <p className="italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-white">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-[#101A28] px-6 text-center text-white">
        <h3 className="text-3xl font-bold mb-6">Hablemos de tu proyecto</h3>
        <p className="mb-10 text-gray-300 max-w-2xl mx-auto">
          ¿Tienes una idea o necesitas optimizar tus procesos digitales?
          En <span className="font-semibold text-white">KÓDUA</span> te ayudamos a crear soluciones a medida,
          con tecnología moderna y resultados medibles.
          Cuéntanos más sobre tu proyecto — ¡nos encantará escucharte!
        </p>

        {/* Botones de contacto */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/524493917215"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:yero991@hotmail.com"
            className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            ✉️ Enviar correo
          </a>
          <a
            href="https://www.linkedin.com/in/andreau-yerovi-acevedo-lópez-8825b854/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            🔗 LinkedIn
          </a>
        </div>
        {/* Formulario visual */}
        {/* <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-lg mx-auto bg-[#0D1520] p-8 rounded-2xl shadow-lg border border-gray-800 text-left"
        >
          <h4 className="text-2xl font-semibold mb-6 text-center">Envíanos un mensaje</h4>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 rounded-lg bg-[#1B2533] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full p-3 rounded-lg bg-[#1B2533] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full p-3 rounded-lg bg-[#1B2533] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Enviar mensaje
            </button>
          </div>
        </form> */}
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#0D1520] text-center text-gray-400">
        <div className="max-w-5xl mx-auto space-y-4">
          <h4 className="text-xl font-semibold text-white">KÓDUA</h4>
          <p>📍 Aguascalientes, México</p>
          <p>🕓 Horario de atención: Lunes a Viernes, 9:00 am – 6:00 pm</p>
          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} KÓDUA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
