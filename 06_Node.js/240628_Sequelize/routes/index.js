const controller=require('../controller/Cmain.js')
const express = require('express');
const router=express.Router();

router.get('/',controller.index);
router.get('/team',controller.team);
router.get('/profile',controller.profile);

module.exports = router;