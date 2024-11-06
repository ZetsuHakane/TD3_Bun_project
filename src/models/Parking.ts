// src/models/Parking.ts

import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { GPS } from '../types/GPS';
import Spot from './Spot';

export default class Parking {
    id: number;
    name: string;
    city_id: number;
    location: GPS;
    numberOfSpots: number;
    opened: boolean;
    hourlyRate: number;
    parkIds: number[] = []; // Liste des ids de chaque Spot

    constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
        this.id = generateRandomNumberId();
        this.name = name;
        this.city_id = city_id;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened = opened;
        this.hourlyRate = hourlyRate;

        // Génération automatique des places de parking
        for (let i = 0; i < numberOfSpots; i++) {
            const spot = new Spot(this.id);
            this.parkIds.push(spot.id);
        }
    }
}
