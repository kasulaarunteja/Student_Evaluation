const mongoose = require("mongoose");

// date_of_evaluation, 
// instructor( this will reference the user collection), 
// batch_id ( this will reference the batches collection)

const evaluationSchema = new mongoose.Schema({
    id : {type : Number , required : true, unique : true},
    date : {type : Date},
    Batch_id : [{type : mongoose.Schema.Types.ObjectId, ref : "batch"}],
},{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model("evaluation", evaluationSchema);