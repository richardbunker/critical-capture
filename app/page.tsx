import { PostsContainer } from "@/components/posts/PostsContainer";
import prisma from "@/lib/prisma";
import { Posts } from "@/lib/types";
import { Session, getServerSession } from "next-auth";
import Link from "next/link";

export default async function Landing() {
  const session = await getServerSession();
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
    <main className="font-sans text-lg space-y-4">
      <section className="text-center w-full py-2 mt-4">
        <h1 className="font-brand text-6xl tracking-wide text-yellow-100 font-bold">
          Critical Captures
        </h1>
        <h3 className="text-lg text-yellow-200">Real feedback from real photographers.</h3>
        <article className="pt-2 text-base text-white flex items-center justify-center flex-wrap space-x-1 px-6">
          <Link href={"/landscape"}>landscape</Link>
          <span className="">|</span>
          <Link href={"/street"}>street</Link>
          <span className="">|</span>
          <Link href={"/portraiture"}>portraiture</Link>
          <span className="">|</span>
          <Link href={"/fineart"}>fine art</Link>
          <span className="">|</span>
          <Link href={"/astro"}>astro</Link>
          <span className="">|</span>
          <Link href={"/bw"}>b&w</Link>
          <span className="">|</span>
          <Link href={"/minimal"}>minimal</Link>
          <span className="">|</span>
          <Link href={"/abstract"}>abstract</Link>
        </article>
      </section>
      <section className="py-2 space-y-2 w-full md:max-w-2xl md:mx-auto">
        <h3 className="w-full text-center text-4xl font-brand text-blue-500 px-4 tracking-wide">
          🧐 Recent Critiques 🧐
        </h3>
        <PostsContainer posts={posts} session={session} />
      </section>
    </main>
  );
}
