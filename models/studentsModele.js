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
        type:stringify,
        required:[true,"add password"]
    },
    notes:[
        {
            matiere:{
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
            matiere:{
                type:string,
                required:false,
            },
            description:{
                type:string,
                required:false
            }

        },
    ],
    reclamationGlobale:{
        type:string,
        required:false,
    }
})

const students = mongoose.model("students",studentsSchema)
module.exports = students