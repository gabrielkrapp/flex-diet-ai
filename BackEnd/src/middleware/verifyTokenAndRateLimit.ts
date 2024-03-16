import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

export const verifyTokenAndRateLimit = (req: Request, res: Response, next: NextFunction) => {
  rateLimiter(req, res, async () => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      if (typeof decoded === 'object' && 'id' in decoded) {
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (user && user.lastToken === token) {
          req.user = { id: decoded.id };
          next();
        } else {
          return res.status(401).json({ error: 'Token is no longer valid' });
        }
      } else {
        return res.status(401).json({ error: 'Invalid token' });
      }
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  });
};
