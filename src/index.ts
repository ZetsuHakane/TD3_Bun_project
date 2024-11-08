import { Hono } from 'hono';
import HomeController from './controllers/HomeControllers';
import { serveStatic } from 'hono/bun'; // Importation du middleware serveStatic
import { cities, parkings } from './data/staticDatabase'; // Importer les données
import ReadAllCitiesController from './controllers/parking/ReadAllCitiesController'; // Importer le contrôleur
import ReadOneCityController from './controllers/parking/ReadOneCityController';
import { trimTrailingSlash } from 'hono/trailing-slash';

// Créer une nouvelle instance de l'application Hono
const app = new Hono();

// Associer le contrôleur HomeController à la route GET "/"
HomeController(app);
ReadAllCitiesController(app); // Associer le contrôleur à la route /cities
ReadOneCityController(app);
// Configurer pour servir les fichiers statiques à partir du dossier "static"
app.use('/static/*', serveStatic({ root: './static' }));
app.use('*', trimTrailingSlash());


// Gestion centralisée des erreurs
app.notFound((ctx) => ctx.html("<h1>404 - Not Found</h1>"));
app.onError((err, ctx) => {
  console.error(err);
  return ctx.html("<h1>500 - Internal Server Error</h1>");
});

// Démarrer le serveur sur le port 3000
export default {
  port: 3000,
  fetch: app.fetch,
};

console.log('Server is running on http://localhost:3000');

