// src/utils/toSlug.ts

/**
 * Convertit une chaîne de caractères en un slug URL.
 * Supprime les accents, convertit en minuscules, et remplace les espaces par des tirets.
 *
 * @param text - La chaîne à convertir en slug.
 * @returns Un slug adapté pour les URL.
 */
export function toSlug(text: string): string {
    return text
        .toLowerCase() // Convertir en minuscule 
        .normalize("NFD") // Décomposer les accents
        .replace(/[\u0300-\u036f]/g, "") // Enlever les accents
        .replace(/[^a-z0-9\s-']/g, "") // Enlever les caractères spéciaux sauf l'apostrophe
        .trim() // Enlever les espaces en début et fin
        .replace(/\s+/g, "-") // Remplacer les espaces par des tirets
        .replace(/'+/g, "-"); // Remplacer les apostrophes par des tirets
}
