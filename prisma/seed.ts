import { passwordHashGenerator } from "../lib/utils";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const hash = await passwordHashGenerator();
  if (!hash) {
    throw new Error("Environment variable error.");
  }
  const richardbunker = await prisma.user.upsert({
    where: { username: "richardbunker" },
    update: {},
    create: {
      username: "richardbunker",
      password: hash,
    },
  });
  const amy746 = await prisma.user.upsert({
    where: { username: "amy746" },
    update: {},
    create: {
      username: "amy746",
      password: hash,
    },
  });
  const post = await prisma.post.create({
    data: {
      userId: amy746.id,
      caption: "A night in paris",
      focal_length: "24",
      shutter_speed: "1/125",
      f_stop: "f8",
      iso: "1600",
      image:
        "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      createdAt: new Date(),
    },
  });
  const tommygun405 = await prisma.user.upsert({
    where: { username: "tommygun405" },
    update: {},
    create: {
      username: "tommygun405",
      password: hash,
    },
  });
  const maryK = await prisma.user.upsert({
    where: { username: "maryK" },
    update: {},
    create: {
      username: "maryK",
      password: hash,
    },
  });
  const comment_1 = await prisma.comment.create({
    data: {
      userId: tommygun405.id,
      postId: post.id,
      createdAt: new Date(),
      text: "I really think you nailed this photo. The vibe is on point and it is well composed 🙌",
    },
  });
  const reply = await prisma.reply.create({
    data: {
      commentId: comment_1.id,
      userId: amy746.id,
      text: "Thank you!",
      createdAt: new Date(),
    },
  });
  const comment_2 = await prisma.comment.create({
    data: {
      userId: maryK.id,
      postId: post.id,
      createdAt: new Date(),
      text: "Try to keep the horizon straight. Slight angles can be perceived as novice skill level.",
    },
  });
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
