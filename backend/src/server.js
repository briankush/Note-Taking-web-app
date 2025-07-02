const express = require('express');
const notesRoutes = require('./routes/noteRoutes');
const { connectDB } = require('./config/db');
const PORT = 3000;

const app = express();

connectDB();

// routes
app.get('/api/notes', (req, res) => {
    res.send('Notes page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
