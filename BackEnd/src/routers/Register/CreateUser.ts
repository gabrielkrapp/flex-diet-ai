import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(userData: any, hashedPassword: string) {
    const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
    });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    return await prisma.user.create({
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        dateOfBirth: userData.dateOfBirth,
        height: parseFloat(userData.height),
        weight: parseFloat(userData.weight),
        email: userData.email,
        password: hashedPassword,
        vegan: userData.vegan,
        biotipo: userData.biotipo,
        diabetes: userData.diabetes,
        lactose: userData.lactose,
        gluten: userData.gluten,
      },
    });
}
