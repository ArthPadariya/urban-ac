import { LocationsPage } from "../../components/LocationsPage";
import { business } from "../../data/site-data";

export const metadata = {
  title: `Locations | ${business.name}`,
  description: `Browse AC service coverage across Vadodara and open your local area page for faster booking with ${business.name}.`
};

export default function Page() {
  return <LocationsPage />;
}
