const User = require('../models/user')

const addU = (req, res) => {
  const {username, email, password} = req.body
  const userData  = [username, email, password];

  User.getUser((err, users) => {
    if (err) throw err;
    
    const existingUser = users.find(u => u.name_user === username || u.email_user === email);
    
    if (existingUser) {
      if (existingUser.name_user === username) {
        return res.status(400).send("USERNAME_ALREADY_EXISTS");
      }
      if (existingUser.email_user === email) {
        return res.status(400).send("EMAIL_ALREADY_EXISTS");
      }
    };

    User.addUser(userData,(err) => {
      if (err) throw err;
      res.send("Utilisateur ajouté a la BDD");
    });
  });
};

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

const updateU = (req, res) => {
    const { username, email ,password } = req.body;
    const userData  = [username, email ,password];
    const userId = req.params.id;
    User.updateUser(userData, userId,(err) => {
        if (err) throw err;
        res.send("Utilisateur modifié avec succés");
      }
    );
  }

  const getU = (req, res) => {
    const userId = req.params.id;
    User.getUser(userId,(err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
  };

  const deleteU = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (err) => {
      if (err) throw err;
      res.send("Utilisateur supprimé avec succés");
    });
  };

module.exports = {
  addU,
  updateU,
  getU,
  deleteU,
  getByEmail
};
