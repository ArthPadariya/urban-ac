import { AboutPage } from "../../components/AboutPage";
import { business } from "../../data/site-data";

export const metadata = {
  title: `About Us | ${business.name}`,
  description:
    `Learn more about ${business.name}, our AC repair, service, installation, and cleaning support across Vadodara.`
};

export default function Page() {
  return <AboutPage />;
}
