import express from "express";
import cors from "cors";
import "dotenv/config";

// Create express app and HTTP server
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "4mb" }));

// routes setup
app.use("/api/status", (req, res) => res.send("Server is live..."));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server running on PORT: " + PORT));
