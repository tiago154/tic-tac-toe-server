import express from 'express';

const app = express();

// Serve webpacked content in ./dist
app.use(express.static('dist'));

export default app;
