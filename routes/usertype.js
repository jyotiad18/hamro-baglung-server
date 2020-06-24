const express = require('express');
const router = express.Router();
const userTypeController = require('../controllers/usertype.js');

router.get('/usertypes/', userTypeController.findAll);
router.get('/usertypes/:usertype_id', userTypeController.findOne);
router.post('/usertypes/', userTypeController.create);
router.put('/usertypes/:usertype_id', userTypeController.update);
router.delete('/usertypes/:usertype_id', userTypeController.delete);

module.exports = router;