import { FaqPage } from "../../components/FaqPage";
import { business } from "../../data/site-data";

export const metadata = {
  title: `FAQs | ${business.name}`,
  description: `Frequently asked questions about AC repair, cleaning, installation, and service support from ${business.name} in Vadodara.`
};

export default function Page() {
  return <FaqPage />;
}
