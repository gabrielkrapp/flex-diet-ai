import request from 'supertest';
import { app } from '../../src/index';
import { PrismaClient } from '@prisma/client';

/// <reference types="jest" />

const prisma = new PrismaClient();

const clearUserTable = async () => {
  await prisma.user.deleteMany({});
};

describe('/register route', () => {
  beforeEach(async () => {
    await clearUserTable();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should register a new user and return a token', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
      dateOfBirth: '2000-01-01',
      height: 170,
      weight: 70,
      vegan: false,
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: false,
      gluten: false,
    };

    const response = await request(app)
      .post('/register')
      .send(userData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not register a user with an existing email', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
      dateOfBirth: '2000-01-01',
      height: 170,
      weight: 70,
      vegan: false,
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: false,
      gluten: false,
    };

    await request(app).post('/register').send(userData);

    const response = await request(app)
      .post('/register')
      .send(userData);

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Email already exists');
  });

  it('should require all mandatory fields', async () => {
    const userData = {
      email: 'incomplete@example.com',
    };

    const response = await request(app)
      .post('/register')
      .send(userData);

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Missing required fields');
  });
});
