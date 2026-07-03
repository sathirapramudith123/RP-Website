import Link from "next/link";
import HeroIllustration from "@/components/HeroIllustration";
import SectionHeader from "@/components/SectionHeader";
import { site, abstract, components } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="gradient-brand text-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
              {site.projectId} · {site.module}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              {site.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {site.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/scope"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:shadow-xl"
              >
                Explore the Research →
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeader eyebrow="Overview" title={abstract.heading} />
        <div className="mt-6 space-y-4">
          {abstract.paragraphs.map((p, i) => (
            <p key={i} className="max-w-3xl leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16">
        <div className="container-page">
          <SectionHeader
            center
            eyebrow="Machine Learning"
            title="Four Explainable Components"
            subtitle="Each model is validated rigorously and paired with SHAP explanations — the unifying research contribution."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {components.map((c) => (
              <div key={c.id} className="card">
                <div className="text-3xl">{c.icon}</div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">
                    {c.id}
                  </span>
                  <span className="text-xs text-slate-400">{c.task}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {c.desc}
                </p>
                <p className="mt-3 text-xs font-semibold text-brand-700">
                  {c.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}