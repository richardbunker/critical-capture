import prisma from "@/lib/prisma";
import Post from "./post";

export default async function PostsContainer() {
  const posts = await prisma.post.findMany({
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
