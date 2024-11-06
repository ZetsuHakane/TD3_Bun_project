
/**
 * generer un nombre entier conteneant 6 chiffre.
 *
 * @returns nombre aléatoire entre 100000 et 999999.
 */
export function generateRandomNumberId(): number {
    return Math.floor(100000 + Math.random() * 900000);
}
