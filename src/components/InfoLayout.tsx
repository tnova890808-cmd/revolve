export default function InfoLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="border-b border-line bg-ink-2">
        <div className="shell py-14">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">{intro}</p>}
        </div>
      </section>
      <section className="shell max-w-3xl py-12">
        <div className="space-y-8 text-sm leading-relaxed text-neutral-300">{children}</div>
      </section>
    </div>
  );
}

export function InfoBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-white">{heading}</h2>
      <div className="mt-2 space-y-2 text-neutral-400">{children}</div>
    </div>
  );
}
