// src/database.ts

import { Database } from 'bun:sqlite';

const db = new Database('parking.sqlite');

// Création des tables
db.run(`
  CREATE TABLE IF NOT EXISTS "cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "country" TEXT NOT NULL
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS "parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" INTEGER NOT NULL DEFAULT 1,
    "hourlyRate" REAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    FOREIGN KEY("city_id") REFERENCES "cities"("id")
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS "spots" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parking_id" INTEGER NOT NULL,
    FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS "parks" (
    "id" TEXT NOT NULL UNIQUE PRIMARY KEY,
    "startedAt" TEXT NOT NULL,
    "endedAt" TEXT,
    "vehicleNumberPlate" TEXT,
    "spot_id" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    FOREIGN KEY("spot_id") REFERENCES "spots"("id")
  );
`);

export default db;
