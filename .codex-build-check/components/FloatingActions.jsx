import { business } from "../data/site-data";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7.6 10.8a15.4 15.4 0 0 0 5.6 5.6l1.9-1.9a1.1 1.1 0 0 1 1.1-.27c1.2.4 2.4.61 3.7.61a1.1 1.1 0 0 1 1.1 1.1V20a1.1 1.1 0 0 1-1.1 1.1C10.97 21.1 2.9 13.03 2.9 3.1A1.1 1.1 0 0 1 4 2h3.06a1.1 1.1 0 0 1 1.1 1.1c0 1.28.21 2.52.61 3.7a1.1 1.1 0 0 1-.27 1.1l-1.9 1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 2.2A9.78 9.78 0 0 0 3.56 17l-1.1 4.03 4.13-1.08A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8.03 8.03 0 0 1-4.1-1.12l-.29-.17-2.45.64.66-2.38-.19-.31A8.02 8.02 0 1 1 12 20Zm4.4-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.92-1.17-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.06 3.58.57.24 1.02.38 1.37.48.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={business.phoneHref}
        aria-label="Call Urban AC"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0B0B0B] text-white shadow-[0_18px_36px_rgba(11,11,11,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_24px_46px_rgba(11,11,11,0.28)] active:scale-[0.95]"
      >
        <PhoneIcon />
      </a>
      <a
        href={business.whatsappHref}
        aria-label="WhatsApp Urban AC"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_36px_rgba(34,197,94,0.26)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#16a34a] hover:shadow-[0_24px_46px_rgba(34,197,94,0.32)] active:scale-[0.95]"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

