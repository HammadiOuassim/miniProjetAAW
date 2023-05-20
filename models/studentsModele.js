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
    email:{
        type:String,
        required:[true,"please add your email"]
    },
    notes:[
        {


            teacher: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'teacher',
                required: false
              },
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

studentsSchema.methods.reclamationSubject = async function(matiere, description) {
    try {
      this.reclamation.push({ matiere, description });
      await this.save();
    } catch (error) {
      console.error('Error posting reclamation:', error);
      throw error;
    }
  };




const students = mongoose.model("students",studentsSchema)
module.exports = students