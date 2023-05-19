const mongoose= require('mongoose')

const subjectSchema = mongoose.Schema({
    subject:[
        {
            // subjectID:{
            //     type:String,
            //     required:false,
            // },
            subjectName:{
                type:String,
                required:false,
            },
            subjectCode:{
                type:String,
                required:false,
            },
            subjectCoff:{
                type:Number,
                required:false,
            }
        }
    ]
})

const deliberation = mongoose.model("deliberation",deliberationSchema)
module.exports = deliberation