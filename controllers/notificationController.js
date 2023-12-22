const { sendNotification } = require('../services/firebaseService');

// Function to send device messages
const sendDeviceMessage = async (req, res) => {
  const { deviceId, message } = req.body;

  // Send notification
  await sendNotification(deviceId, message);

  res.status(200).send('Notification sent successfully');
};

module.exports = {
  sendDeviceMessage,
};
