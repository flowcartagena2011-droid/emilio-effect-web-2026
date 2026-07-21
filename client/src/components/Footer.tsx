import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.phototourl.com/member/2026-07-21-b0609b66-cc6b-4b82-80df-797721c05443.png"
              alt="Emilio Effect"
              className="h-7 w-7 object-contain" style={{borderRadius: '1px'}} style={{borderRadius: '52px'}}
            />
            <span className="font-display text-sm font-bold">
              EMILIO <span className="text-brand">EFFECT</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:emilioeffect@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} />
              emilioeffect@gmail.com
            </a>
            <a
              href="https://wa.me/573018672273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle size={14} />
              +57 301 867 2273
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60">
            © 2026 Emilio Effect. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
