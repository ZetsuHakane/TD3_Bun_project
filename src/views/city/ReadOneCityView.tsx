import { City } from "../../models/City";
import Parking from "../../models/Parking";
import { Layout } from "../shared/Layout";

type ReadOneCityViewProps = {
  city: City;
  parkings: Array<Parking>;
};

const ParkingInfo = ({ parking }: { parking: Parking }) => (
  <li>
    <h2>{parking.name}</h2>
    <p>Capacity: {parking.numberOfSpots}</p>
    <p>Hourly Rate: {parking.hourlyRate}€</p>
  </li>
);

const ReadOneCityView = ({ city, parkings }: ReadOneCityViewProps) => (
  <Layout pageTitle={`City of ${city.name}`} pageHeading={`Welcome to ${city.name}`}>
    <p>Country: {city.country}</p>
    <p>Location: Latitude {city.location.latitude}, Longitude {city.location.longitude}</p>
    <h2>Available Parkings</h2>
    <ul>
      {parkings.length > 0 ? (
        parkings.map((parking) => <ParkingInfo key={parking.id} parking={parking} />)
      ) : (
        <p>No parking available for this city.</p>
      )}
    </ul>
  </Layout>
);

export default ReadOneCityView;
