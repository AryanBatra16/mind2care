import { CalendarCheck, Quote, Flag, CheckCircle2, Users, Smile, Map, Bot, Home } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Bot, label: "AI Chatbot", href: "#chat" },
  { icon: CalendarCheck, label: "Daily Tracker", href: "#" },
  { icon: Quote, label: "Quotes", href: "#" },
  { icon: Flag, label: "Daily Challenges", href: "#" },
  { icon: CheckCircle2, label: "Self Tasks", href: "#" },
  { icon: Users, label: "Community", href: "#" },
  { icon: Smile, label: "Mood Tracker", href: "#" },
  { icon: Map, label: "Growth Map", href: "#" },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-[opacity] ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <aside
        className={`absolute left-0 top-0 h-full w-[86%] max-w-sm translate-x-0 bg-background shadow-card transition-transform duration-300 md:w-[420px] ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-base font-semibold">Menu</span>
          <button onClick={onClose} className="rounded-xl bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">Close</button>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-transform hover:scale-[1.01] hover:shadow-card hover:border-primary/70 hover:bg-primary/10"
              onClick={onClose}
            >
              <l.icon className="h-5 w-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">{l.label}</span>
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}
