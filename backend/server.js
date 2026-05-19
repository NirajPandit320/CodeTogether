const express = require('express');
const cors = require('cors');
require ("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

//middleware
//middleware
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

//routes
app.get ('/', (req, res) => {
    res.send('Backend Running');
});

app.use('/api/auth', authRoutes);

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});