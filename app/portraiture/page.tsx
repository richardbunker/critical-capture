import { PostsContainer } from "@/components/posts/PostsContainer";
import { Menu } from "@/components/ui/menu";
import { PageTitle } from "@/components/ui/pageTitle";
import prisma from "@/lib/prisma";
import { Posts } from "@/lib/types";
import { getServerSession } from "next-auth";

export const revalidate = 0;

async function getData() {
  const posts: Posts = await prisma.post.findMany({
    where: { tags: { some: { tag: { name: "portraiture" } } } },
    include: {
      user: { select: { username: true } },
      comments: {
        where: { parentId: null },
        include: {
          replies: { include: { user: { select: { username: true } } } },
          user: { select: { username: true } },
        },
      },
    },
  });
  return posts;
}

export default async function Portraiture() {
  const session = await getServerSession();
  const posts: Posts = await getData();
  return (
    <main className="font-sans text-lg space-y-4">
      <Menu />
      <section className="py-2 space-y-2 w-full md:max-w-2xl md:mx-auto">
        <PageTitle />
        <PostsContainer posts={posts} session={session} />
      </section>
    </main>
  );
}
