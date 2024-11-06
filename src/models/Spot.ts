// src/models/Spot.ts

import { generateRandomNumberId } from '../utils/generateRandomNumberId';

export default class Spot {
    id: number;
    parking_id: number;

    constructor(parking_id: number) {
        this.id = generateRandomNumberId();
        this.parking_id = parking_id;
    }
}
