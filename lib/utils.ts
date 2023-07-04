import { Awaitable, User } from "next-auth";

export const validateCredentials = (
  username: string | undefined,
  password: string | undefined
): Awaitable<User | null> => {
  const match =
    username === process.env.TESTING_USERNAME && password === process.env.TESTING_PASSWORD;
  if (match) {
    return { id: "1", name: process.env.TESTING_USERNAME };
  }
  return null;
};
