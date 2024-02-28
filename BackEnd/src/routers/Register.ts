import express from "express";
import { pool } from "../database/database";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { RegisterUserQuery } from "../database/Querys/RoutersQuerys";
import { getUserByUsername } from "../utils/GetUserBy";

const router = express.Router();

router.post("/register", async (req, res) => {
    let client

  try {

    client = await pool.connect();

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    const userExists = await getUserByUsername(username);
    if (userExists) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    await client.query("BEGIN");
    await client.query(RegisterUserQuery, [id, username, hashedPassword]);
    await client.query("COMMIT");
    client.release();

    res.status(200).json({
      message: "User registered successfully",
    });
    
  } catch (error) {
    if (client) {
        await client.query("ROLLBACK");
        client.release();
      }

    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;