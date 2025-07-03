const Note = require("../models/Note.js");

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
        
    } catch (error) {
        console.error("Error in getAllNotes controller: ", error);
        res.status(500).json({message: "Failed to fetch notes"});
        
    }
};


const createNote= async(req, res)=>{
    res.status(201).json({message:"note created successfully"})
};

const updateNote=(req, res)=>{
    res.status(200).json({message:"note updated successfully"})
};

const deleteNote=(req, res)=>{
    res.status(200).json({message:"note deleted successfully"})
};

module.exports = { 
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
 }; 