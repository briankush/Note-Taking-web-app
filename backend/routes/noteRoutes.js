import { createNote, deleteNote, getAllNotes, updateNote } from '../controllers/notesControllers.js';
const express = require('express')
const router = express.Router();

// routes
router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

// app.get('/api/notes', (req, res) => {
//     res.send('Hello World!')
// }); 

// app.post('/api/notes', (req, res) =>{
//     res.status(201).json({message:"post created successfully"})
// });

// app.put('/api/notes/:id', (req, res) =>{
//     res.status(200).json({message:"post updated successfully"})
// });

// app.delete('/api/notes/:id', (req, res) =>{
//     res.status(200).json({message:"post deleted successfully"})
// });
