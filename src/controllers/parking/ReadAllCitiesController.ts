// src/controllers/parking/ReadAllCitiesController.ts
import { Hono } from 'hono';
//import { cities } from '../../data/staticDatabase';
import  ReadAllCitiesView  from '../../views/city/ReadAllCitiesView2'
import { City } from '../../models/City';
import db from '../../database'; // Importation de la base de données SQLite
//import prisma  from '../../database';

//Modification du code pour récuper les données via la base de donnée 
// Ajout de methone asynchrone await 

const ReadAllCitiesController = (app: Hono) => {
  app.get('/cities', async (ctx) => {
    try {
      // Récupérer toutes les villes
      const citiesData = await db.query('SELECT * FROM cities;').all();

      if (!citiesData || citiesData.length === 0) {
        return ctx.notFound(); // Aucune ville trouvée
      }

      // Récupérer tous les parkings
      const parkingsData = await db.query(`
        SELECT parkings.*, cities.name AS cityName
        FROM parkings
        JOIN cities ON parkings.city_id = cities.id;
      `).all();

      // Associer les parkings aux villes
      const cities = citiesData.map((city: any) => {
        const location = city.location ? city.location.split(',') : ['0', '0']; // Valeur par défaut
        const gpsLocation = {
          latitude: parseFloat(location[0]),
          longitude: parseFloat(location[1]),
        };

        const cityParkings = parkingsData.filter((parking: any) => parking.city_id === city.id);

        return new City(
          city.name, 
          city.country, 
          gpsLocation, 
          [] // Liste vide de parkings,
        );
      });

      // Générer la vue
      const htmlContent = ReadAllCitiesView({ cities });
      return ctx.html(htmlContent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return ctx.text('Erreur interne du serveur.', 500);
    }
  });
};

export default ReadAllCitiesController;

/*
// Avant modification du fichier récuperer les données via des données statiques depuis le fichier staticDatabase.ts
const ReadAllCitiesController = (app: Hono) => {
  app.get('/cities', (ctx) => {
    const htmlContent = ReadAllCitiesView({ cities });
    return ctx.html(htmlContent);
  });
};

export default ReadAllCitiesController; */
