// tests/toSlug.test.ts

import { toSlug } from '../src/utils/toSlug';

describe('toSlug function', () => {
    it('should convert a string to a slug format', () => {
        expect(toSlug("Je suis 1 cas d'école")).toBe("je-suis-1-cas-d-ecole");
    });

    it('should handle special characters and accents', () => {
        expect(toSlug("À l'école des héros!")).toBe("a-l-ecole-des-heros");
    });

    it('should handle multiple spaces', () => {
        expect(toSlug("Hello    World")).toBe("hello-world");
    });

    it('should return an empty string for an empty input', () => {
        expect(toSlug("")).toBe("");
    });
});
