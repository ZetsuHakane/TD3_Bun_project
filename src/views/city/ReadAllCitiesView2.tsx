// src/views/city/ReadAllCitiesView.tsx
import { City }from '../../models/City';
import { Layout } from "../shared/Layout";

type ReadAllCitiesViewProps = {
  cities: Array<City>;
};

// Sous-composant pour générer un lien pour chaque ville
const CityLink = ({ city }: { city: City }) => (
  <li>
    <a href={`/cities/${city.slug}`}>{city.name}</a>
  </li>
);

// Sous-composant pour afficher la liste des villes
const CitiesList = ({ cities }: { cities: Array<City> }) => (
  <ul>
    {cities.map((city) => (
      <CityLink key={city.id} city={city} />
    ))}
  </ul>
);

// Composant principal ReadAllCitiesView
const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => (
  <Layout pageTitle="Our Cities" pageHeading="Cities List">
    <CitiesList cities={cities} />
  </Layout>
);

export default ReadAllCitiesView;
