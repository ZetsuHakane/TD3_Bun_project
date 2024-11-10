// src/utils/database.ts
import { Database } from 'bun:sqlite';

const db = new Database('parking.sqlite');

export default db;
