import request from 'supertest';
import { app } from '../../src/index';
import { PrismaClient } from '@prisma/client';
import generateToken from '../utils/GenerateToken';

const prisma = new PrismaClient();

describe('/getdiets route', () => {
  let token: string;
  let testUserId: string;

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

    testUserId = testUser.id;
    token = generateToken(testUser.id);

    await prisma.diet.createMany({
      data: [
        {
          userId: testUserId,
          breakfast: 'Omelete',
          lunch: 'Salada de frango',
          dinner: 'Peixe grelhado',
        },
        {
          userId: testUserId,
          breakfast: 'Iogurte com frutas',
          lunch: 'Quinoa com vegetais',
          dinner: 'Sopa de legumes',
        },
      ],
    });
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

  it('should retrieve diets for the authenticated user', async () => {
    const response = await request(app)
      .get('/getdiets')
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty('breakfast');
    expect(response.body[0]).toHaveProperty('lunch');
    expect(response.body[0]).toHaveProperty('dinner');
  });

  it('should return an error for an unauthenticated user', async () => {
    const response = await request(app)
      .get('/getdiets')
      .set('Authorization', '');

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty('error', 'Token not provided');
  });
});
