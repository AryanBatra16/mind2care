import {
  CalendarCheck,
  Quote,
  Flag,
  CheckCircle2,
  Users,
  Smile,
  Map,
  Bot,
  Home,
  Info,
} from "lucide-react";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Bot, label: "Chat", href: "/chat" },
  { icon: CalendarCheck, label: "Daily Tracker", href: "/tracker" },
  { icon: Quote, label: "Quotes", href: "/quotes" },
  { icon: Flag, label: "Challenges", href: "/challenges" },
  { icon: CheckCircle2, label: "Self Tasks", href: "/tasks" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: Smile, label: "Mood Tracker", href: "/mood" },
  { icon: Map, label: "Growth Map", href: "/growth" },
  { icon: Info, label: "About", href: "/about" },
  { icon: Quote, label: "Privacy", href: "/privacy" },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { pathname } = useLocation();
  return (
    <div
      className={`fixed inset-0 z-50 transition-[opacity] ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <aside
        className={`absolute left-0 top-0 h-full w-[86%] max-w-sm translate-x-0 bg-background shadow-card transition-transform duration-300 md:w-[420px] ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-base font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="rounded-xl bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
          >
            Close
          </button>
        </div>
        <nav className="grid grid-cols-1 gap-4 p-5">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <a
                key={l.label}
                href={l.href}
                className={`flex items-center gap-3 rounded-2xl border p-4 shadow-soft transition-transform hover:scale-[1.01] hover:shadow-card ${active ? "border-[hsl(var(--rose))]/60 bg-[hsl(var(--rose))]/10" : "border-border bg-card hover:border-[hsl(var(--rose))]/60 hover:bg-[hsl(var(--rose))]/10"}`}
                onClick={onClose}
              >
                <l.icon className="h-5 w-5 text-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {l.label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
