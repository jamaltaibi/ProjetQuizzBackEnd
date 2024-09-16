const express = require("express");
const router = express.Router();
// Importez les controllers associés
const userController = require ('../controllers/userController');

router.post("/create",userController.addU);
router.put("/update/:id",userController.updateU);
router.get("/", userController.getU);
router.delete("/delete/:id", userController.deleteU);

module.exports = router;