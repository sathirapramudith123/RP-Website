import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { scope, components } from "@/data/content";

export default function ScopePage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Scope"
        title="Research Scope & Methodology"
        subtitle={scope.intro}
      />

      <div className="mt-10 card">
        <h3 className="font-display text-lg font-bold text-slate-900">
          Objectives
        </h3>
        <ul className="mt-4 space-y-3">
          {scope.objectives.map((o, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                {i + 1}
              </span>
              <span className="text-slate-600">{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-slate-900">
          The Four Components
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {components.map((c) => (
            <div key={c.id} className="card flex gap-4">
              <div className="text-3xl">{c.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">
                    {c.id}
                  </span>
                  <span className="text-xs text-slate-400">{c.task}</span>
                </div>
                <h4 className="mt-1 font-semibold text-slate-900">{c.title}</h4>
                <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
                <p className="mt-2 text-xs font-semibold text-brand-700">
                  {c.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-slate-900">
          Research Diagrams
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {scope.images.map((img) => (
            <figure key={img.src} className="card p-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          Place these images in <code>/public/images/scope/</code>.
        </p>
      </div>
    </div>
  );
}