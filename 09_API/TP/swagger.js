const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Menu Makanan API',
            version: '1.0.0',
            description: 'API sederhana untuk daftar menu makanan'
        }
    },
    apis: ['./index.js']
};

const specs = swaggerJSDoc(options);

module.exports = {
    specs,
    swaggerUi
};