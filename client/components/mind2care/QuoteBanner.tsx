export default function QuoteBanner() {
  return (
    <section className="relative isolate mx-auto my-16 w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary/80 to-card shadow-card">
      <div className="px-8 py-12 text-center md:px-16 md:py-16">
        <blockquote className="text-lg font-semibold text-foreground">
          “Every small step you take for your mind is a giant leap for your wellbeing.”
        </blockquote>
      </div>
    </section>
  );
}
