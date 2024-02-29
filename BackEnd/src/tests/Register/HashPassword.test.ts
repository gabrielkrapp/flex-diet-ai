import { hashPassword } from '../../../src/routers/Register/HashPassword';

describe('hashPassword', () => {
  it('should hash the password', async () => {
    const password = 'password123';
    const hashedPassword = await hashPassword(password);

    expect(hashedPassword).not.toBe(password);
    expect(typeof hashedPassword).toBe('string');
  });
});