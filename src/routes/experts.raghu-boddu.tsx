import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Play, X } from "lucide-react";
import heroImg from "@/assets/hero.png";
import { SiteHeader } from "@/components/expert/SiteHeader";
import { SectionNav, ScrollProgress, MobileSectionBar } from "@/components/expert/SectionNav";
import { Arrow, ExtLink, Reveal, Section, SectionHeader } from "@/components/expert/primitives";
import {
  ARTICLE_CATEGORIES,
  AUDIT_MATRIX,
  BOOKS,
  CERTIFICATIONS,
  EXPERTISE,
  LINKS,
  MODERN_LANDSCAPE,
  PODCAST_TOPICS,
  RESEARCH_TOPICS,
  SPEAKING_CHANNELS,
  SSE_ECOSYSTEM,
  TIMELINE,
  TRUST,
  VIEWPOINT_QUESTIONS,
} from "@/data/raghu";

const TITLE = "Raghu Boddu | SAP Security Expert | SAP Security, GRC & SecOps";
const DESCRIPTION =
  "Raghu Boddu is an SAP Security and GRC expert with 25+ years of experience across SAP Security, cybersecurity, access governance, automation, audit and SAP SecOps.";

export const Route = createFileRoute("/experts/raghu-boddu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/experts/raghu-boddu/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experts/raghu-boddu/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Raghu Boddu",
          jobTitle: "SAP Security Expert",
          description: DESCRIPTION,
          url: LINKS.personalSite,
          sameAs: [
            LINKS.linkedin,
            LINKS.sapPressAuthor,
            LINKS.sapCommunity,
            LINKS.sapSecurityExpert,
            LINKS.toggleNow,
          ],
          knowsAbout: [
            "SAP Security",
            "SAP GRC",
            "Cyber Security",
            "Access Governance",
            "SAP S/4HANA Security",
            "SAP Cloud Security",
            "Security Automation",
            "AI for SAP Security",
            "SAP SecOps",
            "Audit & Compliance",
          ],
          worksFor: { "@type": "Organization", name: "ToggleNow", url: LINKS.toggleNow },
        }),
      },
    ],
  }),
  component: ExpertProfile,
});

