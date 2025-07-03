const express = require('express');
const notesRoutes = require('./routes/notesRoutes.js');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv');
const PORT =  process.env.PORT || 3000;
// use dotenv
dotenv.config();

const app = express();

connectDB();

// routes
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
