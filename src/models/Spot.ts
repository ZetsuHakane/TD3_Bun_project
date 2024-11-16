// src/models/Spot.ts

import { generateRandomNumberId } from '../utils/generateRandomNumberId';

// Constructeur Spot utiliser pour créer de instances de Spot
// On importe la methode qui permet de generer des nombres aléatoirement

export default class Spot {
    id: number;
    parking_id: number;

    constructor(parking_id: number) {
        this.id = generateRandomNumberId();
        this.parking_id = parking_id;
    }
}
