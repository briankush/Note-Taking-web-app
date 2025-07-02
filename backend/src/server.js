const express = require('express');
const notesRoutes = require('./routes/noteRoutes');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv');
const PORT =  process.env.PORT || 3000;
// use dotenv
dotenv.config();

const app = express();

connectDB();

// routes
app.get('/api/notes', (req, res) => {
    res.send('Notes page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
