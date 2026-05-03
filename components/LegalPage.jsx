import { LocationsMotionStyles } from "./LocationsMotionStyles";

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555]">
      {children}
    </span>
  );
}

function renderLine(line, key) {
  if (line.startsWith("•")) {
    return (
      <li key={key} className="ml-5 list-disc text-[15px] leading-8 text-[#555]">
        {line.slice(1).trim()}
      </li>
    );
  }

  if (/^\d+\./.test(line)) {
    return (
      <h2 key={key} className="pt-2 text-[1.05rem] font-semibold text-[#111]">
        {line}
      </h2>
    );
  }

  if (line.startsWith("<!--") || line.endsWith("(UAC)")) {
    return (
      <p key={key} className="text-[15px] leading-8 text-[#555]">
        {line}
      </p>
    );
  }

  if (line.startsWith("Effective Date:")) {
    return (
      <p key={key} className="text-sm font-medium text-[#666]">
        {line}
      </p>
    );
  }

  return (
    <p key={key} className="text-[15px] leading-8 text-[#555]">
      {line}
    </p>
  );
}

export function LegalPage({ eyebrow, title, subtitle, lines }) {
  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="mb-5 mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-3xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">{subtitle}</p>
          ) : null}
        </div>
      </section>

      <section className="bg-[#f8fafc] pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-[28px] border border-[#eee] bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:p-10">
            <div className="space-y-4">
              {lines.map((line, index) => renderLine(line, `${line}-${index}`))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
