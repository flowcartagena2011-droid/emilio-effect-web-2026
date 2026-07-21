import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function HeroSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.phototourl.com/member/2026-07-21-1ab8d4e6-3053-4197-ac06-28a01590f7f7.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div ref={ref} className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-brand font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Creative Designer — Freelancer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          EMILIO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
            EFFECT
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {["Diseño Gráfico", "Motion Graphics", "Producción Audiovisual", "Branding", "Inteligencia Artificial"].map(
            (skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium text-muted-foreground"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {skill}
              </span>
            )
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          "Desarrollo soluciones visuales profesionales para artistas, empresas,
          marcas, eventos y creadores de contenido."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servicios"
            className="px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-all duration-200 active:scale-95"
          >
            Ver servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border border-white/10 text-foreground font-medium rounded-xl hover:bg-white/5 transition-all duration-200 active:scale-95"
          >
            Contrátame
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-brand rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
