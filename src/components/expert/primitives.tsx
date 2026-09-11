import { useEffect, useRef, useState, type ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`arrow-link hover:underline underline-offset-4 ${className}`}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Comp>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {intro ? (
        <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-text-secondary">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  tone = "white",
}: {
  id: string;
  children: ReactNode;
  tone?: "white" | "muted" | "surface";
}) {
  const bg =
    tone === "muted" ? "bg-muted-bg" : tone === "surface" ? "bg-surface-2" : "bg-background";
  return (
    <section
      id={id}
      className={`section-pad scroll-mt-24 border-b border-border-light ${bg}`}
    >
      <div className="px-5 md:px-8">{children}</div>
    </section>
  );
}
