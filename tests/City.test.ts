// tests/City.test.ts

import { City } from '../src/models/City';
import { GPS } from '../src/types/GPS';

describe('City class', () => {
    it('should create a City instance with the correct properties', () => {
        const name = 'Paris';
        const country = 'France';
        const location: GPS = { latitude: 48.8566, longitude: 2.3522 };
        const parkingsIds = [100001, 100002];
        
        const city = new City(name, country, location, parkingsIds);

        // Vérifications
        expect(city.id).toBeGreaterThanOrEqual(100000); // Vérifie que l'ID a 6 chiffres
        expect(city.name).toBe(name);
        expect(city.slug).toBe('paris'); // Assurez-vous que le slug est bien formaté
        expect(city.country).toBe(country);
        expect(city.location).toEqual(location);
        expect(city.parkingsIds).toEqual(parkingsIds);
    });
});
