import prisma from "@/lib/prisma";
import Post from "./post";
import { Posts } from "@/lib/types";
import { Session } from "next-auth";

export default async function PostsContainer({ session }: { session: Session | null }) {
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
        return <Post post={post} key={index} session={session} />;
      })}
    </>
  );
}
