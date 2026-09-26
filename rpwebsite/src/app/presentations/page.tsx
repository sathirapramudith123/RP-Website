import { presentations } from "@/data/content";
import { cn } from "@/utils/cn";

export default function PresentationsPage() {
  return (
    <div className="bg-slate-950 py-16 text-slate-100">
      <div className="container-page">
        <div className="text-center">
          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
            Research{" "}
            <span className="bg-gradient-to-r from-sky-400 to-brand-400 bg-clip-text text-transparent">
              Presentations
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Proposal, progress, and upcoming final presentation slide decks
            prepared during the Lanak Link research project.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {presentations.map((p) => {
            const isAvailable = p.status === "available";
            return (
              <div
                key={p.title}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                <div className="border-b border-slate-800 bg-slate-900/60 px-6 py-8 text-center">
                  <h2 className="font-display text-xl font-bold text-white">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-sky-400">{p.subtitle}</p>
                  <div className="mx-auto mt-3 h-px w-16 bg-slate-700" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-widest text-slate-500">
                    {p.tag}
                  </p>
                </div>

                <div className="px-6 py-6">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                      isAvailable
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        isAvailable ? "bg-emerald-400" : "bg-amber-400"
                      )}
                    />
                    {isAvailable ? "Available" : "Upcoming"}
                  </span>

                  <h3 className="mt-3 font-semibold text-white">{p.tag}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {p.desc}
                  </p>

                  <p className="mt-4 text-xs text-slate-500">
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
                              ? "bg-sky-500 text-white hover:bg-sky-400"
                              : "cursor-not-allowed bg-sky-500/20 text-sky-300/60"
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
                              ? "border-sky-500/60 text-sky-300 hover:bg-sky-500/10"
                              : "cursor-not-allowed border-slate-700 text-slate-500"
                          )}
                        >
                          Download
                        </a>
                      </>
                    ) : (
                      <span className="flex-1 rounded-xl border border-slate-700 px-4 py-2.5 text-center text-sm font-semibold text-slate-500">
                        {p.actionLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Put files in <code>/public/presentations/</code>, then set{" "}
          <code>available: true</code> in <code>content.ts</code>.
        </p>
      </div>
    </div>
  );
}