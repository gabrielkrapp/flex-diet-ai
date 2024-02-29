import express from "express";
import { hashPassword } from "./HashPassword";
import { createUser } from "./CreateUser";
import { extractUserData } from "./ExtractUserData";
import generateToken from "../../utils/GenerateToken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const userData = await extractUserData(req.body);
    const hashedPassword = await hashPassword(userData.password);
    const newUser = await createUser(userData, hashedPassword);
    const token = generateToken(newUser.id);
    return res.status(200).json({ token });
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