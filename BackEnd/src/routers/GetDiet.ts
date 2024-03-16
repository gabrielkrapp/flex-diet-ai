import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyTokenAndRateLimit } from '../middleware/verifyTokenAndRateLimit';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/getDiet/:dietId', verifyTokenAndRateLimit, async (req, res) => {
    if (!req.user) {
      return res.status(403).json({ error: 'User ID not found in token' });
    }
    
    const { dietId } = req.params;

    if (!dietId) {
      return res.status(400).json({ error: 'Diet ID is required' });
    }

    try {
      const diet = await prisma.diet.findFirst({
        where: {
          id: dietId,
          userId: req.user.id,
        },
      });

      if (!diet) {
        return res.status(404).json({ error: 'Diet not found' });
      }

      return res.status(200).json(diet);
    } catch (error) {
      console.error('Error fetching diet:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
