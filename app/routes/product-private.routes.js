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

  app.get("/api/products/private/all",[authJwt.verifyToken,], controller.all);
  app.get(
    "/api/products/private/:id",[authJwt.verifyToken,],
    controller.getOne
  );
  app.get('/api/products/private/filter',[authJwt.verifyToken,], controller.getByFilter);
  app.post('/api/products/private',[authJwt.verifyToken,], controller.createProduct);
  app.delete('/api/products/private/:id',[authJwt.verifyToken,], controller.deleteProduct);
  app.put('/api/products/private/:id',[authJwt.verifyToken,], controller.updateProduct);

  // app.get(
  //   "/api/product/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

};
