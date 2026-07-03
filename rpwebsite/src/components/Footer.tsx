import Link from "next/link";
import { nav, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white">
                🌿
              </span>
              <span className="font-display font-bold text-slate-900">
                {site.projectId}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {site.title}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Pages
            </p>
            <ul className="space-y-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {site.year} {site.projectId} · {site.module} · {site.university}
        </div>
      </div>
    </footer>
  );
}