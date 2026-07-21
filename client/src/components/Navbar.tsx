import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#estilos", label: "Estilos" },
  { href: "#precios", label: "Precios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src="https://cdn.phototourl.com/member/2026-07-21-b0609b66-cc6b-4b82-80df-797721c05443.png"
                alt="Emilio Effect"
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-bold tracking-tight">
                EMILIO <span className="text-brand">EFFECT</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="ml-4 px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand/90 transition-all duration-200 active:scale-95"
              >
                Contrátame
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground py-3 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 bg-brand text-white text-center font-medium rounded-lg"
              >
                Contrátame
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
