const express = require('express');

const app = express();

const PORT = 3000;

const { specs, swaggerUi } = require('./swagger');

const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000,
        "bakmi rica-rica": 28000
    },
    rames: {
        "nasi rames biasa": 15000,
        "nasi rames rendang": 25000
    }
};

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Menampilkan daftar kategori menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil ditampilkan
 */

app.get('/menu', (req, res) => {

    const kategori = Object.keys(menuData);

    res.json({
        kategori_tersedia: kategori
    });

});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});