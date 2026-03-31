import express from "express";
import jwt from "jsonwebtoken";
import Contact from "../models/Contact.js";
import WaitlistEntry from "../models/WaitlistEntry.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

// 1. Admin Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const validEmail = process.env.ADMIN_EMAIL || "admin@raktika.com";
  const validPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (email === validEmail && password === validPassword) {
    const token = jwt.sign(
      { email, role: "admin" },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "12h" }
    );
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, error: "Invalid credentials" });
  }
});

// Helper for Pagination & Search Query
const buildSearchQuery = (searchQuery) => {
  if (!searchQuery) return {};
  return {
    $or: [
      { name: { $regex: searchQuery, $options: "i" } },
      { email: { $regex: searchQuery, $options: "i" } }
    ]
  };
};

// 2. Fetch Contacts
router.get("/contacts", verifyAdmin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const query = buildSearchQuery(search);

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching contacts" });
  }
});

// 3. Delete Contact
router.delete("/contacts/:id", verifyAdmin, async (req, res) => {
  try {
    const result = await Contact.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ success: false, error: "Not found" });
    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error deleting" });
  }
});

// 4. Fetch Waitlist
router.get("/waitlist", verifyAdmin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const query = buildSearchQuery(search);

    const entries = await WaitlistEntry.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await WaitlistEntry.countDocuments(query);

    res.json({
      success: true,
      data: entries,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching waitlist" });
  }
});

// 5. Delete Waitlist Entry
router.delete("/waitlist/:id", verifyAdmin, async (req, res) => {
  try {
    const result = await WaitlistEntry.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ success: false, error: "Not found" });
    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error deleting" });
  }
});

export default router;
