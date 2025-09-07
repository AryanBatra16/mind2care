import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

function Brand() {
  return (
    <a href="#top" className="inline-flex items-center gap-2">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary shadow-soft">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/70 to-primary/40" />
        <span className="relative text-sm font-semibold text-primary-foreground">
          M2
        </span>
      </span>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Mind2Care
      </span>
    </a>
  );
}

function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  },
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

type Props = { onMenuClick?: () => void };

export default function Header({ onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[hsl(var(--grayblue))]/60 bg-[hsl(var(--offwhite))]">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            aria-label="Open menu"
            onClick={onMenuClick}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-[hsl(var(--charcoal))] shadow-soft transition-transform hover:scale-[1.03]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Brand />
        </div>
        <div className="flex items-center justify-end gap-3">
          <a
            href="/signin"
            className="rounded-full bg-[hsl(var(--rose))] px-5 py-2 text-sm font-semibold text-white shadow-soft hover:scale-[1.02]"
          >
            Sign In / Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
