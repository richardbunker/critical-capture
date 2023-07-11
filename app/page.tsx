import { PostsContainer } from "@/components/posts/PostsContainer";
import { Menu } from "@/components/ui/menu";
import { PageTitle } from "@/components/ui/pageTitle";
import { getServerSession } from "next-auth";

async function getData() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/post/index", {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Landing() {
  const session = await getServerSession();
  const { posts } = await getData();
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
