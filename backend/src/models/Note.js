const mongoose = require('mongoose');

// create a schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
},
{timestamps: true}
);

// create a model based off the schema
const Note = mongoose.model("Note", noteSchema)

module.exports=  Note ;