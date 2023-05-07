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
})


const responsable = mongoose.model("responsable",responsableSchema)
module.exports = responsable