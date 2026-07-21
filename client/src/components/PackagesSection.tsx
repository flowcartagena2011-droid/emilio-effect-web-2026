import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Star, Zap, Crown, Share2, Download } from "lucide-react";

const packages = [
  {
    icon: Star,
    name: "Paquete Eventos",
    forWho: "Promotores, DJs, organizadores de eventos y festivales.",
    includes: [
      "Flyer principal del evento",
      "Cuenta regresiva (5 posts)",
      "Line Up completo",
      "Cronograma visual",
      "Banners para redes sociales",
      "Historias animadas (3 unidades)",
      "Poster principal",
      "Información visual del evento",
    ],
    benefits: "Todo el material visual que necesitas para vender entradas y generar expectativa. Desde el anuncio hasta el día del evento.",
    delivery: "5-7 días",
    price: "$750,000",
  },
  {
    icon: Zap,
    name: "Paquete Artistas",
    forWho: "Músicos, DJs, productores y cantantes.",
    includes: [
      "Cover Art para single/EP",
      "Spotify Canvas",
      "Visualizer",
      "Banners para redes sociales",
      "Pack de historias (5 unidades)",
      "Logo Reveal",
      "Intro animada",
      "Portadas para redes sociales",
    ],
    benefits: "Lanzamiento completo con identidad visual coherente en todas las plataformas. Desde el cover hasta el contenido animado.",
    delivery: "7-10 días",
    price: "$1,200,000",
  },
  {
    icon: Crown,
    name: "Paquete Empresas",
    forWho: "Empresas, startups y marcas comerciales.",
    includes: [
      "Papelería corporativa completa",
      "Pack de posts (10 unidades)",
      "Carrusel informativo (5 placas)",
      "Banner publicitario",
      "Video promocional (30 seg)",
      "Presentación corporativa",
      "Mockups de producto",
      "Adaptaciones para todas las redes",
    ],
    benefits: "Imagen corporativa profesional y contenido para redes sociales que posiciona tu marca como líder en el mercado.",
    delivery: "10-15 días",
    price: "$2,000,000",
  },
  {
    icon: Share2,
    name: "Paquete Redes Sociales",
    forWho: "Influencers, creadores de contenido y negocios digitales.",
    includes: [
      "Pack de posts (15 unidades)",
      "Carruseles (5 unidades)",
      "Historias (10 unidades)",
      "Miniaturas YouTube (5 unidades)",
      "Banners para todas las plataformas",
      "Reels editados (3 unidades)",
      "Pack de stories animadas (5 unidades)",
      "Calendario visual de contenido",
    ],
    benefits: "Un mes completo de contenido visual profesional listo para publicar. Mantén tu presencia constante sin esfuerzo.",
    delivery: "7-10 días",
    price: "$1,500,000",
  },
];

export function PackagesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="paquetes" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[200px]" />
      <div ref={ref} className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Ahorra más
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Paquetes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones completas con descuento. Más servicios por menos precio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-2xl p-7 hover:bg-white/[0.06] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <pkg.icon size={24} className="text-brand" />
                </div>
                <div className="text-right">
                  <p className="font-mono text-2xl font-bold text-brand">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground">COP</p>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-sm text-brand font-medium mb-4">
                {pkg.forWho}
              </p>

              <ul className="space-y-2 mb-5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
                {pkg.benefits}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-muted-foreground">
                  Entrega: {pkg.delivery}
                </span>
                <a
                  href="#contacto"
                  className="text-sm font-medium text-brand hover:text-brand-light transition-colors"
                >
                  Consultar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom package */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 glass-card rounded-2xl p-8 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Paquete Personalizado
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            "No todos los proyectos son iguales. Por eso desarrollo propuestas completamente personalizadas según las necesidades, objetivos y presupuesto de cada cliente."
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-brand text-white font-medium rounded-xl hover:bg-brand/90 transition-all duration-200 active:scale-95"
          >
            <Download size={16} />
            Solicitar cotización personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
}
