import { useEffect, useState } from "react";
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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-250 ${
        scrolled
          ? "border-b border-border bg-background/96 backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1536px] items-center justify-between px-5 md:px-8">
        <a href="#overview" className="font-display text-[15px] font-semibold text-primary">
          SAP Security Expert
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
          aria-label="Open sections menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-primary/20"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-background shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <span className="eyebrow">Sections</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <nav aria-label="Sections" className="flex-1 overflow-y-auto px-5 py-4">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border-light py-3 text-[16px] text-text-primary"
                >
                  {s.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-border p-5">
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-4 py-3 text-center text-[15px] font-medium text-primary-foreground"
              >
                Connect with Raghu
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
