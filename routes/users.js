const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.js");

router.get("/users/", userController.findAll);
router.get("/users/:user_id", userController.findOne);
router.post("/users/", userController.create);
router.put("/users/:user_id", userController.update);
router.delete("/users/:user_id", userController.delete);

module.exports = router;
