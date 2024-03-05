jest.mock('../services/ChatGptService', () => ({
  ChatGptService: jest.fn().mockImplementation(() => ({
    generateDietPlan: jest.fn().mockResolvedValue({
      choices: [
        {
          text: JSON.stringify({
            breakfast: "Omelete com frango e legumes",
            lunch: "Salada de frango e vegetais",
            dinner: "Peixe grelhado com legumes e suco de frutas"
          })
        }
      ]
    })
  }))
}));

import request from 'supertest';
import { app } from '../../src/index';
import { PrismaClient } from '@prisma/client';
import generateToken from '../utils/GenerateToken';

const prisma = new PrismaClient();

describe('/creatediet route', () => {
  let token: string;

  beforeAll(async () => {
    await prisma.diet.deleteMany({
      where: {
        user: {
          email: 'testuser@example.com',
        },
      },
    });

    await prisma.user.deleteMany({
      where: {
        email: 'testuser@example.com',
      },
    });
    
    const testUser = await prisma.user.create({
      data: {
        email: 'testuser@example.com',
        password: 'hashedpassword',
        firstName: 'Test',
        lastName: 'User',
        dateOfBirth: '1990-01-01',
        height: 180,
        weight: 75,
        biotipo: 'Ectomorfo',
        diabetes: false,
        lactose: false,
        gluten: false,
      },
    });

    token = generateToken(testUser.id)
  });

  afterAll(async () => {
    await prisma.diet.deleteMany({
      where: {
        user: {
          email: 'testuser@example.com',
        },
      },
    });

    await prisma.user.deleteMany({
      where: {
        email: 'testuser@example.com',
      },
    });

    await prisma.$disconnect();
  });

  it('should create a new diet for a user', async () => {
    const dietData = {
      dietType: "Carnívora",
      foodSelections: {
        "Frango": true,
        "Legumes": true,
        "Vegetais": true,
        "Sucos": true,
        "Frutas": true,
        "Ovos": true,
        "Carne": true,
        "Peixes": true
      }
    };

    const response = await request(app)
      .post('/creatediet')
      .set('Authorization', `Bearer ${token}`)
      .send(dietData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(expect.objectContaining({
      dietPlan: expect.objectContaining({
        breakfast: expect.any(String),
        lunch: expect.any(String),
        dinner: expect.any(String),
      })
    }));
  }, 20000);

});