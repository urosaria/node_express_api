const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/", userController.apiGetAllUsers);
router.get("/dept/:dept", userController.apiGetUsersByDept);

module.exports = router;
