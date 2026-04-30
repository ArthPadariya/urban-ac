import { business } from "../data/site-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 grid grid-cols-2 gap-3 md:bottom-4 md:left-auto md:right-4 md:w-[15rem]">
      <a href={business.phoneHref} className="btn-primary">
        Call Now
      </a>
      <a href={business.whatsappHref} className="btn-whatsapp">
        WhatsApp
      </a>
    </div>
  );
}
