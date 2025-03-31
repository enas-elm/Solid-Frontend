import { z } from "zod";
import { faker } from "@faker-js/faker";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url(),
});

export type User = z.infer<typeof userSchema>;

export const getUsers = (count: number): User[] => {
  try {
    const users = Array.from({ length: count }, () => {
      return userSchema.parse({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      });
    });

    return users;
  } catch (error) {
    console.error("Erreur lors de la génération des utilisateurs :", error);
    return [];
  }
};