function ExpertProfile() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteHeader />
      <MobileSectionBar />

      <div className="mx-auto max-w-[1536px] xl:grid xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-10 xl:px-8">
        <div className="hidden py-16 xl:block">
          <SectionNav />
        </div>

        <main>
          <Hero />
          <TrustStrip />
          <Overview />
          <Expertise />
          <AuditRisk />
          <Books />
          <Training />
          <Certifications />
          <Career />
          <SecOps />
          <Research />
          <Articles />
          <Podcasts />
          <Speaking />
          <Interviews />
          <ToggleNow />
          <SapSecurityExpert />
          <Viewpoint />
          <Connect />
        </main>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section
      id="overview"
      className="scroll-mt-24 border-b border-border-light px-5 py-14 md:px-8 md:py-20 xl:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <Reveal>
          <p className="eyebrow">SAP Security Expert</p>
          <h1 className="mt-4">Raghu Boddu — SAP Security Expert</h1>
          <p className="mt-4 font-display text-[20px] font-semibold leading-snug text-text-primary md:text-[23px]">
            SAP Security, GRC, Cyber Security, Access Governance, Automation, AI
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-[17px]">
            Raghu Boddu is an SAP Security and GRC expert with around 25 years of experience across
            SAP security, governance, risk and compliance, audits, access governance, automation and
            enterprise cybersecurity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-[15px] font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
            >
              Explore Expertise <Arrow />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-[15px] font-medium text-primary transition-colors duration-200 hover:bg-muted-bg"
            >
              Connect
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="overflow-hidden rounded-xl border border-border bg-surface-2 shadow-xs">
            <img
              src={heroImg || "/hero.png"}
              alt="Raghu Boddu"
              loading="eager"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="border-b border-border-light bg-muted-bg">
      <ul className="grid gap-px bg-border-light px-5 py-0 md:px-8 sm:grid-cols-2 lg:grid-cols-5 lg:bg-transparent lg:gap-8 lg:py-8">
        {TRUST.map((t, i) => (
          <Reveal as="li" key={t.value} delay={i * 60} className="bg-muted-bg py-5 lg:py-0">
            <p className="font-display text-[18px] font-semibold text-primary">{t.value}</p>
            <p className="mt-1 text-[13px] leading-snug text-text-secondary">{t.label}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------ Overview */

function Overview() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Raghu Boddu"
        title="A career built around practical SAP security"
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal
          delay={60}
          className="space-y-4 text-[15px] leading-relaxed text-text-secondary md:text-[16px]"
        >
          <p>
            He is, by title, CEO of ToggleNow, but heads up product innovation and design. In 2005
            he founded{" "}
            <ExtLink href={LINKS.sapSecurityExpert} className="!inline-flex align-baseline">
              SAP Security Expert
            </ExtLink>{" "}
            — a community and knowledge platform for practitioners in the fields of SAP Security,
            GRC, Cybersecurity and Audit.
          </p>
          <p>
            Raghu has vast experience in complex SAP environments and a proven track record of
            helping organizations transform from traditional role administration and periodic
            compliance activities to practical, automated and continuously governed SAP security. He
            has delivered many orchestrated automations in SAP GRC — without even using RPA or AI —
            published as{" "}
            <ExtLink href={LINKS.automationStories} className="!inline-flex align-baseline">
              Automation Stories
            </ExtLink>{" "}
            and appreciated by the SAP Security &amp; GRC community.
          </p>
          <p>
            He is also a published author with{" "}
            <ExtLink href={LINKS.sapPressAuthor} className="!inline-flex align-baseline">
              SAP PRESS / Rheinwerk Publishing
            </ExtLink>
            , educator, speaker, practitioner and contributor to the SAP security community.
          </p>
        </Reveal>

        <Reveal delay={120} className="rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="eyebrow text-signal">Key Distinctions</p>
          <ul className="mt-4 space-y-3.5">
            {[
              "25+ years of SAP Security, GRC, Audit & Automation experience",
              "SAP PRESS author — SAP Access Control, SAP Process Control and SAP Cloud Identity and Access Governance",
              "Certifications: CISA, CFE, CDPSE, SAP Certified Security Professional, SAP GRC Associate",
              "Focus: SAP Security, SAP GRC, Access Governance, SAP Cybersecurity, Audit & Compliance, SAP S/4HANA Security, SAP Cloud Security, Security Automation and AI for SAP Security",
              "Former Microsoft MVP — Microsoft Most Valuable Professional for three years in a row",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text-primary"
              >
                <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-pill bg-signal" />
                <span>{item}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text-primary">
              <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-pill bg-signal" />
              <span>
                Leadership — CEO,{" "}
                <ExtLink href={LINKS.toggleNow} className="!inline-flex align-baseline">
                  ToggleNow Global
                </ExtLink>{" "}
                · Board Member,{" "}
                <ExtLink href={LINKS.agInnoLabs} className="!inline-flex align-baseline">
                  Access Governance Inno Labs Oy
                </ExtLink>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Expertise */

function Expertise() {
  return (
    <Section id="expertise" tone="muted">
      <SectionHeader
        eyebrow="Capabilities"
        title="Areas of Expertise"
        intro="Raghu’s work sits at the intersection of SAP Security, enterprise risk and cyber security."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {EXPERTISE.map((e, i) => (
          <Reveal as="article" key={e.n} delay={i * 80}>
            <div className="group h-full rounded-lg border border-border bg-background p-6 transition-colors duration-200 hover:border-primary hover:bg-surface-2 md:p-8">
              <p className="tech text-text-muted">{e.n}</p>
              <h3 className="mt-3 uppercase tracking-[0.02em]">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{e.summary}</p>
              <ul className="mt-5 space-y-2 border-t border-border-light pt-5">
                {e.topics.map((t) => (
                  <li key={t} className="tech text-[13px] text-text-primary">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AuditRisk() {
  return (
    <Section id="audit">
      <SectionHeader
        eyebrow="Controls"
        title="Audit, Risk & Compliance"
        intro="A structured control view across ITGC, SAP audit readiness and continuous controls oversight."
      />
      <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {AUDIT_MATRIX.map((c, i) => (
          <Reveal key={c} delay={i * 40} className="bg-background p-5">
            <p className="tech text-[11px] text-text-muted">C-{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-2 text-[15px] font-medium text-text-primary">{c}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Books */

function Books() {
  return (
    <Section id="books" tone="muted">
      <SectionHeader
        eyebrow="Published knowledge"
        title="SAP PRESS Author"
        intro="Raghu is the author and co-author of several SAP PRESS books focusing on SAP Security, GRC, and Identity Access Governance."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {BOOKS.map((b, i) => (
          <Reveal as="article" key={b.title} delay={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-border bg-background transition-colors duration-200 hover:border-primary">
              <div className="flex aspect-[3/2] flex-col justify-between border-b border-border-light bg-primary p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
                  SAP PRESS
                </p>
                <p className="font-display text-[19px] font-semibold leading-snug text-primary-foreground">
                  {b.title}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[14px] leading-relaxed text-text-secondary">{b.description}</p>
                <p className="mt-4 text-[13px] text-text-muted">{b.publisher}</p>
                <div className="mt-5 pt-1">
                  <ExtLink href={b.href}>{b.cta}</ExtLink>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120} className="mt-8">
        <ExtLink href={LINKS.sapPressAuthor}>
          All published works on the SAP PRESS author page
        </ExtLink>
      </Reveal>
    </Section>
  );
}

function Training() {
  return (
    <Section id="training">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Course"
            title="SAP S/4HANA Security Training"
            intro="Raghu has also contributed as an instructor for SAP PRESS / Rheinwerk’s Authorizations and Security for SAP S/4HANA course. It includes practical demonstrations, is spread over 5 sessions and is available today as a recorded session."
          />
          <Reveal delay={80} className="mt-6">
            <ExtLink href={LINKS.training}>View Course</ExtLink>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="rounded-lg border border-border bg-surface-2 p-6 md:p-8">
            <p className="eyebrow">Topics</p>
            <ul className="mt-4 space-y-3">
              {[
                "Authorization concepts",
                "User management",
                "Roles & profiles",
                "Fiori authorizations",
                "Troubleshooting",
                "Auditing",
              ].map((t, i) => (
                <Reveal
                  as="li"
                  key={t}
                  delay={i * 40}
                  className="flex items-center justify-between border-b border-border-light pb-3 text-[15px] text-text-primary last:border-0 last:pb-0"
                >
                  <span>{t}</span>
                  <span className="tech text-text-muted">SAP S/4HANA</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" tone="muted">
      <SectionHeader eyebrow="Credentials" title="Professional Qualifications & Certifications" />
      <ul className="mt-8 max-w-4xl">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal
            as="li"
            key={c.code}
            delay={i * 40}
            className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="tech w-48 shrink-0 text-[14px] font-medium text-primary">
              {c.code}
            </span>
            <span className="text-[15px] text-text-secondary">{c.name}</span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* -------------------------------------------------------------- Career */

function Career() {
  return (
    <Section id="career" className="hidden">
      <SectionHeader
        eyebrow="Professional journey"
        title="Career Path"
        intro="Raghu’s career has been built on a simple question: how can organizations make SAP security practical, measurable, sustainable?"
      />
      <div className="mt-10 max-w-3xl">
        <ol className="relative border-l border-border pl-6 md:pl-8">
          {TIMELINE.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 60} className="relative pb-9 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+5px)] top-[7px] h-[9px] w-[9px] rounded-pill border border-primary bg-background md:-left-[calc(2rem+5px)]" />
              {t.year ? <p className="tech text-[12px] text-signal">{t.year}</p> : null}
              <h3 className="mt-1 text-[18px] md:text-[20px]">{t.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
      <Reveal
        delay={100}
        className="mt-8 max-w-3xl text-[15px] leading-relaxed text-text-secondary"
      >
        <p>
          Today his work includes assisting organizations in understanding not just what access a
          user or system might have, but what that access actually allows, and what is actually
          going on in the environment. This view increasingly influenced his thinking around
          continuous SAP Security and the emerging discipline of SAP SecOps.
        </p>
      </Reveal>
    </Section>
  );
}

/* -------------------------------------------------------------- SecOps */

function SecOps() {
  return (
    <Section id="secops">
      <SectionHeader
        eyebrow="Signature thinking"
        title="From SAP Security to SAP SecOps"
        intro="Classic SAP Security was largely static, focused on users, roles, and periodic audits. Modern enterprise landscapes demand a transition to continuous, real-time SAP SecOps."
      />

      {/* Evolution Architecture: Classic vs Modern */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Traditional Model */}
        <Reveal
          delay={60}
          className="flex flex-col rounded-xl border border-border bg-background p-6 md:p-8"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="eyebrow text-text-muted">Traditional Model</p>
              <h3 className="mt-1 text-[20px] font-semibold text-primary">Classic SAP Security</h3>
            </div>
            <span className="tech rounded border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-text-muted">
              Static · Periodic
            </span>
          </div>

          <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
            Built primarily around static role provisioning, standard authorization profiles, and
            periodic manual governance reviews.
          </p>

          <div className="mt-6 flex-1">
            <p className="eyebrow mb-3">Authorization Pipeline</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Users", "Roles", "Authorizations", "Transactions"].map((s, i) => (
                <div
                  key={s}
                  className="flex flex-col items-center justify-center rounded-md border border-border bg-surface-2 p-3 text-center transition-colors hover:border-primary/40"
                >
                  <span className="font-mono text-[10px] text-text-muted">0{i + 1}</span>
                  <span className="font-display text-[13.5px] font-semibold text-text-primary mt-0.5">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[11.5px] text-text-muted">
              Focus: Entitlement assignment &amp; quarterly box-ticking compliance.
            </p>
          </div>
        </Reveal>

        {/* Modern SecOps Model */}
        <Reveal
          delay={120}
          className="flex flex-col rounded-xl border border-primary/30 bg-surface p-6 md:p-8 shadow-xs"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="eyebrow text-signal">Modern Paradigm</p>
              <h3 className="mt-1 text-[20px] font-semibold text-primary">SAP SecOps Landscape</h3>
            </div>
            <span className="tech rounded border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary">
              Continuous · Telemetry
            </span>
          </div>

          <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
            Encompasses human and non-human identities across hybrid cloud fabrics, orchestrated
            automations, and live risk monitoring.
          </p>

          <div className="mt-6 flex-1">
            <p className="eyebrow mb-3">Ecosystem Vectors</p>
            <div className="flex flex-wrap gap-2">
              {MODERN_LANDSCAPE.map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-[12px] font-medium text-text-primary shadow-2xs transition-colors hover:border-primary hover:text-primary"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[11.5px] font-medium text-primary">
              Focus: Pervasive visibility, live threat detection &amp; human oversight.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Analytical Axiom: Can Do vs Did Do */}
      <Reveal delay={160} className="mt-8 rounded-xl border border-border bg-background p-6 md:p-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">The Core Analytical Framework</p>
          <h3 className="mt-1 text-[22px] font-semibold text-primary md:text-[24px]">
            The “Can Do” vs. “Did Do” Duality
          </h3>
          <p className="mt-2 text-[15px] text-text-secondary">
            Raghu’s foundational methodology asserts that knowing what an identity is permitted to
            do is insufficient without analyzing what that identity actually performs.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Can Do */}
          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-border bg-surface-2 p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="tech rounded bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  Entitlement State
                </span>
                <span className="font-mono text-[11px] text-text-muted">Static Analysis</span>
              </div>
              <h4 className="mt-3 font-display text-[20px] font-semibold text-primary">Can Do</h4>
              <p className="mt-2 text-[15px] font-medium text-text-primary">
                “What can this identity technically execute?”
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Evaluates assigned roles, transaction authorizations, and Segregation of Duties
                (SoD) permissions configured in SAP GRC and identity governance repositories.
              </p>
            </div>
          </Reveal>

          {/* Did Do */}
          <Reveal delay={160}>
            <div className="h-full rounded-lg border border-signal/30 bg-surface-2 p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="tech rounded bg-signal/10 px-2.5 py-1 text-[11px] font-semibold text-signal">
                  Runtime Activity
                </span>
                <span className="font-mono text-[11px] text-text-muted">Dynamic Telemetry</span>
              </div>
              <h4 className="mt-3 font-display text-[20px] font-semibold text-primary">Did Do</h4>
              <p className="mt-2 text-[15px] font-medium text-text-primary">
                “What did the identity actually perform?”
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Captures audit logs, transaction executions, database queries, and behavioral
                anomalies to verify if potential access was actually exercised.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Synthesis formula banner */}
        <Reveal delay={240}>
          <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-lg border border-border bg-surface-2 p-5 md:p-6 lg:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[13.5px] sm:gap-4 md:text-[14.5px]">
              <span className="inline-flex min-w-[130px] items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-center font-semibold text-primary shadow-xs sm:min-w-[145px]">
                Can Do
              </span>
              <span className="text-[16px] font-bold text-signal">+</span>
              <span className="inline-flex min-w-[130px] items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-center font-semibold text-primary shadow-xs sm:min-w-[145px]">
                Did Do
              </span>
              <span className="text-[16px] font-bold text-text-muted">➔</span>
              <span className="inline-flex min-w-[185px] items-center justify-center rounded-md border border-primary bg-primary px-6 py-2.5 text-center font-semibold text-primary-foreground shadow-xs sm:min-w-[210px]">
                Security Context
              </span>
            </div>
            <p className="max-w-md text-center text-[13.5px] text-text-secondary lg:text-right">
              Continuous correlation enables proactive incident containment rather than
              retrospective audits.
            </p>
          </div>
        </Reveal>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------ Research */

function Research() {
  const mid = Math.ceil(RESEARCH_TOPICS.length / 2);
  const col1 = RESEARCH_TOPICS.slice(0, mid);
  const col2 = RESEARCH_TOPICS.slice(mid);

  return (
    <Section id="research" tone="muted">
      <SectionHeader
        eyebrow="Insights"
        title="Research & Expert Insights"
        intro="Raghu writes on emerging issues in SAP Security, GRC and enterprise cyber security, with particular interest in areas where traditional security models are challenged by changing technology."
      />

      <div className="mt-10 grid gap-x-10 border-t border-border lg:grid-cols-2">
        <ul className="divide-y divide-border">
          {col1.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 30}>
              <a
                href={LINKS.sseRecommendations}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border py-4 transition-colors duration-200 hover:bg-surface-2"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary md:text-[13px]">
                  {t}
                </span>
                <Arrow className="shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </Reveal>
          ))}
        </ul>
        <ul className="divide-y divide-border">
          {col2.map((t, i) => (
            <Reveal as="li" key={t} delay={(i + mid) * 30}>
              <a
                href={LINKS.sseRecommendations}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border py-4 transition-colors duration-200 hover:bg-surface-2"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary md:text-[13px]">
                  {t}
                </span>
                <Arrow className="shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={100} className="mt-10">
        <article className="max-w-3xl rounded-lg border border-border bg-surface-2 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
            Expert recommendation
          </p>
          <h3 className="mt-3">SAP Security 2015 model already behind</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            In his latest SAP Security Expert work, Raghu states that the traditional security model
            from 2015 is no longer sufficient for the current SAP landscape, where Fiori, BTP, APIs,
            automation and AI open up additional access paths and identities.
          </p>
          <div className="mt-5">
            <ExtLink href={LINKS.sse2015Model}>Read Expert Recommendation</ExtLink>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

function Articles() {
  return (
    <Section id="articles">
      <SectionHeader
        eyebrow="Published content"
        title="Technical Articles & Published Content"
        intro="Raghu regularly publishes practical SAP Security and GRC content through SAP Security Expert, SAP PRESS and other professional channels."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLE_CATEGORIES.map((a, i) => (
          <Reveal as="article" key={a.category} delay={i * 60}>
            <div className="flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-colors duration-200 hover:border-primary">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                {a.category}
              </p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-secondary">
                {a.description}
              </p>
              <div className="mt-5">
                <ExtLink href={LINKS.sapSecurityExpert}>Read articles</ExtLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={100} className="mt-8 flex flex-wrap gap-6">
        <ExtLink href={LINKS.linkedin}>Publishing presence on LinkedIn</ExtLink>
        <ExtLink href={LINKS.sapPressAuthor}>SAP PRESS author page</ExtLink>
      </Reveal>
    </Section>
  );
}

function Podcasts() {
  const mid = Math.ceil(PODCAST_TOPICS.length / 2);
  const col1 = PODCAST_TOPICS.slice(0, mid);
  const col2 = PODCAST_TOPICS.slice(mid);

  return (
    <Section id="podcasts" tone="muted">
      <SectionHeader
        eyebrow="Conversations"
        title="Podcasts & Discussions"
        intro="Raghu joins conversations with SAP Security, GRC, cybersecurity and technology professionals."
      />
      <div className="mt-10 grid gap-x-10 border-t border-border lg:grid-cols-2">
        <ul className="divide-y divide-border">
          {col1.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 40}>
              <a
                href={LINKS.ssePodcasts}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 border-b border-border py-5 transition-colors duration-200 hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="eyebrow block">Podcast / Discussion</span>
                  <span className="mt-1 block font-display text-[17px] font-semibold text-primary">
                    {p}
                  </span>
                </span>
                <Arrow className="shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </Reveal>
          ))}
        </ul>
        <ul className="divide-y divide-border">
          {col2.map((p, i) => (
            <Reveal as="li" key={p} delay={(i + mid) * 40}>
              <a
                href={LINKS.ssePodcasts}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 border-b border-border py-5 transition-colors duration-200 hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="eyebrow block">Podcast / Discussion</span>
                  <span className="mt-1 block font-display text-[17px] font-semibold text-primary">
                    {p}
                  </span>
                </span>
                <Arrow className="shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-[3px]" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
      <Reveal delay={80} className="mt-8">
        <ExtLink href={LINKS.ssePodcasts}>SAP Security Expert Podcasts</ExtLink>
      </Reveal>
    </Section>
  );
}

function Speaking() {
  return (
    <Section id="speaking">
      <SectionHeader eyebrow="Community" title="Speaking & Sharing Knowledge" />
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {SPEAKING_CHANNELS.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={i * 50}
                className="bg-background p-4 text-[15px] text-text-primary"
              >
                {s}
              </Reveal>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="flex flex-col justify-end">
          <blockquote className="border-l-2 border-signal pl-6">
            <p className="font-display text-[22px] font-semibold leading-snug text-primary md:text-[26px]">
              “So what should a security professional actually do differently on Monday morning?”
            </p>
            <footer className="mt-4 text-[14px] text-text-secondary">
              Raghu’s focus is deliberately practical.
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}

function Interviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const media = [
    {
      source: "Sakshi TV",
      title: "Interview — “Is AI a threat?”",
      href: LINKS.sakshiTv,
      videoId: "AiGP4hL041s",
    },
    {
      source: "Hybiz TV",
      title: "Cyber frauds — television discussion",
      href: LINKS.hybizTv,
      videoId: "Rhs66vy54OE",
    },
  ];

  return (
    <Section id="interviews" tone="muted">
      <SectionHeader
        eyebrow="Media"
        title="Interviews & Articles"
        intro="Raghu’s professional journey and expertise in SAP and AI have been spotlighted on technology, professional and media platforms."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {media.map((m, i) => {
          const isPlaying = activeVideo === `${m.videoId}-${i}`;
          const thumbnailUrl = `https://img.youtube.com/vi/${m.videoId}/hqdefault.jpg`;

          return (
            <Reveal as="article" key={`${m.title}-${i}`} delay={i * 70}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-200 hover:border-primary">
                {/* 16:9 Video or Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  {isPlaying ? (
                    <div className="relative h-full w-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${m.videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title={m.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                      <button
                        type="button"
                        onClick={() => setActiveVideo(null)}
                        aria-label="Close video"
                        className="absolute right-2 top-2 z-10 rounded-full bg-black/75 p-1.5 text-white transition hover:bg-black cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(`${m.videoId}-${i}`)}
                      className="group relative h-full w-full text-left cursor-pointer focus:outline-hidden"
                      aria-label={`Play video: ${m.title}`}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={m.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                      {/* Top badge */}
                      <div className="absolute left-3 top-3">
                        <span className="tech rounded bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
                          {m.source}
                        </span>
                      </div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-5 w-5 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow">{m.source}</p>
                  <h3 className="mt-2 flex-1 text-[17px] font-semibold leading-snug text-primary md:text-[18px]">
                    {m.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(`${m.videoId}-${i}`)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-signal hover:underline cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" /> Watch Video
                    </button>
                    <ExtLink href={m.href} className="text-[13px] text-text-muted">
                      Open on YouTube
                    </ExtLink>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={80} className="mt-8 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
        <p>
          Raghu has also contributed significantly to a variety of technical communities, publishing
          on{" "}
          <ExtLink href={LINKS.sapCommunity} className="!inline-flex align-baseline">
            SAP Community Blogs
          </ExtLink>{" "}
          and authoring over 30 Microsoft Knowledge Base articles during his earlier Microsoft
          ecosystem work. He was awarded Microsoft Most Valuable Professional (MVP) for Windows
          Shell three years running.
        </p>
      </Reveal>
    </Section>
  );
}

/* ----------------------------------------------------------- ToggleNow */

function ToggleNow() {
  const chain = [
    "SAP Security",
    "GRC",
    "Cybersecurity",
    "Automation",
    "AI-driven Security Operations",
  ];
  return (
    <Section id="togglenow">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Leadership"
            title="ToggleNow"
            intro="Raghu is the CEO of ToggleNow, a SAP-centric technology and services company working across SAP Security, GRC, cyber security, automation and AI-driven security operations."
          />
          <Reveal delay={80} className="mt-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              At ToggleNow his focus is on translating years of SAP Security and GRC experience into
              practical technology, automation and managed capabilities.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <ExtLink href={LINKS.toggleNow}>Go to ToggleNow</ExtLink>
              <ExtLink href={LINKS.toggleNowSolutions}>
                Discover ToggleNow products &amp; solutions
              </ExtLink>
              {LINKS.toggleNowSecOps ? (
                <ExtLink href={LINKS.toggleNowSecOps}>Explore SAP Security &amp; SecOps</ExtLink>
              ) : null}
              <ExtLink href={LINKS.automationStories}>Automation Stories</ExtLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="rounded-lg border border-border bg-background p-6 md:p-8">
            <p className="eyebrow">Raghu Boddu</p>
            <p className="mt-1 font-display text-[18px] font-semibold text-primary">
              CEO / Product Innovation
            </p>
            <ol className="mt-6">
              {chain.map((c, i) => (
                <li key={c}>
                  <p className="tech rounded-sm border border-border bg-surface-2 px-4 py-3 text-[13px] text-text-primary">
                    {c}
                  </p>
                  {i < chain.length - 1 ? (
                    <p className="tech py-1 text-center text-[13px] text-text-muted">↓</p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function SapSecurityExpert() {
  const [activeBadges, setActiveBadges] = useState<Set<string>>(() => new Set(SSE_ECOSYSTEM));

  const toggleBadge = (badge: string) => {
    setActiveBadges((prev) => {
      const next = new Set(prev);
      if (next.has(badge)) {
        next.delete(badge);
      } else {
        next.add(badge);
      }
      return next;
    });
  };

  return (
    <Section id="community" className="hidden">
      <SectionHeader
        eyebrow="Community platform"
        title="SAP Security Expert"
        intro="Raghu founded SAP Security Expert, a practitioner-focused platform connecting SAP Security, GRC, Cybersecurity and Audit professionals."
      />

      <Reveal delay={60}>
        <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {SSE_ECOSYSTEM.map((s) => {
            const isSelected = activeBadges.has(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleBadge(s)}
                aria-pressed={isSelected}
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-[13.5px] font-medium leading-none text-primary-foreground shadow-xs transition-all duration-200 cursor-pointer select-none"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>{s}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={80} className="mt-8 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
        <p>
          Its mission is to build a community-based knowledge and learning platform for
          professionals working across SAP Security, GRC, Cybersecurity and Audit, publishing
          podcasts, expert chats, technical content and community discussions.
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          <ExtLink href={LINKS.sapSecurityExpert}>Go to SAP Security Expert</ExtLink>
          <ExtLink href={LINKS.sseRecommendations}>Expert recommendations</ExtLink>
        </div>
      </Reveal>
    </Section>
  );
}

/* ----------------------------------------------------------- Viewpoint */

function Viewpoint() {
  const stack1 = VIEWPOINT_QUESTIONS.slice(0, 4);
  const stack2 = VIEWPOINT_QUESTIONS.slice(4, 8);

  return (
    <Section id="viewpoint" tone="muted">
      <SectionHeader eyebrow="Philosophy" title="Raghu’s Viewpoint" />
      <Reveal delay={60} className="mt-6 max-w-3xl">
        <p className="font-display text-[22px] font-semibold leading-snug text-primary md:text-[28px]">
          SAP Security should be more than just “Can the user access it?”
        </p>
        <p className="mt-4 text-[15px] text-text-secondary">
          Security today demands a wider set of questions.
        </p>
      </Reveal>

      {/* 8 questions organized into two equal stacks side by side */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Left Stack: Questions 01 - 04 */}
        <ol className="divide-y divide-border border-y border-border">
          {stack1.map((q, i) => (
            <Reveal
              as="li"
              key={q}
              delay={i * 50}
              className="group flex items-start gap-4 py-4 transition-colors duration-200 hover:bg-background/80 px-2 rounded-sm md:py-5"
            >
              <span className="tech w-7 shrink-0 pt-0.5 text-[12px] font-semibold text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[17px] font-semibold leading-snug text-text-primary md:text-[19px]">
                {q}
              </span>
            </Reveal>
          ))}
        </ol>

        {/* Right Stack: Questions 05 - 08 */}
        <ol className="divide-y divide-border border-y border-border">
          {stack2.map((q, i) => (
            <Reveal
              as="li"
              key={q}
              delay={(i + 4) * 50}
              className="group flex items-start gap-4 py-4 transition-colors duration-200 hover:bg-background/80 px-2 rounded-sm md:py-5"
            >
              <span className="tech w-7 shrink-0 pt-0.5 text-[12px] font-semibold text-signal">
                {String(i + 5).padStart(2, "0")}
              </span>
              <span className="font-display text-[17px] font-semibold leading-snug text-text-primary md:text-[19px]">
                {q}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={80} className="mt-8 max-w-3xl text-[15px] text-text-secondary">
        <p>These questions are increasingly shaping Raghu’s philosophy of SAP Security.</p>
      </Reveal>
    </Section>
  );
}

function Connect() {
  const channels = [
    { label: "LinkedIn", value: "Raghu Boddu", href: LINKS.linkedin },
    { label: "SAP Profile", value: "@GRCwithRaghu", href: LINKS.sapCommunity },
    { label: "SAP Security Expert", value: "sapsecurityexpert.com", href: LINKS.sapSecurityExpert },
    { label: "ToggleNow", value: "togglenow.com", href: LINKS.toggleNow },
    { label: "Personal website", value: "www.raghuboddu.com", href: LINKS.personalSite },
  ];
  return (
    <Section id="connect">
      <SectionHeader
        eyebrow="Get in touch"
        title="Follow & Connect"
        intro="Connect with Raghu on his professional channels or his personal website for professional discussions, speaking opportunities, interviews, podcasts, research collaborations or SAP Security / GRC topics."
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="border-t border-border">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-border py-4 transition-colors duration-200 hover:bg-surface-2"
                >
                  <span className="flex flex-col">
                    <span className="eyebrow">{c.label}</span>
                    <span className="mt-1 text-[15px] text-text-primary">{c.value}</span>
                  </span>
                  <Arrow className="text-primary transition-transform duration-200 group-hover:translate-x-[3px]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-lg border border-border bg-surface-2 p-6 md:p-8">
            <p className="eyebrow">Start a conversation</p>
            <p className="mt-3 font-display text-[20px] font-semibold text-primary">
              Speaking, interviews, podcasts and research collaborations
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 text-[15px] font-medium text-signal-foreground transition-opacity duration-200 hover:opacity-90"
              >
                Connect with Raghu <Arrow />
              </a>
              <a
                href={LINKS.sapSecurityExpert}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-5 py-3 text-[15px] font-medium text-primary transition-colors duration-200 hover:bg-background"
              >
                Explore SAP Security Expert <Arrow />
              </a>
              <a
                href={LINKS.toggleNow}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-5 py-3 text-[15px] font-medium text-text-primary transition-colors duration-200 hover:bg-background"
              >
                Visit ToggleNow <Arrow />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
