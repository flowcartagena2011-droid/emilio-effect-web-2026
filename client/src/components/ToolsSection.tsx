import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const tools = [
  { name: "Adobe Photoshop", category: "Diseño & Fotomanipulación", icon: "https://cdn.phototourl.com/member/2026-07-21-74e4838e-a409-4a7b-bdb2-4e9774280622.png" },
  { name: "Adobe Illustrator", category: "Diseño Vectorial", icon: "https://cdn.phototourl.com/member/2026-07-21-89a6bf14-5d19-4189-a990-629ce86b9407.png" },
  { name: "Adobe After Effects", category: "Motion Graphics", icon: "https://cdn.phototourl.com/member/2026-07-21-35db0b92-7a66-4361-97e1-c7c9e1b09a1d.png" },
  { name: "Premiere Pro", category: "Edición de Video", icon: "https://cdn.phototourl.com/member/2026-07-21-fa29e106-dd7d-44fa-b026-ad1d5b9abd15.png" },
  { name: "Cinema 4D", category: "Modelado 3D", icon: "https://cdn.phototourl.com/member/2026-07-21-27a37427-0109-4613-8a7c-b3b6a0064570.png" },
  { name: "Blender", category: "Modelado 3D & Render", icon: "https://cdn.phototourl.com/member/2026-07-21-d89f9d8a-6ae8-4792-aa4c-e4f5565a6004.png" },
  { name: "DaVinci Resolve", category: "Color Grading & Edición", icon: "https://cdn.phototourl.com/free/2026-07-21-f341e176-be2d-498c-9cc5-bf877af45417.png" },
  { name: "FL Studio", category: "Producción Musical", icon: "https://cdn.phototourl.com/free/2026-07-21-6753d291-ec40-4548-ae83-31e5ad0cea43.png" },
];

export function ToolsSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent" />
      <div ref={ref} className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Herramientas
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Software profesional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estas herramientas me permiten desarrollar proyectos profesionales de alta calidad en cada área.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.05 * i,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-xl p-5 text-center hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand/10 flex items-center justify-center overflow-hidden">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                {tool.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
