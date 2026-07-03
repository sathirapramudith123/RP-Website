import SectionHeader from "@/components/SectionHeader";
import { downloads } from "@/data/content";

export default function DownloadsPage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Documents"
        title="Downloads"
        subtitle="Research documents and deliverables."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {downloads.map((d) => (
          <div key={d.title} className="card flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                📄
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
        Put files in <code>/public/downloads/</code>, then set{" "}
        <code>available: true</code> in <code>content.ts</code>.
      </p>
    </div>
  );
}