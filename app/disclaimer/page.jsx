import { LegalPage } from "../../components/LegalPage";
import { business } from "../../data/site-data";

const lines = [
  "Disclaimer – Urban AC (UAC)",
  "Effective Date: 03-05-2026",
  "The information provided on this website is for general informational purposes only. By using our website or services, you agree to the terms outlined in this Disclaimer.",
  "1. General Information",
  "Urban AC (UAC) makes every effort to ensure that the information on this website is accurate and up to date. However, we do not guarantee the completeness, reliability, or accuracy of any content. Any reliance you place on such information is strictly at your own risk.",
  "2. Service Disclaimer",
  "Urban AC provides air conditioning services such as repair, installation, maintenance, and related solutions across Vadodara.",
  "• All services are performed based on the condition of the AC unit at the time of inspection.",
  "• Results may vary depending on factors such as age, usage, and prior condition of the equipment.",
  "• We do not guarantee that every issue can be fully resolved, especially in cases involving old or heavily damaged units.",
  "3. No Guarantee of Results",
  "While we aim to deliver high-quality service, Urban AC does not guarantee:",
  "• Permanent resolution of all technical issues",
  "• Specific performance improvements in all cases",
  "• Exact timelines in unforeseen or complex repair situations",
  "All services are provided on a best-effort basis.",
  "4. Pricing Disclaimer",
  "• Prices mentioned on the website or shared during inquiry are indicative and may vary depending on actual service requirements.",
  "• Final charges are determined after inspection and customer approval.",
  "• Additional costs may apply for spare parts, advanced repairs, or special requirements.",
  "5. Third-Party Tools & Links",
  "Our website may include links to third-party websites or tools for convenience.",
  "• Urban AC has no control over external websites or their content.",
  "• We are not responsible for the accuracy, policies, or practices of third-party platforms.",
  "6. Limitation of Liability",
  "Urban AC shall not be held liable for:",
  "• Any direct or indirect damages arising from the use of our services",
  "• Loss due to delays, service interruptions, or unforeseen circumstances",
  "• Issues caused by pre-existing faults or improper usage of AC systems",
  "Customers are advised to use services responsibly and maintain their equipment regularly.",
  "7. Technician & Safety Disclaimer",
  "• Our technicians follow standard safety practices during service.",
  "• Customers must ensure a safe and accessible working environment.",
  "• Urban AC is not responsible for delays or issues caused by unsafe conditions at the service location.",
  "8. Website Usage Disclaimer",
  "• Content on this website is intended for general guidance only.",
  "• We reserve the right to modify, update, or remove content at any time without prior notice.",
  "• Unauthorized use or reproduction of website content is strictly prohibited.",
  "9. No Professional Advice",
  "The content on this website should not be considered technical, engineering, or professional advice. Customers are encouraged to consult directly with our technicians for accurate assessment and service recommendations.",
  "10. Service Area Disclaimer",
  "Urban AC primarily operates in Vadodara, Gujarat and nearby areas. Availability of services may vary depending on location and operational capacity.",
  "11. Changes to Disclaimer",
  "Urban AC reserves the right to update or modify this Disclaimer at any time. Any changes will be posted on this page with an updated effective date.",
  "12. Contact Information",
  "If you have any questions regarding this Disclaimer, please contact:",
  "<!-- DISCLAIMER CONTENT END -->"
];

export const metadata = {
  title: `Disclaimer | ${business.name}`,
  description: `Read the disclaimer for ${business.name}.`
};

export default function Page() {
  return <LegalPage eyebrow="Legal" title="Disclaimer" subtitle="Important information about using our website and services." lines={lines} />;
}
