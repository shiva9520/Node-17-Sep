const express =  require('express');
const router = express.Router();
const studentcontroller=require('../controllers/studentcontroller')

router.post('/add/user',(req, res)=>{
    studentcontroller.addStudent(req,res)
})
router.get('/user',(req, res)=>{
    studentcontroller.getStudents(req,res)
})

module.exports = router
