import { pangkat } from './lib/pangkat.js';
import { bulat } from './lib/bulat.js';
import { kuadrat } from './lib/kuadrat.js';

const narasi = `Seorang insinyur menetapkan luas panel ${bulat(kuadrat(12))} meter persegi, lalu menggunakan kapasitas penyimpanan sebesar ${pangkat(2, 10)} watt-jam.`;

console.log(narasi);