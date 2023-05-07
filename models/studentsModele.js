const mongoose= require('mongoose')


const studentsSchema = ({
    student_id :{
        type:Number,
        required:[true]
    },

    firstName:{
        type:String,
        required:[true,"please add a name"]
    },

    lastName:{
        type:String,
        required:[true,"please add a name"]
    },
})

const students = mongoose.model("students",studentsSchema)
module.exports = students