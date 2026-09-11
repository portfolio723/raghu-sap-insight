import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import logoImg from "@/assets/logo3.png";
import { SECTIONS } from "@/data/raghu";

const NAV = [
  { id: "expertise", label: "Expertise" },
  { id: "books", label: "Books" },
  { id: "research", label: "Research" },
  { id: "speaking", label: "Speaking" },
  { id: "togglenow", label: "ToggleNow" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-[border-color] duration-200 ${
        scrolled ? "border-b border-border shadow-2xs" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1536px] items-center justify-between px-5 md:px-8">
        <a
          href="#overview"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
          aria-label="SAP Security Expert"
        >
          <img
            src={logoImg || "/logo3.png"}
            alt="SAP Security Expert"
            className="h-8 w-auto object-contain md:h-9"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-[14px] text-text-secondary transition-colors duration-200 hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#connect"
            className="rounded-sm bg-primary px-4 py-2 text-[14px] font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            Connect
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary transition-colors hover:bg-surface-2 active:scale-95 cursor-pointer lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Smooth Mobile Menu Drawer & Backdrop */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100dvh",
        }}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-slate-950/60 transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onClick={() => setOpen(false)}
          aria-label="Close menu backdrop"
        />

        {/* Sliding Menu Card */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-10 flex w-[85%] max-w-[340px] flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            height: "100dvh",
            maxHeight: "100dvh",
          }}
        >
          {/* Header */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5 bg-background">
            <a
              href="#overview"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 transition-opacity hover:opacity-85"
              aria-label="SAP Security Expert"
            >
              <img
                src={logoImg || "/logo3.png"}
                alt="SAP Security Expert"
                className="h-7 w-auto object-contain"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-primary transition-colors hover:bg-surface-2 active:scale-95 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            aria-label="Sections"
            className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-border-light/60 overscroll-contain"
          >
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(s.id);
                }}
                className="group flex min-h-[44px] items-center justify-between py-2.5 px-3 rounded-lg text-[15px] font-medium text-text-primary transition-all duration-150 hover:bg-surface-2 active:bg-surface-2 cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-text-muted transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-semibold transition-colors group-hover:text-primary">
                    {s.label}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 text-text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="shrink-0 border-t border-border bg-surface-2/80 p-4">
            <button
              type="button"
              onClick={() => handleNavigate("connect")}
              className="w-full rounded-md bg-primary py-3 text-center text-[14.5px] font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-[0.99] cursor-pointer"
            >
              Connect with Raghu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
