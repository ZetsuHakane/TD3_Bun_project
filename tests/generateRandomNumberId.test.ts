// tests/generateRandomNumberId.test.ts

import { generateRandomNumberId } from '../src/utils/generateRandomNumberId';

describe('generateRandomNumberId function', () => {
    it('should generate a 6-digit number', () => {
        const id = generateRandomNumberId();
        expect(id).toBeGreaterThanOrEqual(100000);
        expect(id).toBeLessThanOrEqual(999999);
    });

    it('should generate a positive integer', () => {
        const id = generateRandomNumberId();
        expect(Number.isInteger(id)).toBe(true);
        expect(id).toBeGreaterThan(0);
    });
});
