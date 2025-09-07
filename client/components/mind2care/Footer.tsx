export default function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <p className="text-sm opacity-90">© {new Date().getFullYear()} Mind2Care. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/about#contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
