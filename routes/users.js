const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/UsersController');
const authMidd = require('../app/middleware/auth');
/* GET users listing. */
router.get('/lognin',authMidd.YeuCauDangNhap,usersController.getUser);
router.get('/lognout',usersController.Logout);
module.exports = router;