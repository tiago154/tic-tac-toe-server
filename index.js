const express = require('express');

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Serve webpacked content in ./dist
app.use(express.static('dist'));

app.listen(port, host, () => {
  console.log(`App serving static content on port ${port}`);
});
