import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { team } from "@/data/content";

type Person = {
  name: string;
  role: string;
  photo: string;
  affiliation?: string;
  studentId?: string;
  github?: string;
};

function PersonCard(props: Person) {
  const { name, role, photo, affiliation, studentId, github } = props;
  return (
    <div className="card text-center">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-brand-50">
        <Image src={photo} alt={name} fill className="object-cover" sizes="112px" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{name}</h3>
      <p className="text-sm font-medium text-brand-700">{role}</p>
      {studentId ? <p className="mt-0.5 text-xs text-slate-400">{studentId}</p> : null}
      {affiliation ? <p className="mt-1 text-xs text-slate-400">{affiliation}</p> : null}
      {github ? (
        <p className="mt-3">
          <a href={github} className="text-xs font-semibold text-brand-700 hover:underline">
            GitHub
          </a>
        </p>
      ) : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="container-page py-16">
      <SectionHeader
        eyebrow="About Us"
        title="The Research Team"
        subtitle="The students and supervisors behind this research project."
      />

      <div className="mt-10">
        <h3 className="mb-5 font-display text-xl font-bold text-slate-900">Supervision</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
          {team.supervisors.map((s) => (
            <PersonCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="mb-5 font-display text-xl font-bold text-slate-900">Team Members</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((m) => (
            <PersonCard key={m.name} {...m} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-slate-400">
        Photos go in /public/images/ (m1 to m4, supervisor, cosupervisor).
      </p>
    </div>
  );
}