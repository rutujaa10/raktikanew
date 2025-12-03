import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRouter from "./routes/contact.js";
import waitlistRouter from "./routes/waitlist.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.ATLASDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" Connected to MongoDB Atlas"))
.catch((err) => {
  console.error(" MongoDB Connection Error:", err);
  process.exit(1);
});

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running",
    endpoints: {
      contact: "POST /api/contact",
      waitlist: "POST /api/waitlist"
    }
  });
});

app.use("/api/contact", contactRouter);
app.use("/api/waitlist", waitlistRouter);

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
