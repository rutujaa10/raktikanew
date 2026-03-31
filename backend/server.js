import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRouter from "./routes/contact.js";
import waitlistRouter from "./routes/waitlist.js";
import adminRouter from "./routes/admin.js";
import dns from "dns";

// Force Node.js to use Google public DNS to resolve SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let isConnected;

const connectDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(process.env.ATLASDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log(" Connected to MongoDB Atlas");
  } catch (err) {
    console.error(" MongoDB Connection Error:", err);
  }
};

connectDB();

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
app.use("/api/admin", adminRouter);

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
  });
}

export default app;
