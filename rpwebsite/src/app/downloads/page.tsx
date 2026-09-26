import SectionHeader from "@/components/SectionHeader";
import { documentSections } from "@/data/content";
import { cn } from "@/utils/cn";

export default function DownloadsPage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Project Documents"
        title="Research Documents"
        subtitle="Official research paper, presentation slide decks, individual proposal reports, thesis reports, and group thesis report prepared for the Lanak Link research project."
        center
      />

      <div className="mt-14 space-y-14">
        {documentSections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                {section.icon}
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="text-sm text-slate-500">{section.desc}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {section.documents.map((doc) => {
                const isAvailable = doc.status === "available";
                return (
                  <div key={doc.title} className="card">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs font-semibold text-slate-500">
                        {doc.fileType}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
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
                    </div>

                    <h3 className="mt-3 font-semibold text-slate-900">
                      {doc.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {doc.desc}
                    </p>
                    <p className="mt-3 text-xs font-medium text-brand-700">
                      {doc.tag}
                    </p>

                    <div className="mt-5 flex gap-3">
                      <a
                        href={isAvailable && doc.openHref ? doc.openHref : "#"}
                        target={isAvailable && doc.openHref ? "_blank" : undefined}
                        rel="noreferrer"
                        className={cn(
                          "flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition",
                          isAvailable && doc.openHref
                            ? "bg-brand text-white hover:bg-brand-800"
                            : "cursor-not-allowed bg-slate-100 text-slate-400"
                        )}
                      >
                        {doc.actionLabel}
                      </a>
                      <a
                        href={isAvailable && doc.downloadHref ? doc.downloadHref : "#"}
                        className={cn(
                          "flex-1 rounded-xl border px-4 py-2.5 text-center text-sm font-semibold transition",
                          isAvailable && doc.downloadHref
                            ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                            : "cursor-not-allowed border-slate-100 text-slate-300"
                        )}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-slate-400">
        Fill in <code>openHref</code> / <code>downloadHref</code> and set{" "}
        <code>status: &quot;available&quot;</code> for each document in{" "}
        <code>content.ts</code>.
      </p>
    </div>
  );
}