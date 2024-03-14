require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/database');
const app = express();
const userRoute = require('./routes/usersRoute');

connectDb();

app.use(express.json());
app.use(cors());
app.use('/users', userRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
