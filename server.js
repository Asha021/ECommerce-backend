
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDb from "./config/DB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("LeadFlow API Running");
});

const PORT = process.env.PORT || 5000;

ConnectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });


}).catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
});
