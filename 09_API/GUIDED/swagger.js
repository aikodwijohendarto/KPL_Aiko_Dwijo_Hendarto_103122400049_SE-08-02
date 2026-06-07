import { version } from "react";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'film yang ditonton',
            version: '1.0.0',
            description: 'API sederhana dari Express untuk film-film yang pernah ditonton',
        },
    }, 
    apis: ["./app.js"],
};
const specs = swaggerJSDoc(options);

export {
    specs,
    swaggerUi,
}