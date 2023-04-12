var express = require('express');
var router = express.Router();
var apiC = require('../controllers/UsersController');

router.get('/truyen/get-all',apiC.GetAll);
router.get('/truyen/getone/:id',apiC.GetOne);

router.get('/users/get-all',apiC.GetUsers);
module.exports = router;