import { Hono } from 'hono';
import { Context } from 'hono';
import ReadOneCityView from '../../views/city/ReadOneCityView';
//import { cities, parkings } from '../../data/staticDatabase'; // Les données statiques
import { City } from '../../models/City';
import Parking from '../../models/Parking';
import db from '../../database';

//Modification du code pour récuper les données via la base de donnée 
// Ajout de methone asynchrone await 

const createCityFromDb = (data: any): City => {
  const location = data.location ? data.location.split(',') : ['0', '0'];
  return new City(
    data.name,
    data.country,
    { latitude: parseFloat(location[0]), longitude: parseFloat(location[1]) },
    [] // On peut ajouter les parkings ici si nécessaire
  );
};

const createParkingFromDb = (data: any): Parking => {
  const location = data.location ? data.location.split(',') : ['0', '0'];
  return new Parking(
    data.name,
    data.city_id,
    { latitude: parseFloat(location[0]), longitude: parseFloat(location[1]) },
    data.numberOfPlaces,
    data.opened === 1,
    data.hourlyRate
  );
};

const ReadOneCityController = (app: Hono) => {
  app.get('/cities/:slug', async (ctx: Context) => {
    const { slug } = ctx.req.param();
    try {
      // Récupérer la ville en fonction du slug
      const cityData = await db.query(`
        SELECT * 
        FROM cities 
        WHERE slug = ?;
      `).get(slug);

      if (!cityData) {
        return ctx.notFound(); // Ville introuvable
      }

      const city = createCityFromDb(cityData);

      // Récupérer les parkings associés
      const parkingsQuery = await db.query(`
        SELECT * 
        FROM parkings 
        WHERE city_id = ?;
      `);

      const parkingsData = parkingsQuery.all(city.id); // Récupère tous les parkings associés

      const cityParkings = parkingsData.map((parking: any) => createParkingFromDb(parking));
      
      // Passer les données à la vue
      const htmlContent = ReadOneCityView({ city, parkings: cityParkings });
      return ctx.html(htmlContent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return ctx.text('Erreur interne du serveur.', 500);
    }
  });
};

export default ReadOneCityController;

/*
// Avant modification du fichier utilisation des données statiques
const ReadOneCityController = (app: Hono) => {
  app.get('/cities/:slug', (ctx: Context) => {
    const { slug } = ctx.req.param();
    const city = cities.find(city => city.slug === slug);

    // Gestion de l'erreur 404 si la ville n'est pas trouvée
    if (!city) {
      return ctx.notFound();
    }

    // Récupération des parkings associés
    const cityParkings = parkings.filter(parking => city.parkingsIds.includes(parking.id));

    // Génération de la vue avec les données de la ville et les parkings associés
    return ctx.html(ReadOneCityView({ city, parkings: cityParkings }));
  });
};

export default ReadOneCityController;*/


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              