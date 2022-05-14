import app from './app.js';
import routes from './controllers/index.js';

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT) || 3000;

routes.forEach((route) => {
  app[route.method](route.path, route.callback);
});

app.listen(port, host, () => {
  console.log(`App serving static content on port ${port}`);
});
