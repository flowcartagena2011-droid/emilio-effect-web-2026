import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Film, Palette, Megaphone, Lightbulb, Clapperboard,
  Music, Brain, Box, Sun,
} from "lucide-react";

const specialties = [
  {
    icon: Film,
    title: "Motion Graphics",
    benefit: "Doy movimiento a tus ideas. Animaciones profesionales que capturan atención y transmiten mensajes con impacto visual.",
  },
  {
    icon: Palette,
    title: "Branding",
    benefit: "Construyo identidades visuales completas que hacen que tu marca sea reconocible, memorable y profesional.",
  },
  {
    icon: Megaphone,
    title: "Diseño Publicitario",
    benefit: "Creo piezas que no solo se ven bien, sino que convierten. Diseño orientado a resultados y engagement.",
  },
  {
    icon: Lightbulb,
    title: "Dirección Creativa",
    benefit: "Lidero la visión visual de tu proyecto desde el concepto hasta la ejecución final con criterio profesional.",
  },
  {
    icon: Clapperboard,
    title: "Producción Audiovisual",
    benefit: "Produzco contenido visual completo: desde la edición hasta el color grading y los efectos visuales.",
  },
  {
    icon: Music,
    title: "Cover Art",
    benefit: "Diseño portadas musicales que se ven increíbles en Spotify, Apple Music y todas las plataformas.",
  },
  {
    icon: Brain,
    title: "IA",
    benefit: "Integro inteligencia artificial en procesos creativos para resultados innovadores y diferenciados.",
  },
  {
    icon: Box,
    title: "3D",
    benefit: "Creo modelos, renders y animaciones 3D que elevan cualquier proyecto al siguiente nivel.",
  },
  {
    icon: Sun,
    title: "Color Grading",
    benefit: "Transformo el look de tus videos con corrección y grading profesional de nivel cinematográfico.",
  },
];

export function SpecialtiesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 lg:py-32 relative">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Lo que me diferencia
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Especialidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Áreas donde mi experiencia se traduce en resultados concretos para tu proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.04 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                <spec.icon size={24} className="text-brand" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {spec.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {spec.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
