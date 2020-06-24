const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.js");

router.get("/categories/", categoryController.findAll);
router.get("/categories/:category_id", categoryController.findOne);
router.get("/categories/inUser/:user_id", categoryController.findByUser);
router.post("/categories/", categoryController.create);
router.put("/categories/:category_id", categoryController.update);
router.delete("/categories/:category_id", categoryController.delete);

module.exports = router;
