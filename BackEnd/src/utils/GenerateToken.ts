import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(userId: string): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in your environment variables");
  }

  return jwt.sign({ userId }, secret, {
    expiresIn: "1h",
  });
}

export default generateToken;