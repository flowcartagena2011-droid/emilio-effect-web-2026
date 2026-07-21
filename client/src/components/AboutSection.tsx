import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function AboutSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="que-hago" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
      <div ref={ref} className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Sobre mí
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            ¿Qué hago?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card rounded-2xl p-8 md:p-12 mt-8"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Me especializo en desarrollar <span className="text-foreground font-medium">soluciones visuales completas</span> para cualquier tipo de proyecto. No me limito a un solo estilo ni formato. Desde flyers hasta producción audiovisual, desde branding hasta inteligencia artificial generativa.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Con <span className="text-brand font-semibold">11 años de experiencia</span>, adapto cada diseño según la identidad y necesidad del cliente. Mi objetivo es que cada pieza visual comunique exactamente lo que tu marca necesita transmitir.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Diseño. Desarrollo. Produzco. Creo. Entrego. Todo con un nivel de calidad que refleja experiencia real y compromiso con el resultado final.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
