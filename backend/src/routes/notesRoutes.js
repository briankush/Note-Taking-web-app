const { createNote, deleteNote, getAllNotes, updateNote, getNoteById } = require('../controllers/notesControllers');
const express = require ('express')
const router = express.Router();

// routes
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;

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
