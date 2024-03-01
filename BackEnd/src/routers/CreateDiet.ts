import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../middleware/verifyToken';
import { ChatGptService } from '../services/ChatGptService';
import { generatePromptForDietPlan } from '../utils/GeneratePrompt';

const router = express.Router();
const prisma = new PrismaClient();
const chatGptService = new ChatGptService();

router.post('/creatediet', verifyToken, async (req, res) => {

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
    const dietData = JSON.parse(chatGPTResponse.choices[0].text.trim());
    const newDiet = await prisma.diet.create({
      data: {
        userId,
        breakfast: dietData.cafe_da_manha.prato,
        lunch: dietData.almoco.prato,
        dinner: dietData.janta.prato,
      },
    });

    return res.status(201).json({ dietPlan: newDiet });
  } catch (error) {
    console.error('Error creating diet:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;