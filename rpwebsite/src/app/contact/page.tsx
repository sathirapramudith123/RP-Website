import SectionHeader from "@/components/SectionHeader";
import { contact, site } from "@/data/content";

export default function ContactPage() {
  const rows = [
    { icon: "email", label: "Email", value: contact.email, href: "mailto:" + contact.email },
    { icon: "uni", label: "University", value: contact.university, href: "" },
    { icon: "loc", label: "Address", value: contact.address, href: "" },
    { icon: "repo", label: "Repository", value: "GitHub", href: contact.githubOrg },
  ];

  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle={"Questions about " + site.projectId + "? Reach out to the team."}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="card flex items-start gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{r.label}</p>
              {r.href ? (
                <p className="mt-0.5">
                  <a href={r.href} className="font-medium text-brand-700 hover:underline">{r.value}</a>
                </p>
              ) : (
                <p className="mt-0.5 font-medium text-slate-800">{r.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}