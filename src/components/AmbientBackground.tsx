export default function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-[0.5]" />
      <div className="blob-drift-a absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full bg-brand-400/20 blur-[110px]" />
      <div className="blob-drift-b absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-400/15 blur-[110px]" />
      <div className="blob-drift-a absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-brand-300/12 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  );
}
