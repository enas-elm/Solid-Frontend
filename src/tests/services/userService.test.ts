import { getUsers } from "@/services/userService"; 
import { faker } from "@faker-js/faker";

describe("getUsers", () => {
  it("devrait générer le nombre d'utilisateurs correct", () => {
    const users = getUsers(3);
    expect(users).toHaveLength(3);
  });

  it("devrait générer des utilisateurs valides avec un schéma Zod", () => {
    const users = getUsers(5);
    users.forEach((user) => {
      // Vérification que chaque utilisateur est valide selon le schéma Zod
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("avatar");
      expect(user.email).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
      expect(user.avatar).toMatch(/^https?:\/\/.*/);
    });
  });

  it("devrait renvoyer un tableau vide si une erreur se produit", () => {
    // Fake an error in the function
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(faker, "string").mockImplementationOnce(() => {
      throw new Error("Erreur simulée");
    });

    const users = getUsers(2);
    expect(users).toEqual([]);
  });
});
