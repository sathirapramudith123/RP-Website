import SectionHeader from "@/components/SectionHeader";
import { presentations } from "@/data/content";
import { cn } from "@/utils/cn";

export default function PresentationsPage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Slides"
        title="Research Presentations"
        subtitle="Proposal, progress, and upcoming final presentation slide decks prepared during the Lanak Link research project."
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {presentations.map((p) => {
          const isAvailable = p.status === "available";
          return (
            <div key={p.title} className="card overflow-hidden !p-0">
              <div className="border-b border-slate-100 bg-slate-50/60 px-6 py-8 text-center">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-brand-700">
                  {p.subtitle}
                </p>
                <div className="mx-auto mt-3 h-px w-16 bg-slate-200" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {p.tag}
                </p>
              </div>

              <div className="px-6 py-6">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                    isAvailable
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      isAvailable ? "bg-emerald-500" : "bg-amber-500"
                    )}
                  />
                  {isAvailable ? "Available" : "Upcoming"}
                </span>

                <h3 className="mt-3 font-semibold text-slate-900">{p.tag}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {p.desc}
                </p>

                <p className="mt-4 text-xs text-slate-400">
                  {p.stage} <span className="mx-1.5">·</span> {p.fileType}
                </p>

                <div className="mt-6 flex gap-3">
                  {isAvailable ? (
                    <>
                      <a
                        href={p.available ? p.href : "#"}
                        className={cn(
                          "flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition",
                          p.available
                            ? "bg-brand text-white hover:bg-brand-800"
                            : "cursor-not-allowed bg-slate-100 text-slate-400"
                        )}
                      >
                        {p.actionLabel}
                      </a>
                      <a
                        href={p.available ? p.href : "#"}
                        download={p.available}
                        className={cn(
                          "flex-1 rounded-xl border px-4 py-2.5 text-center text-sm font-semibold transition",
                          p.available
                            ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                            : "cursor-not-allowed border-slate-100 text-slate-300"
                        )}
                      >
                        Download
                      </a>
                    </>
                  ) : (
                    <span className="flex-1 rounded-xl bg-slate-100 px-4 py-2.5 text-center text-sm font-medium text-slate-400">
                      {p.actionLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-xs text-slate-400">
        Put files in <code>/public/presentations/</code>, then set{" "}
        <code>available: true</code> in <code>content.ts</code>.
      </p>
    </div>
  );
}