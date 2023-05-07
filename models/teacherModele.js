const mongoose= require('mongoose')

const teacherSchema = mongoose.Schema({
    teacher_id :{
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

const teacher = mongoose.model("teacher",teacherSchema)
module.exports = teacher