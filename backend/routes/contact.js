import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Name is required"
      });
    }

    if (!email || !validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Valid email is required"
      });
    }

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Message is required"
      });
    }

    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully!"
    });

  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to save message. Please try again later."
    });
  }
});

export default router;
