import { ServicesPage } from "../../components/ServicesPage";
import { business } from "../../data/site-data";

export const metadata = {
  title: `Services | ${business.name}`,
  description:
    `Explore ${business.name} AC repair, service, installation, gas filling, AMC, PCB repair, split AC repair, and cleaning support across Vadodara.`
};

export default function Page() {
  return <ServicesPage />;
}
