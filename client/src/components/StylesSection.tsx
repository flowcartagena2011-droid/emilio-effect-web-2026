import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const styles = [
  { name: "Minimalista", desc: "Limpio, con espacio, sin ruido visual. Ideal para marcas premium y productos de lujo." },
  { name: "Luxury", desc: "Elegancia extrema con tipografía refinada y acabados dorados o metálicos. Para marcas de alta gama." },
  { name: "Streetwear", desc: "Bold, urbano y con actitud. Perfecto para marcas de moda urbana, sneakers y cultura street." },
  { name: "Urbano", desc: "Conexión con la calle, graffiti y cultura ciudadana. Para eventos y marcas locales." },
  { name: "Corporativo", desc: "Profesional, estructurado y confiable. Para empresas, presentaciones y comunicaciones oficiales." },
  { name: "Elegante", desc: "Sofisticación con tipografía serif y paletas sobrias. Para bodas, invitaciones y marcas femeninas." },
  { name: "Editorial", desc: "Inspirado en revistas y publicaciones. Layouts complejos con jerarquía tipográfica fuerte." },
  { name: "Oscuro", desc: "Fondos negros, contrastes intensos y atmósfera cinematográfica. Para eventos nocturnos y tech." },
  { name: "Moderno", desc: "Tendencias actuales, gradientes y formas orgánicas. Para startups y marcas innovadoras." },
  { name: "Retro", desc: "Nostalgia de los 70s-90s con colores cálidos y texturas vintage. Para eventos temáticos." },
  { name: "Vintage", desc: "Estética clásica con texturas envejecidas y paletas desaturadas. Para marcas con historia." },
  { name: "Futurista", desc: "Holográfico, neón y geometría avanzada. Para eventos tech, gaming y ciencia ficción." },
  { name: "Cyberpunk", desc: "Neón saturado, glitch y distopía digital. Para música electrónica y cultura gaming." },
  { name: "Cinematográfico", desc: "Atmósfera de película con color grading y composición dramática. Para trailers y eventos." },
  { name: "Realista", desc: "Fotorrealismo y detalles hiperprecisos. Para publicidad de producto y retratos." },
  { name: "Fotomanipulación", desc: "Composición de múltiples elementos en una escena imposible. Para portadas y arte conceptual." },
  { name: "Concept Art", desc: "Ilustración narrativa para mundos imaginarios. Para juegos, libros y franquicias." },
  { name: "Ilustración", desc: "Arte dibujado a mano o digital con estilo personalizado. Para branding y editorial." },
  { name: "3D", desc: "Modelado tridimensional con materiales y iluminación realista. Para producto y arquitectura." },
  { name: "Anime", desc: "Estética japonesa con colores vibrantes y expresiones dinámicas. Para cultura pop y gaming." },
  { name: "Comercial", desc: "Directo al punto de venta, CTAs claros y diseño orientado a conversión. Para publicidad." },
  { name: "Publicitario", desc: "Impacto visual inmediato para captar atención en segundos. Para campañas y redes." },
  { name: "Premium", desc: "La máxima calidad visual con acabados de alto nivel. Para cualquier proyecto que necesite destacarse." },
];

export function StylesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="estilos" className="py-24 lg:py-32 relative">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Versatilidad
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Estilos de diseño
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trabajo diferentes estilos según el proyecto. No me limito a uno solo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {styles.map((style, i) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.05 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
            >
              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
                {style.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {style.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
