import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ success: false, error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback_secret");
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, error: "Access denied. Not an admin." });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(400).json({ success: false, error: "Invalid token." });
  }
};
