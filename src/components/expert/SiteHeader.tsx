import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import logoImg from "@/assets/logo3.png";
import { SECTIONS } from "@/data/raghu";

interface DesktopNavItem {
  label: string;
  href: string;
  hasChevron?: boolean;
  children?: { label: string; href: string }[];
}

const DESKTOP_NAV: DesktopNavItem[] = [
  {
    label: "Home",
    href: "#overview",
  },
  {
    label: "SAP Security",
    href: "#expertise",
    hasChevron: true,
    children: [
      { label: "Core Security Architecture", href: "#expertise" },
      { label: "Authorizations & Role Design", href: "#expertise" },
      { label: "SAP SecOps & Continuous Security", href: "#secops" },
      { label: "Security Philosophy & 8 Questions", href: "#viewpoint" },
      { label: "Qualifications & Certifications", href: "#certifications" },
    ],
  },
  {
    label: "SAP GRC & IAG",
    href: "#expertise",
    hasChevron: true,
    children: [
      { label: "Access Control & Governance", href: "#expertise" },
      { label: "Audit, Risk & Statutory Controls", href: "#audit" },
      { label: "SAP Press GRC Books", href: "#books" },
      { label: "Cloud Identity Access Governance (IAG)", href: "#books" },
    ],
  },
  {
    label: "SAP Cybersecurity",
    href: "#secops",
  },
  {
    label: "Resources",
    href: "#books",
    hasChevron: true,
    children: [
      { label: "Books & Publications", href: "#books" },
      { label: "Masterclasses & Training", href: "#training" },
      { label: "Research & Automation", href: "#research" },
      { label: "Articles & Recommendations", href: "#articles" },
      { label: "Podcasts & Media", href: "#podcasts" },
    ],
  },
  {
    label: "Other Links",
    href: "#connect",
    hasChevron: true,
    children: [
      { label: "Speaking & Keynotes", href: "#speaking" },
      { label: "Interviews & Discussions", href: "#interviews" },
      { label: "ToggleNow Technologies", href: "#togglenow" },
      { label: "SAP Security Expert Platform", href: "#sapsecurityexpert" },
      { label: "Connect with Raghu", href: "#connect" },
    ],
  },
];

