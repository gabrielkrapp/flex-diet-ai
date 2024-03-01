import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserDetails(userId: string) {
    const userDetails = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  
    return userDetails;
}
  