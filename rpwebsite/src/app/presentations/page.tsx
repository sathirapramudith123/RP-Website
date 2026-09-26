import SectionHeader from "@/components/SectionHeader";
import { presentations } from "@/data/content";

export default function PresentationsPage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Slides"
        title="Presentations"
        subtitle="Slide decks used throughout the research project."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {presentations.map((d) => (
          <div key={d.title} className="card flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                🖥️
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{d.title}</h3>
                <p className="text-sm text-slate-500">{d.desc}</p>
              </div>
            </div>
            {d.available ? (
              <a href={d.href} download className="btn-primary">
                Download
              </a>
            ) : (
              <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400">
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        Put files in <code>/public/presentations/</code>, then set{" "}
        <code>available: true</code> in <code>content.ts</code>.
      </p>
    </div>
  );
}