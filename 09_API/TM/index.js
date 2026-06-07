const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

/**
 * Fungsi membuat angka acak tetap berdasarkan nama
 */
function generateNumber(nama) {

    let total = 0;

    for (let i = 0; i < nama.length; i++) {
        total += nama.charCodeAt(i);
    }

    return (total % 100) + 1;
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               tebakan:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Hasil tebakan
 */

app.post('/', (req, res) => {

    const { nama, tebakan } = req.body;

    const angkaBenar = generateNumber(nama);

    let jawaban = '';

    if (tebakan === angkaBenar) {

        jawaban = `Benar sekali! Tebakannya adalah ${angkaBenar}.`;

    } else if (tebakan > angkaBenar) {

        jawaban = 'Tebakanmu terlalu tinggi!';

    } else {

        jawaban = 'Tebakanmu terlalu rendah!';
    }

    res.json({
        jawaban
    });

});

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tebak Angka API',
            version: '1.0.0',
            description: 'API permainan tebak angka'
        }
    },
    apis: ['./index.js']
};

const specs = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});