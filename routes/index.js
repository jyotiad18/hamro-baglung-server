const express = require('express');
const  router = express.Router();

const usertypeController = require('../controllers').usertype;
const categoryController = require('../controllers').category;
const userController = require('../controllers').user;
const postController = require('../controllers').post;
const postdetailController = require('../controllers').postdetail;
const likeController = require('../controllers').like;
const viewController = require('../controllers').view;
const commentController = require('../controllers').comment;

/* UserType Router */
router.get('/usertypes', usertypeController.findAll);
router.get('/usertypes/:usertype_id', usertypeController.findOne);
router.post('/usertypes', usertypeController.create);
router.delete('/usertypes/:usertype_id', usertypeController.delete);
router.put('/usertypes/:usertype_id', usertypeController.update);


/* Category Router */
router.get("/categories", categoryController.findAll);
router.get("/categories/:category_id", categoryController.findOne);
router.get("/categories/inUser/:user_id", categoryController.findByUser);
router.post("/categories", categoryController.create);
router.put("/categories/:category_id", categoryController.update);
router.delete("/categories/:category_id", categoryController.delete);

/* User Router */
router.get("/users/", userController.findAll);
router.get("/users/:user_id", userController.findOne);
router.post("/users/", userController.create);
router.put("/users/:user_id", userController.update);
router.delete("/users/:user_id", userController.delete);

/* Post Router */
router.get("/posts/", postController.findAll);
router.get("/posts/:post_id", postController.findOne);
router.post("/posts/", postController.create);
router.put("/posts/:post_id", postController.update);
router.delete("/posts/:post_id", postController.delete);

/* PostDetail Router */
router.get("/postdetails/", postdetailController.findAll);
router.get("/postdetails/:postdetail_id", postdetailController.findOne);
router.post("/postdetails/", postdetailController.create);
router.put("/postdetails/:postdetail_id", postdetailController.update);
router.delete("/postdetails/:postdetail_id", postdetailController.delete);

/* Like Router */
router.get("/likes/", likeController.findAll);
router.post("/likes/", likeController.create);

/* View Router */
router.get("/views/", viewController.findAll);
router.post("/views/", viewController.create);

/* Comment Router */
router.get("/comments/", commentController.findAll);
router.post("/comments/", commentController.create);

module.exports = router;