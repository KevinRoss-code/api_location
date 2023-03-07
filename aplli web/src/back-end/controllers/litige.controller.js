const db = require("../models");
const userId = require("../middleware/authJwt");
const Litige = db.litiges;
const Op = db.Sequelize.Op;
const fs = require("fs");

exports.create = (req, res) => {
  let userId = req.userId;
  const litige = {
    identifiantUser: req.body.identifiantUser,
    content: req.body.contenu,
    userId: userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
    //reprendre exercice pour récuperer image
  };

  Litige.create(litige)
    .then((litige) => {
      console.log(
        `>> Demande de litige crée ${JSON.stringify(litige, null, 4)}`
      );

      res.send(litige);
    })
    .catch((err) => {
      console.log(
        ">>Erreur lors de la création de la demande de litige:" + err
      );
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const identifiantUser = req.body.identifiantUser;
  let condition = identifiantUser
    ? {
        title: {
          [Op.like]: `%${identifiantUser}%`,
        },
      }
    : null;
  Litige.findAll({
    where: condition,
    include: [
      {
        all: true,
        nested: true,
      },
    ],
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAllContent = (req, res) => {
  Litige.findAll({
    where: {
      content: true,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;

  Litige.findByPk(id)
    .then((litige) => {
      res.send(litige);
    })
    .catch((err) => {
      console.log("Erreur lors de la recherche de la demande" + err);
    });
};
