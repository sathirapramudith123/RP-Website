import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-extrabold text-brand-700">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-2 text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary mt-6">
        ← Back to Home
      </Link>
    </div>
  );
}