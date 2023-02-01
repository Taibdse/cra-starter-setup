const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
  '/api',
  createProxyMiddleware({
    target: process.env.API_SERVICE_URL || 'http://159.223.61.190:9000',
    changeOrigin: true,
    ws: true,
  })
);

const buildFolderPath = path.join(__dirname, '../build');

app.use(express.static(buildFolderPath));

app.get('/*', function (req, res) {
  res.sendFile(path.join(buildFolderPath, 'index.html'));
});

const port = process.env.FRONTEND_PORT || 1234;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
