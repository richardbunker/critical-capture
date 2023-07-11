import { PostsContainer } from "@/components/posts/PostsContainer";
import { Menu } from "@/components/ui/menu";
import { PageTitle } from "@/components/ui/pageTitle";
import { Posts } from "@/lib/types";
import { getServerSession } from "next-auth";

async function getData() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/post/tagged?tagName=fine art", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FineArt() {
  const session = await getServerSession();
  const { posts }: { posts: Posts } = await getData();
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
