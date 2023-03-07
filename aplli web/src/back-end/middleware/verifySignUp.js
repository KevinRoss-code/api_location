const db = require("../models");
const User = db.users;
const emailValidator = require("email-validator");
const passwordValidator = require("password-validator");

valid = (req, res, next) => {
  const passwordSchema = new passwordValidator();
  passwordSchema
    .is()
    .min(8)
    .is()
    .max(30)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(2)
    .has()
    .not()
    .spaces()
    .has()
    .symbols();

  if (
    !emailValidator.validate(req.body.email) ||
    !passwordSchema.validate(req.body.password)
  ) {
    return res.status(400).send({
      error:
        "Adresse mail non conforme. Le mot de passe doit contenir un minimun de 8 lettres, 2 chiffres et des majuscules",
    });
  } else if (
    emailValidator.validate(req.body.email) ||
    passwordSchema.validate(req.body.password)
  )
    next();
};

checkUser = (req, res, next) => {
  const regex = /^[a-zA-Z0-9_]{3,30}$/;
  const numberContrat = req.body.numberContrat.match(regex);
  if (regex.test(numberContrat)) {
    next();
  } else {
    return res.status(400).send({
      error: "Votre contrat doit contenir entre 3 et 30 caractères",
    });
  }
};

userExisteDeja = (req, res, next) => {
  User.findOne({
    where: {
      numberContrat: req.body.numberContrat,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Utilisateur déjà connu",
      });
      return;
    }

    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Utilisateur déjà connu",
        });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  valid: valid,
  checkUser: checkUser,
  userExisteDeja: userExisteDeja,
};

module.exports = verifySignUp;
