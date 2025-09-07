import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <a href="#top" className="inline-flex items-center gap-2">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary shadow-soft">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/70 to-primary/40" />
        <span className="relative text-sm font-semibold text-primary-foreground">M2</span>
      </span>
      <span className="text-xl font-bold tracking-tight text-foreground">Mind2Care</span>
    </a>
  );
}

function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" },
) {
  const { className, variant = "primary", ...rest } = props;
  return (
    <button
      {...rest}
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-semibold transition-transform duration-200",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-soft hover:scale-[1.02] hover:shadow-card"
          : "bg-secondary text-secondary-foreground hover:scale-[1.02]",
        className,
      )}
    />
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Brand />
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-foreground/80 hover:text-foreground">
            Features
          </a>
          <a href="#chatbot" className="text-sm text-foreground/80 hover:text-foreground">
            Chatbot
          </a>
          <a href="#growth" className="text-sm text-foreground/80 hover:text-foreground">
            Growth Map
          </a>
          <a href="#community" className="text-sm text-foreground/80 hover:text-foreground">
            Community
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
