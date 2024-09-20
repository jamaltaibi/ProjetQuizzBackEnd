const User = require('../models/user')

//CREATE
const addU = (req, res) => {
  const {username, email, password} = req.body
  const userData  = [username, email, password];

    User.addUser(userData,(err) => {
      if (err) throw err;
      res.send("Utilisateur ajouté a la BDD");
    });
  };

//READ
  const getU = (req, res) => {
    User.getUser((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  };

//UPDATE
  const updateU = (req, res) => {
    const { email ,password } = req.body;
    const userData  = [email ,password];
    const userId = req.params.id;
    User.updateUser(userData, userId,(err) => {
        if (err) throw err;
        res.send("Utilisateur modifié avec succés");
      }
    );
  };

//DELETE
  const deleteU = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (err) => {
      if (err) throw err;
      res.send("Utilisateur supprimé avec succés");
    });
  };


 // Read conditions id
const getUId = (req, res) => {
  const userId = req.params.id;
  User.getUserById(userId,(err, result) => {
    if (err) throw err;
      res.json(result[0]);
    });
  };

//Read conditions email
const getByEmail = (req, res) => {
  const email = req.query.email;
  if (!email) {
      return res.status(400).json({ error: "L'email est requis" });
  }
  User.getUserByEmail(email, (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
      } else if (result.length === 0) {
          res.status(404).json({ error: "Utilisateur non trouvé" });
      } else {
          res.json(result[0]); // On envoie seulement le premier résultat
      }
  });
};

module.exports = {
  addU,
  getU,
  updateU,
  deleteU,
  getUId,
  getByEmail
};
