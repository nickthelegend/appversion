// server.js
const express = require('express');
const app = express();

// Define a GET endpoint at the root URL '/'
app.get('/', (req, res) => {
  // Respond with the JSON containing the latest version and update URL
  res.json({
    latestVersion: '1.1.0',
    updateUrl: 'https://expo.dev/artifacts/eas/7jivTZKVdg4aWbusYDMAtL.apk',
  });
});

// Vercel provides the port via the PORT environment variable
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
