import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="contacto" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
      <div ref={ref} className="container max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-10"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Hablemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para trabajar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Tu visión. Mi ejecución. Escríbeme y empecemos a crear algo increíble.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <img
              src="https://cdn.phototourl.com/member/2026-07-21-b0609b66-cc6b-4b82-80df-797721c05443.png"
              alt="Emilio Effect"
              className="h-16 w-16 mx-auto mb-4 object-contain"
            />
            <h3 className="font-display text-2xl font-bold">EMILIO EFFECT</h3>
            <p className="text-muted-foreground mt-1">Creative Designer — Freelancer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:emilioeffect@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-brand/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                <Mail size={20} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Correo</p>
                <p className="text-sm font-medium text-foreground">
                  emilioeffect@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/573018672273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-brand/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                <MessageCircle size={20} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">WhatsApp</p>
                <p className="text-sm font-medium text-foreground">
                  +57 301 867 2273
                </p>
              </div>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-sm text-muted-foreground">
              Respuesta en menos de 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
