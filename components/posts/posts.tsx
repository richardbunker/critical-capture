import prisma from "@/lib/prisma";
import Post from "./post";
import { Posts } from "@/lib/types";

export default async function PostsContainer() {
  const posts: Posts = await prisma.post.findMany({
    include: {
      user: { select: { username: true } },
      comments: {
        include: {
          replies: { include: { user: { select: { username: true } } } },
          user: { select: { username: true } },
        },
      },
    },
  });
  return (
    <>
      {posts.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </>
  );
}
