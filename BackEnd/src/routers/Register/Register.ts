import express from "express";
import { hashPassword } from "./HashPassword";
import { createUser } from "./CreateUser";
import { extractUserData } from "./ExtractUserData";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const userData = await extractUserData(req.body);
    const hashedPassword = await hashPassword(userData.password);
    const newUser = await createUser(userData, hashedPassword);
    return res.status(200).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);

    if (error instanceof Error) {
      if (error.message === "Email already exists") {
        return res.status(400).json({ error: "Email already exists" });
      } else if (error.message === "Missing required fields") {
        return res.status(400).json({ error: "Missing required fields" });
      }
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;