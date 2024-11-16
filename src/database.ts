//import { PrismaClient } from '@prisma/client';
import { Database } from 'bun:sqlite';

// Prisma Client pour PostgreSQL
//const prisma = new PrismaClient();

// Ouvre (ou crée) la base de données parking.sqlite
const db = new Database('parking.sqlite');

// Fonction pour créer les tables seulement si elles n'existent pas déjà
export const createTables = async () => {
  // Vérification et création des tables 
  await db.run(`
    CREATE TABLE IF NOT EXISTS "cities" (
      "id" INTEGER NOT NULL,
      "name" TEXT NOT NULL UNIQUE,
      "slug" TEXT NOT NULL UNIQUE,
      "location" TEXT,
      "country" TEXT NOT NULL,
      PRIMARY KEY("id" AUTOINCREMENT)
    );
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS "parkings" (
      "id" INTEGER NOT NULL,
      "name" TEXT NOT NULL UNIQUE,
      "location" TEXT,
      "numberOfPlaces" INTEGER NOT NULL,
      "opened" INTEGER NOT NULL DEFAULT 1,
      "hourlyRate" REAL NOT NULL,
      "city_id" INTEGER NOT NULL,
      PRIMARY KEY("id" AUTOINCREMENT),
      FOREIGN KEY("city_id") REFERENCES "cities"("id")
    );
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS "spots" (
      "id" INTEGER NOT NULL,
      "parking_id" INTEGER NOT NULL,
      PRIMARY KEY("id" AUTOINCREMENT),
      FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
    );
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS "parks" (
      "id" TEXT NOT NULL UNIQUE,
      "startedAt" TEXT NOT NULL,
      "endedAt" TEXT,
      "vehicleNumberPlate" TEXT,
      "spot_id" INTEGER NOT NULL,
      "price" REAL NOT NULL DEFAULT 0,
      PRIMARY KEY("id"),
      FOREIGN KEY("spot_id") REFERENCES "spots"("id")
    );
  `);
};

// Fonction pour insérer les données (en s'assurant qu'elles ne sont insérées qu'une seule fois)
export const insertData = async () => {
  // Insertion dans la table cities si elles n'existent pas déjà
  await db.run(`
    INSERT OR IGNORE INTO cities (name, slug, location, country) VALUES
      ('Aix-en-Provence', 'aix-en-provence', '43.533329, 5.43333', 'France'),
      ('La Spezia', 'la-spezia', '44.238366, 9.6912326', 'Italie'),
      ('Aix-la-Chapelle', 'aix-la-chapelle', '50.776351, 6.083862', 'Allemagne'),
      ('San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '28.487180709838867, -16.313879013061523', 'Espagne'),
      ('Newcastle upon Tyne', 'newcastle-upon-tyne', '54.9738474, -1.6131572', 'Angleterre');
  `);

  // Insertion dans la table parkings si elles n'existent pas déjà
  await db.run(`
    INSERT OR IGNORE INTO parkings (name, location, numberOfPlaces, opened, hourlyRate, city_id) VALUES
      ('A', 'Aix-en-Provence', 100, 1, 4.5, 1),
      ('B', 'La Spezia', 50, 1, 3, 2),
      ('C', 'La Spezia', 80, 1, 2.5, 2),
      ('D', 'Aix-la-Chapelle', 40, 1, 2.8, 3),
      ('E', 'San Cristóbal de La Laguna', 70, 1, 3.1, 4),
      ('F', 'Newcastle upon Tyne', 60, 1, 2.4, 5),
      ('G', 'Newcastle upon Tyne', 90, 1, 3.2, 5);
  `);

  // Insertion dans la table spots
  await db.run(`
    INSERT OR IGNORE INTO spots (parking_id) VALUES
      (1), (2), (3), (4), (5), (6), (7);
  `);

  // Insertion dans la table parks
  await db.run(`
    INSERT OR IGNORE INTO parks (id, startedAt, endedAt, vehicleNumberPlate, spot_id, price) VALUES
      ('PARK1', '2024-11-01T08:00:00', '2024-11-01T10:00:00', 'AB123CD', 1, 9.0),
      ('PARK2', '2024-11-02T09:00:00', '2024-11-02T12:00:00', 'EF456GH', 2, 7.5);
  `);
};

// Exécution de la création des tables et de l'insertion des données
const setupDatabase = async () => {
  // Cette fonction ne va exécuter la création des tables et l'insertion
  await createTables();
  await insertData();
};

setupDatabase().catch(console.error);

export default db;
