import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type PriceRow = {
  category: string;
  service: string;
  price: string;
  delivery: string;
  notes: string;
};

const prices: PriceRow[] = [
  // Diseño Gráfico
  { category: "Diseño Gráfico", service: "Flyers", price: "$80,000", delivery: "24-48h", notes: "2 versiones de color" },
  { category: "Diseño Gráfico", service: "Flyers Premium", price: "$200,000", delivery: "48-72h", notes: "Incluye mockup" },
  { category: "Diseño Gráfico", service: "Flyers Illustrator", price: "$250,000", delivery: "72-96h", notes: "Arte original" },
  { category: "Diseño Gráfico", service: "Publicidad", price: "$120,000", delivery: "24-48h", notes: "Formatos múltiples" },
  { category: "Diseño Gráfico", service: "Carruseles", price: "$180,000", delivery: "48-72h", notes: "Hasta 10 placas" },
  { category: "Diseño Gráfico", service: "Historias", price: "$80,000", delivery: "24h", notes: "Formato vertical" },
  { category: "Diseño Gráfico", service: "Posts", price: "$100,000", delivery: "24-48h", notes: "Formato 1:1" },
  { category: "Diseño Gráfico", service: "Miniaturas", price: "$80,000", delivery: "24h", notes: "Alta resolución" },
  { category: "Diseño Gráfico", service: "Banners", price: "$120,000", delivery: "48h", notes: "Personalizado" },
  { category: "Diseño Gráfico", service: "Banners YouTube", price: "$150,000", delivery: "48h", notes: "Banner + avatar" },
  { category: "Diseño Gráfico", service: "Banners Redes Sociales", price: "$100,000", delivery: "24-48h", notes: "Multi-plataforma" },
  { category: "Diseño Gráfico", service: "Packaging", price: "$350,000", delivery: "5-7 días", notes: "Diseño + mockup 3D" },
  { category: "Diseño Gráfico", service: "Papelería Corporativa", price: "$400,000", delivery: "5-7 días", notes: "Kit completo" },
  { category: "Diseño Gráfico", service: "Mockups", price: "$150,000", delivery: "48h", notes: "Realistas HD" },
  { category: "Diseño Gráfico", service: "Fotomanipulación", price: "$200,000", delivery: "3-5 días", notes: "Composición avanzada" },
  // Música
  { category: "Música", service: "Cover Art", price: "$150,000", delivery: "48-72h", notes: "Formato digital" },
  { category: "Música", service: "Cover Art Premium", price: "$350,000", delivery: "5-7 días", notes: "Ilustración + mockup" },
  { category: "Música", service: "Spotify Canvas", price: "$120,000", delivery: "48h", notes: "Loop 3-8 seg" },
  { category: "Música", service: "Visualizer", price: "$200,000", delivery: "72h", notes: "Audio reactivo" },
  { category: "Música", service: "Text Art", price: "$100,000", delivery: "48h", notes: "Tipografía cinética" },
  { category: "Música", service: "Motion Cover", price: "$250,000", delivery: "5-7 días", notes: "Cover animada" },
  { category: "Música", service: "Logo Reveal", price: "$200,000", delivery: "72h", notes: "Sin sonido" },
  { category: "Música", service: "Intro", price: "$300,000", delivery: "5-7 días", notes: "5-15 segundos" },
  // Motion Graphics
  { category: "Motion Graphics", service: "Motion Flyer", price: "$250,000", delivery: "3-5 días", notes: "10-15 seg" },
  { category: "Motion Graphics", service: "Motion Poster", price: "$350,000", delivery: "5-7 días", notes: "Alta resolución" },
  { category: "Motion Graphics", service: "Motion Ads", price: "$300,000", delivery: "5-7 días", notes: "Multi-formato" },
  { category: "Motion Graphics", service: "Animaciones", price: "$400,000", delivery: "5-7 días", notes: "Custom según brief" },
  { category: "Motion Graphics", service: "Contenido Animado", price: "$500,000", delivery: "7-10 días", notes: "Optimizado" },
  // Producción Audiovisual
  { category: "Audiovisual", service: "Edición de Video", price: "$200,000", delivery: "3-5 días", notes: "Corte + transiciones" },
  { category: "Audiovisual", service: "Edición de Reels", price: "$150,000", delivery: "24-48h", notes: "Vertical" },
  { category: "Audiovisual", service: "Color Grading", price: "$180,000", delivery: "48-72h", notes: "Cinematográfico" },
  { category: "Audiovisual", service: "VFX", price: "$400,000", delivery: "5-10 días", notes: "Composiciones" },
  { category: "Audiovisual", service: "GFX", price: "$250,000", delivery: "3-5 días", notes: "Gráficos en movimiento" },
  { category: "Audiovisual", service: "SFX", price: "$150,000", delivery: "48-72h", notes: "Diseño sonoro" },
  { category: "Audiovisual", service: "Videos Promocionales", price: "$500,000", delivery: "7-10 días", notes: "Producción completa" },
  { category: "Audiovisual", service: "Contenido Comercial", price: "$400,000", delivery: "5-7 días", notes: "Multi-formato" },
  // IA
  { category: "Inteligencia Artificial", service: "Publicidad IA", price: "$200,000", delivery: "3-5 días", notes: "Generación + retoque" },
  { category: "Inteligencia Artificial", service: "Concept Art IA", price: "$180,000", delivery: "48-72h", notes: "Post-producción" },
  { category: "Inteligencia Artificial", service: "Fotografía IA", price: "$150,000", delivery: "24-48h", notes: "Imágenes HD" },
  { category: "Inteligencia Artificial", service: "Video IA", price: "$300,000", delivery: "5-7 días", notes: "Generación + edición" },
  { category: "Inteligencia Artificial", service: "Animación IA", price: "$250,000", delivery: "3-5 días", notes: "Post-producción" },
  // 3D
  { category: "3D", service: "Modelado", price: "$400,000", delivery: "5-10 días", notes: "Modelo + renders" },
  { category: "3D", service: "Render", price: "$300,000", delivery: "3-5 días", notes: "HD con materiales" },
  { category: "3D", service: "Escenarios", price: "$500,000", delivery: "7-14 días", notes: "Completos" },
  { category: "3D", service: "Productos", price: "$350,000", delivery: "5-7 días", notes: "Multi-ángulo" },
  { category: "3D", service: "Animaciones 3D", price: "$500,000", delivery: "7-14 días", notes: "Animación completa" },
  // Diseño Textil
  { category: "Diseño Textil", service: "DTF", price: "$120,000", delivery: "48h", notes: "Optimizado" },
  { category: "Diseño Textil", service: "DTG", price: "$120,000", delivery: "48h", notes: "Optimizado" },
  { category: "Diseño Textil", service: "Vectorización", price: "$80,000", delivery: "24h", notes: "Vectorial editable" },
  { category: "Diseño Textil", service: "Semitonos", price: "$100,000", delivery: "48h", notes: "Separación colores" },
];

export function PricingSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="precios" className="py-24 lg:py-32 relative">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Transparencia total
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Lista de precios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Precios competitivos para Colombia. Todo con 11 años de experiencia profesional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Categoría</th>
                  <th className="px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Servicio</th>
                  <th className="px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Precio desde</th>
                  <th className="px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">Entrega</th>
                  <th className="px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Observaciones</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-3">
                      <span className="text-xs px-2 py-1 rounded-md bg-brand/10 text-brand font-medium">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">
                      {row.service}
                    </td>
                    <td className="px-5 py-3">
                      <span className="font-mono text-sm text-brand font-semibold">
                        {row.price}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell">
                      {row.delivery}
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground/70 hidden lg:table-cell">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Los precios son orientativos y pueden variar según la complejidad del proyecto.
          Precios en pesos colombianos (COP). Descuentos por volumen disponibles.
        </motion.p>
      </div>
    </section>
  );
}
