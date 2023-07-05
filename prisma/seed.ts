import { passwordHashGenerator } from "../lib/utils";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createUsers(prisma: PrismaClient, hash: string) {
  return prisma.user.createMany({
    data: [
      {
        username: "amy746",
        password: hash,
      },
      {
        username: "tommygun405",
        password: hash,
      },
      {
        username: "maryK",
        password: hash,
      },
      {
        username: "richardbunker",
        password: hash,
      },
    ],
  });
}

async function createPosts(prisma: PrismaClient) {
  // creates 5 new posts
  return prisma.post.createMany({
    data: [
      {
        userId: 1,
        caption: "A night in paris",
        focal_length: "24",
        shutter_speed: "1/125",
        f_stop: "8",
        iso: "1600",
        image: "https://loremflickr.com/320/240?random=1",
        createdAt: new Date(),
      },
      {
        userId: 2,
        caption: "Exploring the city",
        focal_length: "35",
        shutter_speed: "1/250",
        f_stop: "4",
        iso: "800",
        image: "https://loremflickr.com/320/240?random=2",
        createdAt: new Date(),
      },
      {
        userId: 3,
        caption: "Sunset vibes",
        focal_length: "50",
        shutter_speed: "1/60",
        f_stop: "2.8",
        iso: "400",
        image: "https://loremflickr.com/320/240?random=3",
        createdAt: new Date(),
      },
      {
        userId: 3,
        caption: "Nature's beauty",
        focal_length: "70",
        shutter_speed: "1/200",
        f_stop: "5.6",
        iso: "100",
        image: "https://loremflickr.com/320/240?random=4",
        createdAt: new Date(),
      },
      {
        userId: 1,
        caption: "Morning reflections",
        focal_length: "24",
        shutter_speed: "1/500",
        f_stop: "11",
        iso: "200",
        image: "https://loremflickr.com/320/240?random=5",
        createdAt: new Date(),
      },
    ],
  });
}

async function createComments(prisma: PrismaClient) {
  return prisma.comment.createMany({
    data: [
      {
        userId: 1,
        postId: 5,
        createdAt: new Date(),
        text: "I really think you nailed this photo. The vibe is on point and it is well composed 🙌",
      },
      {
        userId: 2,
        postId: 4,
        createdAt: new Date(),
        text: "Amazing shot! The colors are so vibrant. Great job 👏",
      },
      {
        userId: 1,
        postId: 3,
        createdAt: new Date(),
        text: "This photo captures the essence of the city. Love it! ❤️",
      },
      {
        userId: 4,
        postId: 2,
        createdAt: new Date(),
        text: "The lighting in this photo is absolutely stunning. It creates a magical atmosphere ✨",
      },
      {
        userId: 3,
        postId: 1,
        createdAt: new Date(),
        text: "I'm in awe of this picture! The composition and perspective are spot on. Well done! 👌",
      },
      {
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        text: "Obsessed with this photo!",
      },
    ],
  });
}

async function createReplies(prisma: PrismaClient) {
  return prisma.reply.createMany({
    data: [
      {
        commentId: 1,
        userId: 1,
        text: "Thank you!",
        createdAt: new Date(),
      },
      {
        commentId: 1,
        userId: 4,
        text: "Agree",
        createdAt: new Date(),
      },
      {
        commentId: 5,
        userId: 2,
        text: "Agree",
        createdAt: new Date(),
      },
      {
        commentId: 4,
        userId: 2,
        text: "Thank you so much 🙌",
        createdAt: new Date(),
      },
    ],
  });
}

async function main() {
  const hash = await passwordHashGenerator();
  if (!hash) {
    throw new Error("Environment variable error.");
  }

  await createUsers(prisma, hash);
  await createPosts(prisma);
  await createComments(prisma);
  await createReplies(prisma);

  // const richardbunker = await prisma.user.upsert({
  //   where: { username: "richardbunker" },
  //   update: {},
  //   create: {
  //     username: "richardbunker",
  //     password: hash,
  //   },
  // });
  // const amy746 = await prisma.user.upsert({
  //   where: { username: "amy746" },
  //   update: {},
  //   create: {
  //     username: "amy746",
  //     password: hash,
  //   },
  // });
  // const tommygun405 = await prisma.user.upsert({
  //   where: { username: "tommygun405" },
  //   update: {},
  //   create: {
  //     username: "tommygun405",
  //     password: hash,
  //   },
  // });
  // const maryK = await prisma.user.upsert({
  //   where: { username: "maryK" },
  //   update: {},
  //   create: {
  //     username: "maryK",
  //     password: hash,
  //   },
  // });
  // const post = await prisma.post.create({
  //   data: {
  //     userId: amy746.id,
  //     caption: "A night in paris",
  //     focal_length: "24",
  //     shutter_speed: "1/125",
  //     f_stop: "f8",
  //     iso: "1600",
  //     image:
  //       "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  //     createdAt: new Date(),
  //   },
  // });
  // const comment_1 = await prisma.comment.create({
  //   data: {
  //     userId: tommygun405.id,
  //     postId: post.id,
  //     createdAt: new Date(),
  //     text: "I really think you nailed this photo. The vibe is on point and it is well composed 🙌",
  //   },
  // });
  // const reply = await prisma.reply.create({
  //   data: {
  //     commentId: comment_1.id,
  //     userId: amy746.id,
  //     text: "Thank you!",
  //     createdAt: new Date(),
  //   },
  // });
  // const comment_2 = await prisma.comment.create({
  //   data: {
  //     userId: maryK.id,
  //     postId: post.id,
  //     createdAt: new Date(),
  //     text: "Try to keep the horizon straight. Slight angles can be perceived as novice skill level.",
  //   },
  // });
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
