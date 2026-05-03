import Link from "next/link";

export function LocationCard({ location, index = 0 }) {
  return (
    <Link
      href={`/ac-service-${location.slug}`}
      className="group relative mx-auto flex h-full w-full max-w-[90%] cursor-pointer flex-col overflow-hidden rounded-xl border border-[#eee] bg-white px-4 py-4 text-[#111] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-200 ease-out active:scale-[0.97] active:bg-[#0f172a] md:max-w-none md:rounded-2xl md:p-5 md:duration-300 md:hover:-translate-y-2 md:hover:scale-[1.02] md:hover:border-transparent md:hover:bg-[#111] md:hover:text-white md:hover:shadow-[0_22px_48px_rgba(0,0,0,0.12)] motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />
      <div className="relative">
        <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ececec] bg-[#f7f7f7] text-base transition-all duration-300 group-active:border-white/20 group-active:bg-white/10 md:group-hover:border-white/15 md:group-hover:bg-white/10">
          📍
        </span>
        <h3 className="mb-2 text-lg font-extrabold leading-relaxed tracking-tight text-[#111] transition-colors duration-300 group-active:text-white md:text-[1.55rem] md:group-hover:text-white">
          {location.name}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#666] transition-colors duration-300 group-active:text-white/80 md:text-[13px] md:leading-6 md:group-hover:text-white/75">
          AC repair, service, installation, cleaning, and gas-filling support in and around {location.landmark}.
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#555] transition-all duration-300 group-active:border-white/20 group-active:bg-white/10 group-active:text-white/80 md:group-hover:border-white/15 md:group-hover:bg-white/10 md:group-hover:text-white/80">
            {location.responseTime}
          </span>
          <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#111] transition-all duration-300 group-active:text-white md:group-hover:gap-3 md:group-hover:text-white">
            <span>Explore</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

