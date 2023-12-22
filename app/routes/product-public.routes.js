const { authJwt } = require("../middleware");
const controller = require("../controllers/product-public.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/products/all", controller.all);
  app.get(
    "/api/products/:id",
    controller.getOne
  );
  app.get('/api/products/filter', controller.getByFilter);
  app.post('/api/products', controller.createProduct);
  app.delete('/api/products/:id', controller.deleteProduct);
  app.put('/api/products/:id', controller.updateProduct);

  // app.get(
  //   "/api/product/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

};
