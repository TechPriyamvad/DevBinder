// express server setup
const connectDB = require("./config/db");
const express = require("express");
const userRouter = require("./routes/api/users");
const authRouter = require("./routes/api/auth");
const profileRouter = require("./routes/api/profile");
const postRouter = require("./routes/api/posts");

const app = express();

// Init middleware
// iske jariye hmare pass data frontend se backend ata h
app.use(express.json());

// connecting to mongodb
connectDB();
app.get("/", (req, res) => res.send("API running"));

// send request coming from particular routes to dedicated routers
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
