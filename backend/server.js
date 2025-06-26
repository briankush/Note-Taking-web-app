const express = require('express');
const PORT= 3000

const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`); 
});
