// src/views/city/ReadAllCitiesView.ts
import { City } from '../../models/City';

export function generateCitiesView(cities: City[]): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Cities</title>
      </head>
      <body>
        <h1>Our Cities</h1>
        <ul>
          ${cities.map((city) => `<li>${city.name}</li>`).join('')}
        </ul>
      </body>
    </html>
  `;
}
