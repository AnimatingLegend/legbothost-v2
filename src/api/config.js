const fs = require('node:fs');

// ==========================================================
// Load config.json
// Should keep API logic in JS instead of making more .json files
// @type {object}
// ==========================================================
export const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));