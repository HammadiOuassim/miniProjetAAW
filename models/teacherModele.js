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
    email:{
        type:stringify,
        required:[true,"please add your email"]
    },
    notes:[
        {
            studentID:{
                type:String,
                required:true
            },
            note:{
                type:Number,
                required:false
            },


        }
    ],
//     reclamation:[
//         {
//             studentID:{type:mongoose.Schema.Types.ObjectId,ref :'students'},
//             description:{type:mongoose.Schema.Types.ObjectId,ref :'description'},


// // ref de student and desc

//         }
//     ],

})

const teacher = mongoose.model("teacher",teacherSchema)
module.exports = teacher