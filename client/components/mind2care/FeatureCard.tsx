import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: Props) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/60 text-primary-foreground shadow-soft">
        {icon}
      </div>
      <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-foreground/70">{desc}</p>
    </div>
  );
}
