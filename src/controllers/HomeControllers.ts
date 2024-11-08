// ./src/controllers/HomeController.ts
import { Hono } from 'hono';
import { html } from 'hono/html'; // Importation du helper html de Hono

const HomeController = (app: Hono) => {
  // Définition de la route GET pour la page d'accueil
  app.get('/', (ctx) => {
    return ctx.html(html`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Welcome to EuroPark</title>
          <!-- Intégration de la typographie Roboto de Google Fonts -->
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
          <!-- Intégration de la bibliothèque CSS Milligram -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha384-NKvQ9+Nvvl/QnZEDm5p7e59ZlMXguEsco1klzGbx4Az9EBT5oVBFRhdf85aFuBe0" crossorigin="anonymous" />
          <style>
            /* Application de la typographie Roboto */
            body {
              font-family: 'Roboto', sans-serif;
              padding: 2rem;
            }
            /* Personnalisation supplémentaire si nécessaire */
          </style>
        </head>
        <body>
          <h1>Welcome to EuroPark</h1>
          <img src="/static/parking.png"/>
          <p>
            Save time and money with EuroPark! Enjoy a 100% contactless parking
            experience for a short or long duration in our car parks in Europe!
          </p>
          <ul>
            <li><a href="/cities">Our Cities</a></li>
            <li><a href="/parkings">Our Car Parks</a></li>
          </ul>
        </body>
      </html>
    `);
  });
};

export default HomeController;
