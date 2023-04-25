const express=require('express');
const router=express.Router();

const ctrlUser=require('../controller/ctrlUser')
router.post('/addUser',ctrlUser.addUser);
router.get('/getOne',ctrlUser.getOne);
router.get('/getAll',ctrlUser.getAll);

router.patch('/update',ctrlUser.update);
router.delete('/delete',ctrlUser.deleteUser);

module.exports=router;