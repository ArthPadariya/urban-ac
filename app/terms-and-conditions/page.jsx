import { LegalPage } from "../../components/LegalPage";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { business } from "../../data/site-data";
import { buildBreadcrumbSchema, buildWebPageSchema, createStaticPageMetadata } from "../../lib/seo";

const lines = [
  
  "Terms & Conditions – Urban AC (UAC)",
  "Effective Date: 03-05-2026",
  "Welcome to Urban AC (UAC). By accessing our website or booking our services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.",
  "1. About Our Services",
  "Urban AC provides air conditioning services including:",
  "• AC Repair",
  "• AC Service",
  "• AC Installation",
  "• AC Gas Filling",
  "• AC Maintenance (AMC)",
  "• AC Cleaning and related services",
  "All services are offered in and around Vadodara, Gujarat.",
  "2. Service Booking & Confirmation",
  "• Customers can book services via phone, website, or other communication channels.",
  "• Service requests are subject to availability.",
  "• Booking confirmation will be provided via call or message.",
  "• Urban AC reserves the right to reschedule services due to operational or external factors.",
  "3. Pricing & Payments",
  "• Service charges depend on the type of work required.",
  "• Estimated pricing may be shared before service, but final cost is based on actual work done.",
  "• Any additional repairs or spare parts will be informed before proceeding.",
  "• Payments must be made immediately after service completion unless agreed otherwise.",
  "• We follow transparent pricing with no hidden charges.",
  "4. Cancellation & Rescheduling",
  "• Customers can cancel or reschedule appointments by informing us in advance.",
  "• Last-minute cancellations may affect future priority bookings.",
  "• Urban AC reserves the right to cancel or reschedule due to technician availability or unforeseen circumstances.",
  "5. Service Warranty (If Applicable)",
  "• Warranty (if provided) is limited to specific services or repairs only.",
  "• Warranty does not cover damage caused by misuse, external factors, or unauthorized modifications.",
  "• Details of warranty (if any) will be communicated during service.",
  "6. Customer Responsibilities",
  "Customers agree to:",
  "• Provide accurate address and contact details",
  "• Ensure safe and accessible working conditions for technicians",
  "• Inform technicians about any known issues or prior repairs",
  "• Avoid interference during service work",
  "Urban AC is not responsible for delays caused by incomplete or incorrect information.",
  "7. Limitation of Liability",
  "• Urban AC will perform services with reasonable care and skill.",
  "• We are not liable for pre-existing issues, hidden defects, or damage due to system age or condition.",
  "• Urban AC is not responsible for indirect or consequential losses arising from service delays or failures.",
  "8. Spare Parts & Materials",
  "• Any spare parts used during repair will be charged separately.",
  "• We aim to use quality parts, but availability may vary.",
  "• Customers will be informed before replacing any major component.",
  "9. Safety & Conduct",
  "• Our technicians follow standard safety procedures during service.",
  "• Customers are expected to maintain a safe environment during service visits.",
  "• Any abusive or unsafe behavior may lead to service refusal.",
  "10. Website Usage",
  "• All content on this website is for informational purposes only.",
  "• Unauthorized use, copying, or reproduction of content is prohibited.",
  "• Urban AC reserves the right to modify website content at any time.",
  "11. Privacy",
  "Your use of our services is also governed by our Privacy Policy, which explains how we collect and use your information.",
  "12. Changes to Terms",
  "Urban AC reserves the right to update or modify these Terms & Conditions at any time. Updated terms will be posted on this page with the revised effective date.",
  "13. Governing Law",
  "These Terms & Conditions are governed by the laws of India, and any disputes will be subject to the jurisdiction of courts in Vadodara, Gujarat.",
  "14. Contact Information",
  "For any queries regarding these Terms & Conditions, please contact:",
  "Urban AC (UAC)",
  "📞 Phone: +91 6354658540",
  "📍 Address: Waghodia Road, Vadodara, Gujarat – 390025",
  "🕒 Working Hours: 7:00 AM to 10:00 PM"
  
];

const title = `Terms and Conditions | ${business.name}`;
const description = `Read the terms and conditions for ${business.name} AC services and website usage.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/terms-and-conditions",
  keywords: [`${business.name} terms and conditions`, `${business.name} service terms`]
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        id="terms-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/terms-and-conditions" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms-and-conditions" }
          ])
        ]}
      />
      <LegalPage eyebrow="Legal" title="Terms & Conditions" subtitle="The terms that govern use of our website and services." lines={lines} />
    </>
  );
}
