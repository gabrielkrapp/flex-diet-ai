import { extractUserData } from '../../../src/routers/Register/ExtractUserData';

describe('extractUserData', () => {
  it('should extract user data correctly', async () => {
    const body = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: 180,
      weight: 80,
      email: 'john.doe@example.com',
      password: 'password123',
      vegan: true,
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: true,
      gluten: false,
    };

    const result = await extractUserData(body);

    expect(result).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: 180,
      weight: 80,
      email: 'john.doe@example.com',
      password: 'password123',
      vegan: true,
      biotipo: 'Ectomorph',
      diabetes: false,
      lactose: true,
      gluten: false,
    });
  });

  it('should throw an error if required fields are missing', async () => {
    const body = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      height: 180,
      weight: 80,
      email: 'john.doe@example.com',
    };

    await expect(extractUserData(body)).rejects.toThrow('Missing required fields');
  });
});