import { prisma } from "../_utils/prismaSingleton";
import { Prisma } from "@prisma/client";
export type User = Prisma.UserGetPayload<{
  select: {
    id: true;
    name: true;
    email: true;
  };
}>;
export namespace UserRepository {
  export async function findMany(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  export async function findUnique(userId: number): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
