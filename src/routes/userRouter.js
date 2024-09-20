const express = require("express");
const router = express.Router();
// Importez les controllers associés
const userController = require ('../controllers/userController');

router.post("/create",userController.addU);
router.get("/use", userController.getU);
router.put("/update/:id",userController.updateU);
router.delete("/delete/:id", userController.deleteU);

router.get("/:id", userController.getUId);
router.get("/", userController.getByEmail);

module.exports = router;