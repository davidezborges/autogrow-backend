const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Firebase API with Notification',
    version: '1.0.0',
    description: 'API to send notifications via webhook or Firebase Cloud Messaging',
  },
};

// Swagger options
const options = {
  swaggerDefinition,
  apis: ['./controllers/notificationController.js'], // Point to the file that contains your routes
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Function to set up Swagger middleware
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

module.exports = {
  setupSwagger,
};
