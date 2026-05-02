import { ContactPage } from "../../components/ContactPage";
import { business } from "../../data/site-data";

export const metadata = {
  title: `Contact Us | ${business.name}`,
  description: `Contact ${business.name} for AC repair, service, installation, and cleaning support across Vadodara.`
};

export default function Page() {
  return <ContactPage />;
}
