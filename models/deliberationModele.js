const mongoose= require('mongoose')

const deliberationSchema = mongoose.Schema({
   anneeDeliberation:{
    type:Date,
    required:true,
   } ,
   
   Deliberation:{[{
    student:[
        // est ce que tji tableau fi tableau wela ne7i tab deliberation w ndirha bl find?

        {
            matiere:{
                type:String,
                required:true
            },
            note:{
                type:Number,
                required:true,
            }
        }
    ]
},
   ],
}
})

const deliberation = mongoose.model("deliberation",deliberationSchema)
module.exports = deliberation