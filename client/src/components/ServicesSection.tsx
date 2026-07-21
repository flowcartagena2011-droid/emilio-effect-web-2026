import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Palette, Music, Film, Clapperboard, Brain, Box, Shirt,
} from "lucide-react";

type ServiceCategory = {
  id: string;
  name: string;
  icon: React.ElementType;
  image: string;
  services: {
    name: string;
    desc: string;
    para: string;
    incluye: string;
    paraQuien: string;
    precio: string;
  }[];
};

const categories: ServiceCategory[] = [
  {
    id: "diseno-grafico",
    name: "Diseño Gráfico",
    icon: Palette,
    image: "/manus-storage/design-graphic_d6dde40e.png",
    services: [
      { name: "Flyers", desc: "Diseño de flyers para eventos, promociones y campañas.", para: "Eventos, negocios locales, promociones.", incluye: "Diseño en alta resolución, 2 versiones de color.", paraQuien: "Eventos, restaurantes, negocios.", precio: "Desde $80,000" },
      { name: "Flyers Premium", desc: "Flyers de alta calidad con efectos y composiciones avanzadas.", para: "Eventos exclusivos, lanzamientos de marca.", incluye: "Diseño premium, mockup, archivo editable.", paraQuien: "Marcas premium, DJs, productores.", precio: "Desde $200,000" },
      { name: "Flyers Illustrator", desc: "Flyers ilustrados con arte original y personalizada.", para: "Proyectos creativos con identidad fuerte.", incluye: "Ilustración custom, 2 versiones, archivo vectorial.", paraQuien: "Artistas, festivales, marcas creativas.", precio: "Desde $250,000" },
      { name: "Publicidad", desc: "Piezas publicitarias optimizadas para conversiones.", para: "Campañas digitales, ads en redes sociales.", incluye: "Diseño optimizado, formatos múltiples.", paraQuien: "Empresas, emprendedores, e-commerce.", precio: "Desde $120,000" },
      { name: "Carruseles", desc: "Carruseles para Instagram con storytelling visual.", para: "Contenido educativo y narrativo en redes.", incluye: "Hasta 10 placas, diseño cohesivo.", paraQuien: "Creadores de contenido, coaches.", precio: "Desde $180,000" },
      { name: "Historias", desc: "Diseños verticales para Stories de Instagram y Facebook.", para: "Contenido diario y promociones en stories.", incluye: "Diseño vertical, formato optimizado.", paraQuien: "Influencers, marcas, negocios.", precio: "Desde $80,000" },
      { name: "Posts", desc: "Diseños cuadrados para feed de redes sociales.", para: "Publicaciones diarias y contenido regular.", incluye: "Diseño 1:1, formato optimizado.", paraQuien: "Marcas, negocios, creadores.", precio: "Desde $100,000" },
      { name: "Miniaturas", desc: "Thumbnails para YouTube que capturan clicks.", para: "Canales de YouTube y contenido en video.", incluye: "Diseño 16:9, alta resolución.", paraQuien: "YouTubers, creadores de video.", precio: "Desde $80,000" },
      { name: "Banners", desc: "Banners publicitarios para web y redes.", para: "Campañas publicitarias y promociones web.", incluye: "Formato personalizado, alta resolución.", paraQuien: "Agencias, empresas, eventos.", precio: "Desde $120,000" },
      { name: "Banners YouTube", desc: "Arte de canal completo para YouTube.", para: "Canales de YouTube profesionales.", incluye: "Banner + avatar + icono.", paraQuien: "YouTubers, marcas de video.", precio: "Desde $150,000" },
      { name: "Banners Redes Sociales", desc: "Portadas y banners para todas las plataformas.", para: "Presencia profesional en redes sociales.", incluye: "Formatos múltiples, diseño adaptado.", paraQuien: "Empresas, artistas, negocios.", precio: "Desde $100,000" },
      { name: "Packaging", desc: "Diseño de empaques y etiquetas de producto.", para: "Productos físicos y marcas comerciales.", incluye: "Diseño + mockup 3D.", paraQuien: "Marcas de producto, e-commerce.", precio: "Desde $350,000" },
      { name: "Papelería Corporativa", desc: "Tarjetas, membretes, carpetas y más.", para: "Imagen corporativa profesional.", incluye: "Tarjeta + membrete + sobre + carpeta.", paraQuien: "Empresas, profesionales.", precio: "Desde $400,000" },
      { name: "Mockups", desc: "Presentaciones realistas de diseños en contexto.", para: "Presentaciones a clientes y portafolio.", incluye: "Mockups realistas de alta calidad.", paraQuien: "Diseñadores, marcas, agencias.", precio: "Desde $150,000" },
      { name: "Fotomanipulación", desc: "Composición de imágenes creativas y surrealistas.", para: "Portadas, posters y arte conceptual.", incluye: "Composición final + archivo editable.", paraQuien: "Artistas, marcas, editorial.", precio: "Desde $200,000" },
    ],
  },
  {
    id: "musica",
    name: "Música",
    icon: Music,
    image: "/manus-storage/music-cover_981e6797.png",
    services: [
      { name: "Cover Art", desc: "Diseño de portadas para singles y álbumes.", para: "Lanzamientos musicales en todas las plataformas.", incluye: "Diseño + formato digital.", paraQuien: "Artistas, productores, sellos.", precio: "Desde $150,000" },
      { name: "Cover Art Premium", desc: "Portadas de alta calidad con ilustración o fotomanipulación.", para: "Lanzamientos importantes y EPs.", incluye: "Diseño premium + mockup + archivo editable.", paraQuien: "Artistas de nivel, sellos discográficos.", precio: "Desde $350,000" },
      { name: "Spotify Canvas", desc: "Videos cortos en loop para Spotify.", para: "Canciones en Spotify para mayor engagement.", incluye: "Canvas 9:16, 3-8 segundos.", paraQuien: "Artistas en Spotify.", precio: "Desde $120,000" },
      { name: "Visualizer", desc: "Animaciones con audio reactivo para videos musicales.", para: "YouTube, redes sociales y presentaciones.", incluye: "Video con waveforms y animación.", paraQuien: "Productores, DJs, artistas.", precio: "Desde $200,000" },
      { name: "Text Art", desc: "Tipografía cinética y lyric videos.", para: "Letras de canciones animadas.", incluye: "Animación tipográfica sincronizada.", paraQuien: "Artistas, videoclips.", precio: "Desde $100,000" },
      { name: "Motion Cover", desc: "Portada animada en video.", para: "Lanzamientos con impacto visual.", incluye: "Animación de cover art en video.", paraQuien: "Artistas, sellos.", precio: "Desde $250,000" },
      { name: "Logo Reveal", desc: "Animación de logo con efectos profesionales.", para: "Intros, presentaciones y branding animado.", incluye: "Animación HD, sin sonido.", paraQuien: "Marcas, artistas, empresas.", precio: "Desde $200,000" },
      { name: "Intro", desc: "Introducciones animadas personalizadas.", para: "Canales, podcasts y presentaciones.", incluye: "Intro animada de 5-15 segundos.", paraQuien: "YouTubers, DJs, marcas.", precio: "Desde $300,000" },
    ],
  },
  {
    id: "motion",
    name: "Motion Graphics",
    icon: Film,
    image: "/manus-storage/motion-graphics_bab3c803.png",
    services: [
      { name: "Motion Flyer", desc: "Flyers animados con movimiento y efectos.", para: "Promociones dinámicas en redes sociales.", incluye: "Video animado 10-15 seg.", paraQuien: "Eventos, DJs, marcas.", precio: "Desde $250,000" },
      { name: "Motion Poster", desc: "Posters con animación sutil o completa.", para: "Películas, eventos y lanzamientos.", incluye: "Poster animado en alta resolución.", paraQuien: "Cineastas, eventos, marcas.", precio: "Desde $350,000" },
      { name: "Motion Ads", desc: "Anuncios animados optimizados para redes.", para: "Campañas publicitarias con mayor engagement.", incluye: "Video ad, formatos múltiples.", paraQuien: "Empresas, e-commerce.", precio: "Desde $300,000" },
      { name: "Animaciones", desc: "Animaciones 2D para cualquier proyecto.", para: "Explicativos, intros, contenido animado.", incluye: "Animación custom según brief.", paraQuien: "Marcas, educadores, empresas.", precio: "Desde $400,000" },
      { name: "Contenido Animado", desc: "Piezas animadas para redes y presentaciones.", para: "Social media, presentaciones, pitch decks.", incluye: "Animación optimizada para formato.", paraQuien: "Agencias, marcas, creadores.", precio: "Desde $500,000" },
    ],
  },
  {
    id: "audiovisual",
    name: "Producción Audiovisual",
    icon: Clapperboard,
    image: "/manus-storage/audiovisual_fa49ae6b.png",
    services: [
      { name: "Edición de Video", desc: "Edición profesional para cualquier formato.", para: "Videos de YouTube, corporativos, eventos.", incluye: "Corte, transiciones, música, color básico.", paraQuien: "YouTubers, empresas, creadores.", precio: "Desde $200,000" },
      { name: "Edición de Reels", desc: "Edición dinámica para Reels y TikToks.", para: "Contenido vertical de alto impacto.", incluye: "Edición rápida, efectos, música.", paraQuien: "Influencers, marcas, creadores.", precio: "Desde $150,000" },
      { name: "Color Grading", desc: "Corrección y grading profesional de color.", para: "Videos con look cinematográfico.", incluye: "Color grading completo, LUTs custom.", paraQuien: "Cineastas, productoras, marcas.", precio: "Desde $180,000" },
      { name: "VFX", desc: "Efectos visuales avanzados para video.", para: "Videos con composiciones complejas.", incluye: "Chroma, tracking, partículas, compositing.", paraQuien: "Productoras, artistas, marcas.", precio: "Desde $400,000" },
      { name: "GFX", desc: "Gráficos generados por computadora para video.", para: "Lower thirds, overlays, gráficos en movimiento.", incluye: "Gráficos animados integrados al video.", paraQuien: "Noticieros, eventos, marcas.", precio: "Desde $250,000" },
      { name: "SFX", desc: "Diseño sonoro y efectos de sonido.", para: "Videos que necesitan audio inmersivo.", incluye: "Diseño sonoro completo.", paraQuien: "Productoras, cineastas.", precio: "Desde $150,000" },
      { name: "Videos Promocionales", desc: "Videos completos de promoción para marcas.", para: "Lanzamientos, campañas, eventos.", incluye: "Guion + edición + color + música.", paraQuien: "Empresas, artistas, eventos.", precio: "Desde $500,000" },
      { name: "Contenido Comercial", desc: "Videos publicitarios de alta calidad.", para: "Campañas de marca y productos.", incluye: "Producción completa, multi-formato.", paraQuien: "Empresas, agencias, e-commerce.", precio: "Desde $400,000" },
    ],
  },
  {
    id: "ia",
    name: "Inteligencia Artificial",
    icon: Brain,
    image: "/manus-storage/ai-art_4bfdd632.png",
    services: [
      { name: "Publicidad IA", desc: "Piezas publicitarias generadas con IA.", para: "Campañas con estilo innovador y diferenciado.", incluye: "Generación + retoque + formato final.", paraQuien: "Marcas, agencias, emprendedores.", precio: "Desde $200,000" },
      { name: "Concept Art IA", desc: "Arte conceptual generado con inteligencia artificial.", para: "Proyectos creativos, libros, juegos.", incluye: "Generación IA + post-producción.", paraQuien: "Game devs, escritores, artistas.", precio: "Desde $180,000" },
      { name: "Fotografía IA", desc: "Imágenes fotorrealistas generadas con IA.", para: "Catálogos, portadas, contenido visual.", incluye: "Imágenes HD generadas y retocadas.", paraQuien: "Marcas, editorial, e-commerce.", precio: "Desde $150,000" },
      { name: "Video IA", desc: "Videos generados o asistidos por inteligencia artificial.", para: "Contenido innovador para redes y campañas.", incluye: "Video generado IA + edición.", paraQuien: "Creadores, marcas, agencias.", precio: "Desde $300,000" },
      { name: "Animación IA", desc: "Animaciones creadas con herramientas de IA.", para: "Contenido animado de vanguardia.", incluye: "Animación IA + post-producción.", paraQuien: "Marcas, creadores, empresas.", precio: "Desde $250,000" },
    ],
  },
  {
    id: "3d",
    name: "3D",
    icon: Box,
    image: "/manus-storage/3d-modeling_3086926c.png",
    services: [
      { name: "Modelado", desc: "Creación de modelos 3D para cualquier uso.", para: "Producto, arquitectura, personajes.", incluye: "Modelo 3D + renders.", paraQuien: "Marcas, game devs, arquitectos.", precio: "Desde $400,000" },
      { name: "Render", desc: "Renders fotorrealistas de modelos 3D.", para: "Presentaciones de producto y arquitectura.", incluye: "Render HD con iluminación y materiales.", paraQuien: "Inmobiliarias, marcas de producto.", precio: "Desde $300,000" },
      { name: "Escenarios", desc: "Creación de ambientes y escenarios 3D.", para: "Juegos, VR, presentaciones inmersivas.", incluye: "Escenario 3D completo con materiales.", paraQuien: "Game devs, productoras, marcas.", precio: "Desde $500,000" },
      { name: "Productos", desc: "Modelado y render de productos en 3D.", para: "Catálogos, e-commerce, publicidad.", incluye: "Modelo 3D + renders multi-ángulo.", paraQuien: "E-commerce, marcas de producto.", precio: "Desde $350,000" },
      { name: "Animaciones 3D", desc: "Animaciones con modelos y escenarios 3D.", para: "Comerciales, intros, contenido animado.", incluye: "Animación 3D completa.", paraQuien: "Marcas, productoras, agencias.", precio: "Desde $500,000" },
    ],
  },
  {
    id: "textil",
    name: "Diseño Textil",
    icon: Shirt,
    image: "/manus-storage/textile_1f00c8cc.png",
    services: [
      { name: "DTF", desc: "Diseños optimizados para transferencia DTF.", para: "Estampado en prendas de alta calidad.", incluye: "Diseño en alta resolución optimizado.", paraQuien: "Marcas de ropa, emprendedores.", precio: "Desde $120,000" },
      { name: "DTG", desc: "Diseños para impresión directa en prenda.", para: "Producción textil personalizada.", incluye: "Diseño optimizado para DTG.", paraQuien: "Marcas de ropa, negocios.", precio: "Desde $120,000" },
      { name: "Vectorización", desc: "Conversión de imágenes a vectores escalables.", para: "Logos, estampados, producción a gran escala.", incluye: "Archivo vectorial editable.", paraQuien: "Imprentas, marcas, diseñadores.", precio: "Desde $80,000" },
      { name: "Semitonos", desc: "Diseños con efecto semitono para estampado.", para: "Prendas con diseño vintage o artístico.", incluye: "Diseño con separación de colores.", paraQuien: "Marcas de streetwear, artistas.", precio: "Desde $100,000" },
    ],
  },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, isInView } = useInView(0.1);
  const current = categories[activeCategory];

  return (
    <section id="servicios" className="py-24 lg:py-32 relative">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Lo que ofrezco
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones visuales completas organizadas por categoría.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === i
                  ? "bg-brand text-white shadow-lg shadow-brand/20"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon size={16} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {current.services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.03 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-brand transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.desc}
              </p>
              <div className="space-y-2 text-xs text-muted-foreground/80">
                <p><span className="text-brand">Para qué sirve:</span> {service.para}</p>
                <p><span className="text-brand">Incluye:</span> {service.incluye}</p>
                <p><span className="text-brand">Quién lo necesita:</span> {service.paraQuien}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="font-mono text-sm text-brand font-medium">
                  {service.precio}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
