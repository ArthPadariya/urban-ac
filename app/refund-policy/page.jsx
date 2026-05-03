import { LegalPage } from "../../components/LegalPage";
import { business } from "../../data/site-data";

const lines = [
  "Refund Policy – Urban AC (UAC)",
  "Effective Date: 03-05-2026",
  "At Urban AC (UAC), we are committed to delivering quality AC services across Vadodara. Due to the nature of our on-site services, we maintain a strict no-refund policy once the service has been completed.",
  "1. No Refund Policy",
  "• All payments made for AC services, including repair, installation, servicing, gas filling, or maintenance, are non-refundable.",
  "• Once a service is completed, no refunds will be issued under any circumstances.",
  "2. Service-Based Nature",
  "Our services involve:",
  "• Technician visits",
  "• Time, labor, and expertise",
  "• On-site inspection and execution",
  "Because of this, charges are applied for the service provided, regardless of the outcome or duration.",
  "3. Pre-Service Approval",
  "• Customers are informed about the work and estimated charges before the service begins.",
  "• By approving the service, the customer agrees to proceed and accepts the applicable charges.",
  "4. No Refund on Spare Parts",
  "• Any spare parts or components used during repair are non-refundable and non-returnable.",
  "• Once installed, parts cannot be exchanged unless explicitly agreed at the time of service.",
  "5. Service Issues & Resolution",
  "• If you face any issue related to the service provided, you may contact us.",
  "• We will review the concern and, if applicable, provide support or re-service at our discretion.",
  "• This does not qualify for a monetary refund.",
  "6. Cancellation Before Service",
  "• Customers may cancel a booking before the technician visit without any charges.",
  "• Once the technician has been dispatched or the service has started, charges may apply and refunds will not be issued.",
  "7. Contact Us",
  "Urban AC (UAC)",
  "📞 Phone: +91 6354658540",
  "📍 Address: Waghodia Road, Vadodara, Gujarat – 390025",
  "🕒 Working Hours: 7:00 AM to 10:00 PM",
  "<!-- REFUND POLICY CONTENT END -->"
];

export const metadata = {
  title: `Refund Policy | ${business.name}`,
  description: `Read the refund policy for ${business.name}.`
};

export default function Page() {
  return <LegalPage eyebrow="Legal" title="Refund Policy" subtitle="Important refund and cancellation information for Urban AC services." lines={lines} />;
}
