import { passwordHashGenerator } from "../lib/utils";
import { PrismaClient } from "@prisma/client";
import { createComments, createPosts, createTags, createTagsOnPosts, createUsers } from "./data";
const prisma = new PrismaClient();

async function main() {
  const hash = await passwordHashGenerator();
  if (!hash) {
    throw new Error("Environment variable error.");
  }

  await createUsers(prisma, hash);
  await createPosts(prisma);
  await createComments(prisma);
  await createTags(prisma);
  await createTagsOnPosts(prisma);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
