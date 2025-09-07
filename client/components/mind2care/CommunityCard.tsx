interface Props {
  author: string;
  text: string;
}

export default function CommunityCard({ author, text }: Props) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div>
        <p className="text-sm text-foreground/80">{text}</p>
        <p className="mt-3 text-xs text-foreground/60">Posted by {author}</p>
      </div>
      <div className="mt-4">
        <button className="rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]">
          Join Conversation
        </button>
      </div>
    </div>
  );
}
