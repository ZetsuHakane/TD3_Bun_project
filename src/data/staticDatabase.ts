// src/data/staticDatabase.ts

import { City } from '../models/City';
import Parking  from '../models/Parking';
import { GPS } from '../types/GPS';

// Création des instances de City
const aixEnProvence = new City("Aix-en-Provence", "France", { latitude: 43.533329, longitude: 5.43333 });
const laSpezia = new City("La Spezia", "Italie", { latitude: 44.238366, longitude: 9.6912326 });
const aixLaChapelle = new City("Aix-la-Chapelle", "Allemagne", { latitude: 50.776351, longitude: 6.083862 });
const sanCristobal = new City("San Cristóbal de La Laguna", "Espagne", { latitude: 28.487180709838867, longitude: -16.313879013061523 });
const newcastle = new City("Newcastle upon Tyne", "Angleterre", { latitude: 54.9738474, longitude: -1.6131572 });

// Création du tableau typé cities
const cities: City[] = [aixEnProvence, laSpezia, aixLaChapelle, sanCristobal, newcastle];

// Création des instances de Parking
const parkingA = new Parking("A", aixEnProvence.id, aixEnProvence.location, 100, true, 4.5);
const parkingB = new Parking("B", laSpezia.id, laSpezia.location, 50, true, 3);
const parkingC = new Parking("C", laSpezia.id, laSpezia.location, 80, true, 2.5);
const parkingD = new Parking("D", aixLaChapelle.id, aixLaChapelle.location, 40, true, 2.8);
const parkingE = new Parking("E", sanCristobal.id, sanCristobal.location, 70, true, 3.1);
const parkingF = new Parking("F", newcastle.id, newcastle.location, 60, true, 2.4);
const parkingG = new Parking("G", newcastle.id, newcastle.location, 90, true, 3.2);

// Création du tableau typé parkings
const parkings: Parking[] = [parkingA, parkingB, parkingC, parkingD, parkingE, parkingF, parkingG];

// Export des tableaux pour qu'ils puissent être utilisés dans d'autres fichiers
export { cities, parkings };
