import express from 'express';
import notesRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
const PORT= 3000

const app = express();

connectDB();

// routes
app.get('/api/notes', (req, res) => {
    res.send('Notes page!')
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`); 
});
