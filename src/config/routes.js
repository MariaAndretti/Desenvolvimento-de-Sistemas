const product_controller = require('../controllers/product_controller');
const user_controller = require('../controllers/user_controller');

function routes(app) {
  // routes of product
  app.get('/products/', (req, res) => {
    product_controller.index(req, res);
  });

  app.get('/product/:id', (req, res) => {
    product_controller.show(req, res);
  });

  app.post('/product/', (req, res) => {
    product_controller.create(req, res);
  });

  app.put('/product/:id', (req, res) => {
    product_controller.update(req, res);
  });

  app.delete('/product/:id', (req, res) => {
    product_controller.delete(req, res);
  });

  // routes of user
  app.get('/users/', (req, res) => {
    user_controller.index(req, res);
  });

  app.get('/user/:id', (req, res) => {
    user_controller.show(req, res);
  });

  app.post('/user/', (req, res) => {
    user_controller.create(req, res);
  });

  app.put('/user/:id', (req, res) => {
    user_controller.update(req, res);
  });

  app.delete('/user/:id', (req, res) => {
    user_controller.delete(req, res);
  });
}

module.exports = routes;