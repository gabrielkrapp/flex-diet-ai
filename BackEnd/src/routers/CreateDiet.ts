import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../middleware/verifyToken';
import { ChatGptService } from '../services/ChatGptService';
import { generatePromptForDietPlan } from '../utils/GeneratePrompt';
import { parseDietPlanFromResponse } from '../utils/ParseDietPlanFromResponse';
import { createDietLimiter } from '../middleware/rateLimiters';

const router = express.Router();
const prisma = new PrismaClient();
const chatGptService = new ChatGptService();

declare module 'express-serve-static-core' {
  interface Request {
    user?: { id: string };
  }
}

router.post('/creatediet', verifyToken, createDietLimiter, async (req, res) => {

  if (!req.user) {
    return res.status(403).json({ error: 'User ID not found in token' });
  }
  
  const userId = req.user.id;
  const { dietType, foodSelections } = req.body;

  if (!dietType || !foodSelections) {
    return res.status(400).json({ error: 'Missing diet type or food selections' });
  }

  const chatGptPrompt = await generatePromptForDietPlan(userId, dietType, foodSelections);

  try {
    const chatGPTResponse = await chatGptService.generateDietPlan(chatGptPrompt);
    const dietData = parseDietPlanFromResponse(chatGPTResponse);
    const newDiet = await prisma.diet.create({
      data: {
        userId,
        breakfast: dietData.breakfast,
        lunch: dietData.lunch,
        dinner: dietData.dinner,
      },
    });

    return res.status(201).json({
      dietPlan: {
        breakfast: newDiet.breakfast,
        lunch: newDiet.lunch,
        dinner: newDiet.dinner,
      }
    });
    
  } catch (error) {
    console.error('Error creating diet:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;