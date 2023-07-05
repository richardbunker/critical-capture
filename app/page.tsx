import PostsContainer from "@/components/posts/posts";
import Link from "next/link";

export default function Landing({ session }: { session: string }) {
  return (
    <main className="font-sans text-lg space-y-4">
      <section className="text-center w-full py-2 mt-4">
        <h1 className="font-brand text-4xl tracking-wide text-gray-100">Critical Captures</h1>
        <h3 className="text-sm text-gray-200">Real feedback from real photographers.</h3>
        <article className="pt-2 text-base text-gray-100 flex items-center justify-center flex-wrap space-x-1 px-6">
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
      <section className="py-2 space-y-2">
        <h3 className="w-full text-center text-lg font-brand text-gray-100 px-4">
          Recent Critiques
        </h3>
        <PostsContainer />
      </section>
    </main>
  );
}
