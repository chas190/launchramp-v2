import { Layers, Map, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import aisteinLogo from "../assets/aistein-card.webp";
import logo from "../assets/launchramp-logo.png";

const pillars: { t: string; d: string; icon: LucideIcon }[] = [
  { t: "Gap Map", d: "We identify your talent and resource gaps, then bring the tools and expertise to fill them.", icon: Map },
  { t: "Advantaged Model", d: "A hybrid human-centered, AI-powered jolt that drives your company toward its top velocity.", icon: TrendingUp },
  { t: "Aistein AI", d: "A battle-tested business AI and cloud platform focused on cash flow and profitability.", icon: Sparkles },
  { t: "STEP Platform", d: "An integrated, guided platform where proven teams and tools are amplified with AI.", icon: Layers },
];

const steps = [
  { n: "01", t: "Get up to speed", d: "An incubator front end where needed, with an accelerator mindset throughout." },
  { n: "02", t: "Build your team", d: "Tap our network of advisors, industry partners and accredited investors." },
  { n: "03", t: "Launch & scale", d: "Place the support and resources to put your dream on its fastest growth path." },
];

/*
 * One shared gradient for every line icon on the page. gradientUnits="userSpaceOnUse"
 * with 0->24 coords matches lucide's 24x24 viewBox, so all strokes in an icon ramp
 * red-500 -> yellow-400 -> orange-600 the same way instead of per-path.
 */
function HeatGradientDefs() {
  return (
    <svg aria-hidden="true" focusable="false" className="absolute h-0 w-0">
      <defs>
        <linearGradient id="heat-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" style={{ stopColor: "var(--heat-1)" }} />
          <stop offset="50%" style={{ stopColor: "var(--heat-2)" }} />
          <stop offset="100%" style={{ stopColor: "var(--heat-3)" }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LaunchRampHome({ contact }: { contact: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeatGradientDefs />
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <img src={logo} alt="Launch Ramp" className="h-9 w-auto" />
          <a href="#contact" className="btn-heat rounded-full px-5 py-2 text-sm font-bold">Get started</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-glow">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 text-center md:pt-24">
          <img src={logo} alt="Launch Ramp logo" width={2000} height={851} className="mx-auto w-full max-w-3xl rounded-3xl shadow-glow" />
          <h1 className="mx-auto mt-12 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Launch your dream on its <span className="text-heat">fastest growth path</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A powerful environment for startups through mid-tier companies — backed by advisors, industry partners, accredited investors and human-centered AI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-heat rounded-full px-7 py-3 font-bold">Apply to Launch Ramp</a>
            <a href="#how" className="rounded-full border border-heat-3/60 px-7 py-3 font-medium text-heat-2 transition hover:bg-heat-3/15">How it works</a>
          </div>
        </div>
        <div className="h-1 bg-heat" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-heat">The Launch Ramp advantage</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Human-centered. AI-powered. Built for velocity.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-heat-3/50 hover:shadow-glow">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60">
                <p.icon size={26} strokeWidth={1.6} color="url(#heat-line)" />
              </div>
              <h3 className="text-xl font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <div className="mt-5 h-1 w-12 rounded-full bg-heat transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">From idea to <span className="text-heat">rocket-powered growth</span></h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="font-display text-5xl font-bold text-heat">{s.n}</span>
                <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aistein" aria-labelledby="aistein-heading" className="scroll-mt-24 px-5 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[linear-gradient(115deg,#147be3_0%,#32c9ff_29%,#79d831_55%,#ffc34c_79%,#ff7917_100%)] p-[2px]">
          <div className="grid items-center gap-6 rounded-[calc(1.5rem-2px)] bg-background p-5 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8 sm:p-7 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
            <img
              src={aisteinLogo}
              alt="Aistein portrait and logo"
              width={560}
              height={560}
              loading="lazy"
              decoding="async"
              className="mx-auto aspect-square w-40 rounded-2xl object-contain sm:w-full"
            />
            <div>
              <h2 id="aistein-heading" className="text-3xl font-bold text-foreground md:text-4xl">
                Aistein
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Aistein is the AI governance layer within the STEP Platform. It coordinates AI
                officers and specialist agents alongside human leaders to spot gaps in talent,
                technology, and resources. Growing companies can pair that support with fractional
                executives to forecast cash flow, prioritize technology investments, and turn growth
                plans into work their teams can deliver. Human leaders set the priorities and make
                the decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
        <h2 className="text-3xl font-bold md:text-4xl">Find and expand your <span className="text-heat">Secret Sauce</span></h2>
        <p className="text-lg text-muted-foreground">
          Our team identifies strategic and technical advantages, then applies AI to real-world innovation — creating new revenue, stronger cash flow and lasting value for every stakeholder, and positive change in your community. Silicon Valley expertise, wherever you are.
        </p>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 pb-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-heat-soft p-[2px]">
          <div className="grid gap-6 rounded-[calc(1.5rem-2px)] bg-background px-5 py-6 md:grid-cols-[0.85fr_1.15fr] md:items-center md:px-8">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-heat">Contact Launch Ramp</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Ready for liftoff?</h2>
              <p className="mt-4 text-muted-foreground">
                Tell us about your business and we'll map the fastest route to growth.
              </p>
              <div className="mt-8 space-y-4 text-left text-sm">
                {["Talent and resource gaps", "Advisors, partners and investors", "AI-powered growth systems"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-8 rounded-full bg-heat" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {contact}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Launch Ramp. Powered by Aistein & the STEP Platform.
      </footer>
    </main>
  );
}
