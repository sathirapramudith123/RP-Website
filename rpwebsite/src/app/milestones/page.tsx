import SectionHeader from "@/components/SectionHeader";
import { milestones } from "@/data/content";
import { cn } from "@/utils/cn";

const dot: Record<string, string> = {
  done: "bg-brand-600 border-brand-600",
  current: "bg-white border-brand-600 ring-4 ring-brand-100",
  upcoming: "bg-white border-slate-300",
};
const badge: Record<string, string> = {
  done: "bg-emerald-50 text-emerald-700",
  current: "bg-amber-50 text-amber-700",
  upcoming: "bg-slate-100 text-slate-500",
};
const label: Record<string, string> = {
  done: "Completed",
  current: "In Progress",
  upcoming: "Upcoming",
};

export default function MilestonesPage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Timeline"
        title="Project Milestones"
        subtitle="The phases of the research from proposal to final evaluation."
      />

      <div className="relative mt-12 ml-3 border-l-2 border-slate-200 pl-8">
        {milestones.map((m, i) => (
          <div key={i} className="relative pb-10 last:pb-0">
            <span
              className={cn(
                "absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2",
                dot[m.status]
              )}
            />
            <div className="card">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {m.phase}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    badge[m.status]
                  )}
                >
                  {label[m.status]}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-slate-400">{m.date}</p>
              <ul className="mt-3 space-y-1.5">
                {m.items.map((it, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-brand-600">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}