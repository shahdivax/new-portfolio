import { ReactNode } from "react";

export function Section({ id, title, children, accessory }: { id: string; title: string; children: ReactNode; accessory?: ReactNode }) {
  return (
    <section id={id} className="container-px max-w-wrapper py-16 md:py-24">
      <div className="flex items-start justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-teal-500 to-amber bg-clip-text text-transparent">{title}</span>
        </h2>
        <div className="shrink-0 translate-y-1">{accessory}</div>
      </div>
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}

