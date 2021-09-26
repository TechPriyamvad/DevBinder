// express server setup
const connectDB = require('./config/db')
const express = require("express");
const app = express();

// connecting to mongodb
connectDB();
app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
