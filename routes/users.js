var express = require('express');
var router = express.Router();

const userServices  = require('../config/users-services');

/* GET users listing. */
router.post('/', userServices.create);

router.get('/', userServices.findAll);

router.get('/:Id', userServices.findOne);

router.post('/edit/:Id', userServices.update);

router.post('/delete/:Id', userServices.delete);

module.exports = router;
