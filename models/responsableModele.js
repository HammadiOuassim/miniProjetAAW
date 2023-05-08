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
    reclamationGlobale:[
        {
            studentID:{
                type:stringify,
                required:true,
            },
            description:{
                type:stringify,
                required:[true,"ajouter votre reclamation. "]
            }
        }
    ],
    //student ykoun m3aref and responsable ? wela nti7 f redandante!
    student:[
        {
            studentID:{
                type:string,
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