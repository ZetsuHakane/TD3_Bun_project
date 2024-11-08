import { Hono } from 'hono';
import { Context } from 'hono';
import { cities, parkings } from '../../data/staticDatabase'; // Les données statiques
import ReadOneCityView from '../../views/city/ReadOneCityView';

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

export default ReadOneCityController;
