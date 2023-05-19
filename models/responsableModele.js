const mongoose= require('mongoose')

const responsableSchema = mongoose.Schema({
    responsable_id :{
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
    password:{
        type:String,
        required:[true,"please add a password"]
    },
    email:{
        type:stringify,
        required:[true,"please add your email"]
    },




    
    reclamationGlobale:[
        {
            studentID:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:[true,"ajouter votre reclamation. "]
            }
        }
    ],
    //student ykoun m3aref and responsable ? wela nti7 f redandante!
    student:[
        {
            studentID:{
                type:String,
                required:true,
            },
            studentFirstName:{
                type:String,
                required:[true,"please add a name"]
            },
        
            studentLastName:{
                type:String,
                required:[true,"please add a name"]
            },

        }
    ]

})


const responsable = mongoose.model("responsable",responsableSchema)
module.exports = responsable