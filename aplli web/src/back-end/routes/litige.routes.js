const { authJwt } = require("../middleware");
const litiges = require("../controllers/litige.controller");
const multer = require("../middleware/multer_config");

module.exports = (app) => {
  let router = require("express").Router();

  router.post("/", [authJwt.verifyToken], multer, litiges.create);

  router.get("/historique", [authJwt.verifyToken], litiges.findAll);

  router.get("/", [authJwt.verifyToken], litiges.findAllContent);

  router.get("/:id", [authJwt.verifyToken], litiges.findById);

  app.use("/api/litiges", router);
};
