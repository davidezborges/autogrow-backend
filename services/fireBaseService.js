const axios = require('axios');
const admin = require('firebase-admin');

// ... (Previous code for initializing Firebase Admin SDK)

// Function to send notifications via Firebase Cloud Messaging (FCM)
const sendNotification = async (deviceId, message) => {
  try {
    // Get the FCM token for the device from Firebase Firestore
    const deviceDoc = await admin.firestore().collection('devices').doc(deviceId).get();
    const fcmToken = deviceDoc.data().fcmToken;

    // Send notification
    await admin.messaging().sendToDevice(fcmToken, {
      data: {
        message: message,
      },
    });

    console.log('Notification sent successfully');
  } catch (error) {
    console.error(`Error sending notification: ${error.message}`);
  }
};

module.exports = {
  sendNotification,
};
