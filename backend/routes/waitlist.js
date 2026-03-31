import express from "express";
import WaitlistEntry from "../models/WaitlistEntry.js";

const router = express.Router();

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10;
};

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, age, address, consentForTesting } = req.body;

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

    if (!phone || !validatePhone(phone)) {
      return res.status(400).json({
        success: false,
        error: "Valid phone number with at least 10 digits is required"
      });
    }

    if (age === undefined || typeof age !== 'number' || age < 10 || age > 100) {
      return res.status(400).json({
        success: false,
        error: "Valid age between 10 and 100 is required"
      });
    }

    if (!address || address.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Address is required"
      });
    }

    if (consentForTesting === undefined || typeof consentForTesting !== 'boolean') {
      return res.status(400).json({
        success: false,
        error: "Consent for testing (Yes/No) is required"
      });
    }

    const waitlistEntry = new WaitlistEntry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      age: Number(age),
      address: address.trim(),
      consentForTesting
    });

    await waitlistEntry.save();

    res.status(201).json({
      success: true,
      message: "Added to waitlist successfully!"
    });

  } catch (error) {
    console.error("Waitlist form error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to add to waitlist. Please try again later."
    });
  }
});

export default router;
