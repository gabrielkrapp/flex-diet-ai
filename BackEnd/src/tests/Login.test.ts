import request from 'supertest';
import { app } from '../../src/index';

describe('/login route', () => {
  beforeAll(async () => {
    await request(app).post('/register').send({
      email: 'test@example.com',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: 180,
      weight: 70,
      vegan: false,
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: false,
      gluten: false,
    });
  });

  it('should login a user with valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not login a user with invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword',
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Email or password incorrect');
  });

  it('should require email and password fields', async () => {
    const response = await request(app)
      .post('/login')
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Email and password are required');
  });
});
