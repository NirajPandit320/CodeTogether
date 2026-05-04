const express = require('express');
const cors = require('cors');
require ("dotenv").config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get ('/', (req, res) => {
    res.send('Backend Running');
});

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});