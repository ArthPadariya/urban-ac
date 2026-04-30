export function SectionTitle({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <span className={`eyebrow ${dark ? "border-white/10 bg-white/5 text-white/70" : ""}`}>{eyebrow}</span>
        <h2 className={`section-title mt-3 ${dark ? "text-white" : ""}`}>{title}</h2>
      </div>
      {description ? (
        <p className={`max-w-2xl text-sm leading-7 md:text-base ${dark ? "text-white/70" : "text-smoke"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
