const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require('../controllers/expense')
router.post('/details',controller.postdetails)
router.get('/userinfo',controller.getdetails)

router.delete('/delete/:id',controller.delete);


module.exports = router;