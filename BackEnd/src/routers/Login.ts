import express from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import generateToken from "../utils/GenerateToken";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/login", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Request body is empty" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Email or password incorrect" });
    }

    const token = generateToken(user.id);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;