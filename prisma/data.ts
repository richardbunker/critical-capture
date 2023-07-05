import { PrismaClient } from "@prisma/client";

export async function createUsers(prisma: PrismaClient, hash: string) {
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

export async function createPosts(prisma: PrismaClient) {
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

export async function createComments(prisma: PrismaClient) {
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

export async function createReplies(prisma: PrismaClient) {
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
