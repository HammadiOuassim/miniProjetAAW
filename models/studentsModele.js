const mongoose= require('mongoose')


const studentsSchema = mongoose.Schema({
    student_id :{
        type:Number,
        required:[true]
    },

    firstName:{
        type:String,
        required:[true,"please add a first name"]
    },

    lastName:{
        type:String,
        required:[true,"please add a Last name"]
    },
    password:{
        type:String,
        required:[true,"add password"],
    },
    notes:[
        {
            matiere:{
                type:String,
                required:false
            },
            note:{
                type:Number,
                required:false
            },


        }
    ],
    reclamation:[
        {
            matiere:{
                type:String,
                required:false,
            },
            description:{
                type:String,
                required:false
            }

        },
    ],
    reclamationGlobale:{
        type:String,
        required:false,
    }
})

const students = mongoose.model("students",studentsSchema)
module.exports = students