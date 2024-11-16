// Ce fichier est un fichier test qui permet de verifier si on arrive à récuperer les données de la base de donnée parking.sqlite.

import db from "./database";

 // Chemin de la database nommée parking

// Fonction pour récupérer les données depuis les tables
const testDatabaseQueries = async () => {
  try {
    console.log('Test de la récupération des données...');

    // Récupérer toutes les villes
    const citiesQuery = db.query('SELECT * FROM cities;');
    const cities = citiesQuery.all(); // Utilisez .all() sur le résultat de query
    console.log('Cities:', cities);

    // Récupérer tous les parkings avec leurs villes associées
    const parkingsQuery = db.query(`
      SELECT parkings.*, cities.name AS cityName
      FROM parkings
      JOIN cities ON parkings.city_id = cities.id;
    `);
    const parkings = parkingsQuery.all();
    console.log('Parkings:', parkings);

    // Récupérer tous les spots
    const spotsQuery = db.query('SELECT * FROM spots;');
    const spots = spotsQuery.all();
    console.log('Spots:', spots);

    // Récupérer toutes les informations des parcs
    const parksQuery = db.query('SELECT * FROM parks;');
    const parks = parksQuery.all();
    console.log('Parks:', parks);

    console.log('Test réussi : Les données ont été récupérées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};

// Appeler la fonction pour tester les requêtes
testDatabaseQueries();
