import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MessageCircle, Search, Lightbulb, PenTool, Repeat, CheckCircle } from "lucide-react";

const steps = [
  { num: "01", icon: MessageCircle, title: "Cuéntame tu idea", desc: "Me compartes tu visión, referencias y objetivos del proyecto." },
  { num: "02", icon: Search, title: "Analizo tus necesidades", desc: "Estudio tu marca, competencia y lo que necesitas lograr." },
  { num: "03", icon: Lightbulb, title: "Desarrollo la propuesta creativa", desc: "Te presento conceptos y direcciones visuales para tu aprobación." },
  { num: "04", icon: PenTool, title: "Diseño el proyecto", desc: "Ejecuto el diseño con atención al detalle y calidad profesional." },
  { num: "05", icon: Repeat, title: "Realizamos ajustes", desc: "Ajustamos hasta que el resultado sea exactamente lo que necesitas." },
  { num: "06", icon: CheckCircle, title: "Entrega final", desc: "Recibes todos los archivos en los formatos que necesites." },
];

export function ProcessSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="proceso" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent" />
      <div ref={ref} className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Cómo trabajo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Proceso de trabajo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso claro y organizado para que siempre sepas en qué punto está tu proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.08 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-brand font-bold">{step.num}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent" />
                </div>
                <step.icon size={28} className="text-brand mb-3" />
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
