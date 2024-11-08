// src/controllers/parking/ReadAllCitiesController.ts
import { Hono } from 'hono';
import { cities } from '../../data/staticDatabase';
//import { generateCitiesView } from '../../views/city/ReadAllCitiesView';
import  ReadAllCitiesView  from '../../views/city/ReadAllCitiesView2'

const ReadAllCitiesController = (app: Hono) => {
  app.get('/cities', (ctx) => {
    const htmlContent = ReadAllCitiesView({ cities });
    return ctx.html(htmlContent);
  });
};

export default ReadAllCitiesController;
/* On a moddifier la constante const htmlContent = generateCitiesView(cities);
en const htmlContent = ReadAllCitiesView({ cities });
*/
