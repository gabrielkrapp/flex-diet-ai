import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../middleware/verifyToken';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/getdiets', verifyToken, async (req, res) => {
    
    if (!req.user) {
      return res.status(403).json({ error: 'User ID not found in token' });
    }
  
    const userId = req.user.id;
  
    try {
      const diets = await prisma.diet.findMany({
        where: {
          userId: userId,
        },
      });
  
      return res.status(200).json(diets);
    } catch (error) {
      console.error('Error fetching diets:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
export default router;