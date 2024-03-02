import { createUser } from '../../../src/routers/Register/CreateUser';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../routers/Register/HashPassword';

const prisma = new PrismaClient();

describe('createUser', () => {
  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  it('should create a new user', async () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: '180',
      weight: '80',
      email: 'john.doe@example.com',
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: true,
      gluten: false,
    };

    const hashedPassword = await hashPassword('hashedPassword123');

    const result = await createUser(userData, hashedPassword);

    expect(result).toEqual(expect.objectContaining({
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: 180,
      weight: 80,
      email: 'john.doe@example.com',
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: true,
      gluten: false,
    }));

    const savedUser = await prisma.user.findUnique({
      where: { email: 'john.doe@example.com' },
    });

    expect(savedUser).toBeTruthy();
  });

  it('should throw an error if email already exists', async () => {
    await prisma.user.create({
      data: {
        firstName: 'Existing',
        lastName: 'User',
        dateOfBirth: '1990-01-01',
        height: 180,
        weight: 80,
        email: 'john.doe@example.com',
        password: 'hashedPassword123',
        biotipo: 'Ectomorph',
        diabetes: false,
        lactose: true,
        gluten: false,
      },
    });

    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: '180',
      weight: '80',
      email: 'john.doe@example.com',
      vegan: true,
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: true,
      gluten: false,
    };

    const hashedPassword = await hashPassword('hashedPassword123');

    await expect(createUser(userData, hashedPassword)).rejects.toThrow('Email already exists');
  });
});