const Student=require('../models/Student')
const addStudent=async (req,res)=>{
    try {
        let student=new Student(req.body);
        await student.save()
        console.log("Added Sucessfully...");        
    } catch (error) {
        console.log(error);        
    }
}
const getStudents=async (req,res)=>{
    try {
        let students= await Student.find({})
        res.json(students)    
    } catch (error) {
        console.log(error);        
    }
}

module.exports={
    addStudent,
    getStudents
}