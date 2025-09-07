import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Button(
  { variant = "primary", className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" },
) {
  const base = "rounded-2xl px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[hsl(var(--rose))] text-white shadow-soft hover:scale-[1.02]"
      : variant === "secondary"
        ? "bg-[hsl(var(--grayblue))] text-[hsl(var(--charcoal))] hover:scale-[1.02]"
        : "bg-transparent text-[hsl(var(--charcoal))] hover:bg-[hsl(var(--beige))]";
  return <button className={cn(base, styles, className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-[hsl(var(--grayblue))] bg-[hsl(var(--beige))] shadow-soft", className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4 pb-0", className)} {...props} />;
}
export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}
export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4 pt-0", className)} {...props} />;
}

export function QuoteCard({ quote, author }: { quote: string; author?: string }) {
  return (
    <Card className="text-center">
      <CardBody>
        <p className="text-lg font-semibold text-[hsl(var(--charcoal))]">“{quote}”</p>
        {author ? <p className="mt-2 text-sm text-[hsl(var(--charcoal))]/70">— {author}</p> : null}
      </CardBody>
    </Card>
  );
}

export function MoodSelector({ onSelect }: { onSelect?: (n: number) => void }) {
  const moods = ["😞", "🙁", "😐", "🙂", "😄"];
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-[hsl(var(--charcoal))]">Quick Mood</h3>
      </CardHeader>
      <CardBody className="flex items-center justify-between">
        {moods.map((m, i) => (
          <button
            key={i}
            aria-label={`Mood ${i + 1}`}
            onClick={() => onSelect?.(i + 1)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-white text-xl text-[hsl(var(--charcoal))] hover:scale-105"
          >
            {m}
          </button>
        ))}
      </CardBody>
    </Card>
  );
}

export function Badge({ locked, children }: { locked?: boolean; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", locked ? "bg-white text-[hsl(var(--charcoal))]/60" : "bg-[hsl(var(--rose))] text-white")}>{children}</span>
  );
}

export function ChallengeCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-base font-semibold text-[hsl(var(--charcoal))]">{title}</h3>
      </CardHeader>
      <CardBody>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[hsl(var(--charcoal))]/80">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button>Accept challenge</Button>
      </CardFooter>
    </Card>
  );
}

export function TaskCard({ title, tag, due }: { title: string; tag?: string; due?: string }) {
  return (
    <Card className="relative">
      <CardBody>
        <p className="text-sm font-medium text-[hsl(var(--charcoal))]">{title}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-[hsl(var(--charcoal))]/70">
          {tag ? <span className="rounded-full bg-white px-2 py-0.5">{tag}</span> : null}
          {due ? <span>Due {due}</span> : null}
        </div>
        <span className="absolute right-2 top-2 cursor-grab select-none text-[hsl(var(--charcoal))]/40">⋮⋮</span>
      </CardBody>
    </Card>
  );
}

export function ChartPlaceholder({ height = 180 }: { height?: number }) {
  return (
    <Card>
      <svg role="img" aria-label="chart placeholder" className="w-full" height={height} viewBox="0 0 600 200">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--rose))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--grayblue))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="200" fill="white" />
        <path d="M0 160 C80 120, 160 140, 240 90 S400 110, 600 60" stroke="hsl(var(--charcoal))" strokeOpacity="0.3" strokeWidth="2" fill="url(#g)" />
      </svg>
    </Card>
  );
}