const SEARCH_ITEMS = [
  { label: "SAP Security & Architecture", href: "#expertise", category: "Expertise" },
  { label: "SAP GRC & Access Control", href: "#expertise", category: "GRC" },
  { label: "Audit & Risk Assessments", href: "#audit", category: "Audit" },
  { label: "Books & SAP Press Publications", href: "#books", category: "Publications" },
  { label: "Professional Credentials & CISA", href: "#certifications", category: "Credentials" },
  { label: "SAP SecOps & AI Operations", href: "#secops", category: "SecOps" },
  { label: "Research & Automation Stories", href: "#research", category: "Research" },
  { label: "Articles & Recommendations", href: "#articles", category: "Insights" },
  { label: "Podcasts & Interviews", href: "#podcasts", category: "Media" },
  { label: "Speaking & Events", href: "#speaking", category: "Speaking" },
  { label: "ToggleNow Technologies", href: "#togglenow", category: "Company" },
  { label: "Philosophy & 8 Questions", href: "#viewpoint", category: "Philosophy" },
  { label: "Connect with Raghu Boddu", href: "#connect", category: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const closeTimeoutRef = useRef<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveDropdown(null);
        setSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleNavigate = (id: string) => {
    setOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  const filteredSearch = searchQuery.trim()
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : SEARCH_ITEMS.slice(0, 6);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-[border-color,box-shadow] duration-200 ${
        scrolled ? "border-b border-border shadow-2xs" : "border-b border-border-light"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1536px] items-center justify-between px-5 md:px-8 xl:px-10">
        {/* Brand Logo */}
        <a
          href="#overview"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="SAP Security Expert"
        >
          <img
            src={logoImg || "/logo3.png"}
            alt="SAP Security Expert"
            className="h-8 w-auto object-contain sm:h-9 xl:h-10"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-3 xl:gap-6 2xl:gap-8 lg:flex min-w-0"
        >
          {DESKTOP_NAV.map((item) => {
            const isOpen = activeDropdown === item.label;

            if (item.hasChevron && item.children) {
              return (
                <div
                  key={item.label}
                  className="relative shrink-0"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavigate(item.href.slice(1));
                      }
                    }}
                    className={`flex items-center gap-1 xl:gap-1.5 py-2 text-[13.5px] xl:text-[14.5px] font-medium transition-colors cursor-pointer group whitespace-nowrap ${
                      isOpen ? "text-[#ea5845]" : "text-slate-800 hover:text-[#ea5845]"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-slate-500 transition-transform duration-200 group-hover:text-[#ea5845] ${
                        isOpen ? "rotate-180 text-[#ea5845]" : ""
                      }`}
                    />
                  </a>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 z-50 w-64 pt-2"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-lg border border-border bg-background p-1.5 shadow-xl animate-in fade-in-0 zoom-in-95 duration-150">
                        {item.children.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => {
                              if (sub.href.startsWith("#")) {
                                e.preventDefault();
                                handleNavigate(sub.href.slice(1));
                              }
                            }}
                            className="block rounded-md px-3 py-2 text-[13.5px] font-medium text-text-secondary transition-colors hover:bg-orange-50 hover:text-[#ea5845]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavigate(item.href.slice(1));
                  }
                }}
                className="shrink-0 whitespace-nowrap py-2 text-[13.5px] xl:text-[14.5px] font-medium text-slate-800 transition-colors hover:text-[#ea5845]"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Search + Member Login + Become a Contributor */}
        <div className="hidden items-center gap-2.5 xl:gap-4 shrink-0 lg:flex">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex h-8 w-8 xl:h-9 xl:w-9 shrink-0 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#ea5845] cursor-pointer"
            title="Search (Ctrl+K)"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <a
            href="https://www.sapsecurityexpert.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 xl:px-4 xl:py-2 text-[13px] xl:text-[14px] font-medium text-slate-900 transition-colors hover:border-[#ea5845]/50 hover:bg-orange-50/50 hover:text-[#ea5845] whitespace-nowrap"
          >
            Member Login
          </a>

          <a
            href="#connect"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#ea5845] px-3.5 py-1.5 xl:px-4.5 xl:py-2 text-[13px] xl:text-[14px] font-medium text-white shadow-xs transition-colors hover:bg-[#d94835] whitespace-nowrap"
          >
            Become a Contributor
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-slate-800 transition-colors hover:bg-orange-50/50 hover:text-[#ea5845] active:scale-95 cursor-pointer"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-slate-800 transition-colors hover:bg-orange-50/50 hover:text-[#ea5845] active:scale-95 cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Interactive Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center p-4 pt-16 sm:pt-24">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSearchOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg rounded-xl border border-border bg-background p-4 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-150">
            <div className="relative flex items-center border-b border-border pb-3">
              <Search className="absolute left-1 h-5 w-5 text-text-muted" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, books, credentials, secops..."
                className="w-full bg-transparent pl-9 pr-8 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-text-muted hover:text-text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-3 max-h-72 overflow-y-auto space-y-1">
              {filteredSearch.length > 0 ? (
                filteredSearch.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.href.slice(1));
                    }}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-[14px] text-text-secondary hover:bg-orange-50 hover:text-[#ea5845] transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      {item.category}
                    </span>
                  </a>
                ))
              ) : (
                <p className="py-6 text-center text-[14px] text-text-muted">
                  No matching results found for "{searchQuery}".
                </p>
              )}
            </div>
          </div>
        </div>
      )}

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
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-border px-5 bg-background">
            <a
              href="#overview"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 transition-opacity hover:opacity-85"
              aria-label="SAP Security Expert"
            >
              <img
                src={logoImg || "/logo3.png"}
                alt="SAP Security Expert"
                className="h-8 w-auto object-contain"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#ea5845] active:scale-95 cursor-pointer"
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
                className="group flex min-h-[44px] items-center justify-between py-2.5 px-3 rounded-lg text-[15px] font-medium text-text-primary transition-all duration-150 hover:bg-orange-50/60 active:bg-orange-50 cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-text-muted transition-colors group-hover:text-[#ea5845]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-semibold transition-colors group-hover:text-[#ea5845]">
                    {s.label}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 text-text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-[#ea5845]" />
              </a>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="shrink-0 border-t border-border bg-surface-2/80 p-4 space-y-2.5">
            <a
              href="https://www.sapsecurityexpert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-md border border-slate-300 bg-white py-2.5 text-center text-[14px] font-medium text-slate-800 shadow-2xs transition-colors hover:border-[#ea5845] hover:text-[#ea5845] hover:bg-orange-50/50"
            >
              Member Login
            </a>
            <a
              href="#connect"
              onClick={() => handleNavigate("connect")}
              className="block w-full rounded-md bg-[#ea5845] py-2.5 text-center text-[14px] font-medium text-white shadow-xs transition-colors hover:bg-[#d94835]"
            >
              Become a Contributor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
