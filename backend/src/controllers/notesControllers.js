const Note = require("../models/Note.js");

// Fetch all notes
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
        
    } catch (error) {
        console.error("Error in getAllNotes controller: ", error);
        res.status(500).json({message: "Failed to fetch notes"});
        
    }
};

// Fetch one note
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({message: "Note not found"});
        res.status(200).json(note);
        
    } catch (error) {
        console.error("Error in getNoteById controller: ", error);
        res.status(500).json({message: "Failed to fetch notes"});
        
    }
};

// create a new note
const createNote = async(req, res)=>{
   try { 
        const{title, content} = req.body
        const note= new Note({title, content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    
    } catch (error) {
         console.error("Error in createNotes controller: ", error);
        res.status(500).json({message: "Failed to fetch notes"});
    
   }  
};

// Update note
const updateNote= async (req, res)=>{
   try {
        const{title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

        if(!updatedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json(updatedNote);

   } catch (error) {
        console.error("Error in updateNotes controller: ", error);
        res.status(500).json({message: "internal server error"});
    
   }
};

// Delete note
const deleteNote= async (req, res)=>{
    try {
        // const{title, content} = req.body;
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

         if(!deleteNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
         console.error("Error in deleteNotes controller: ", error);
        res.status(500).json({message: "internal server error"});
          
    }
};
// exporting fxns
module.exports = { 
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
 }; 