import ChatDemo from "@/components/mind2care/ChatDemo";

export default function Index() {
  return (
    <main className="min-h-[calc(100vh-140px)] bg-[hsl(var(--beige))] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[880px]">
        <ChatDemo height={78} />
      </div>
    </main>
  );
}
