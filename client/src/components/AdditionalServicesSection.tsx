import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Calendar, Music, Clock, Users, QrCode, Map, Info } from "lucide-react";

const additionalServices = [
  { name: "Cronograma", icon: Calendar, desc: "Diseño visual del cronograma completo del evento." },
  { name: "Line Up", icon: Music, desc: "Diseño del line up con artistas y horarios." },
  { name: "Cuenta Regresiva", icon: Clock, desc: "Diseños de cuenta regresiva para redes sociales." },
  { name: "Patrocinadores", icon: Users, desc: "Diseño de placa de patrocinadores y logos." },
  { name: "QR", icon: QrCode, desc: "Diseño de códigos QR personalizados para el evento." },
  { name: "Mapa", icon: Map, desc: "Diseño del mapa del evento con ubicaciones." },
  { name: "Información", icon: Info, desc: "Piezas informativas del evento (precio, lugar, etc)." },
];

export function AdditionalServicesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 lg:py-32 relative">
      <div ref={ref} className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Extras
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Servicios adicionales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Piezas complementarias para eventos. Precio desde $20,000 hasta $40,000 COP por unidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {additionalServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.04 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-xl p-5 text-center hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                <service.icon size={20} className="text-brand" />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                {service.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
              <p className="text-xs font-mono text-brand mt-3 font-medium">
                $20,000 - $40,000
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
