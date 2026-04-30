import "./globals.css";
import { FloatingActions } from "../components/FloatingActions";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { business } from "../data/site-data";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${business.name} | AC Service & Repair in ${business.city}`,
    template: `%s | ${business.name}`
  },
  description:
    "Urban AC provides AC service, AC repair, AC installation, gas filling, AMC, and maintenance across Vadodara with same-day doorstep support."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
