const express=require('express');

const {findusercontroller}=require('../controllers/findusercontroller')

const router=express.Router();

router.route('/user').get(findusercontroller);

module.exports=router;
