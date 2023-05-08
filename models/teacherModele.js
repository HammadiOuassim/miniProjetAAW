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
    passwordr:{
        type:String,
        required:[true,"please add a password"]
    },
    notes:[
        {
            studentID:{
                type:string,
                required:true
            },
            note:{
                type:number,
                required:false
            },


        }
    ],
    reclamation:[
        {
            studentID:{
                type:string,
                required:true
            },
            description:{
                type:number,
                required:true
            },


        }
    ],

})

const teacher = mongoose.model("teacher",teacherSchema)
module.exports = teacher