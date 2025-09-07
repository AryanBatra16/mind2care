import ChatDemo from "@/components/mind2care/ChatDemo";

export default function Index() {
  return (
    <main className="min-h-[calc(100vh-140px)] bg-[hsl(var(--beige))] px-4 py-6 md:px-6">
      <section className="mx-auto mb-4 max-w-[880px] rounded-2xl bg-[hsl(var(--offwhite))] p-4 text-center shadow-soft">
        <h1 className="text-xl font-semibold text-[hsl(var(--charcoal))]">Mind2Care</h1>
        <p className="mt-1 text-sm text-[hsl(var(--charcoal))]/80">Your AI-powered mental health companion</p>
        <button
          className="mt-3 inline-flex rounded-full bg-[hsl(var(--rose))] px-5 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
          onClick={() => document.getElementById("home-chat-input")?.focus()}
        >
          Start chatting
        </button>
      </section>
      <div className="mx-auto max-w-[880px]">
        <ChatDemo height={78} inputId="home-chat-input" />
      </div>
    </main>
  );
}
