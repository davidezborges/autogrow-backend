const express = require('express');
const bodyParser = require('body-parser');
const swaggerMiddleware = require('./middleware/swaggerMiddleware');
const notificationController = require('./controllers/notificationController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize Swagger
swaggerMiddleware.setupSwagger(app);

// Route for sending device messages
app.post('/device-message', notificationController.sendDeviceMessage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
