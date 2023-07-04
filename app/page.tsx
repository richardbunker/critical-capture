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
        {/* <article className="bg-gray-50 p-4">
          <div className="space-y-2">
            <div className="">
              <h4 className="text-sm font-bold text-gray-600 flex items-center justify-between">
                <span>A night in Paris.</span>{" "}
                <span className="text-xs text-gray-300">12:13pm 12/06/2023</span>
              </h4>
              <p className="text-xs text-gray-400 font-brand">24mm | 1/125 | f8 | IOS1600</p>
            </div>
            <div className="flex items-center justify-center h-[200px] bg-gray-200 text-gray-100">
              image
            </div>
            <div id="comments" className="">
              <div id="comment_1" className="flex flex-col p-1 text-sm">
                <span className="text-purple-400">tommyGun405</span>
                <span className="text-xs text-gray-400">3:23pm 12/06/2023</span>
                <div className="py-2">
                  I really think you nailed this photo. The vibe is on point and it is well composed
                  🙌
                </div>
                <section id="reply" className="pl-4">
                  <div className="flex flex-col p-1 text-sm">
                    <span className="text-purple-400">📸 author</span>
                    <span className="text-xs text-gray-400">3:23pm 12/06/2023</span>
                    <div className="py-2">Thank you!</div>
                  </div>
                </section>
              </div>
              <div id="comment_1" className="flex flex-col p-1 text-sm">
                <span className="text-purple-400">MaryK</span>
                <span className="text-xs text-gray-400">4:18pm 12/06/2023</span>
                <div className="py-2">
                  Try to keep the horizon straight. Slight angles can be perceived as novice skill
                  level.
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-gray-50 p-4">
          <div className="space-y-2">
            <div className="">
              <h4 className="text-sm font-bold text-gray-600">Light Bulb.</h4>
              <p className="text-xs text-gray-400 font-brand">35mm | 1/200 | f2.8 | IOS100</p>
            </div>
            <div className="flex items-center justify-center h-[200px] bg-gray-200 text-gray-100">
              image
            </div>
            <div id="comments" className="">
              <div id="comment_1" className="flex flex-col p-1 text-sm">
                <span className="text-purple-400">tommyGun405</span>
                <span className="text-xs text-gray-400">3:23pm 12/06/2023</span>
                <div className="py-2">
                  I really think you nailed this photo. The vibe is on point and it is well
                  composed.
                </div>
                <section id="reply" className="pl-4">
                  <div className="flex flex-col p-1 text-sm">
                    <span className="text-purple-400">📸 author</span>
                    <span className="text-xs text-gray-400">3:23pm 12/06/2023</span>
                    <div className="py-2">Thank you!</div>
                  </div>
                </section>
              </div>
              <div id="comment_1" className="flex flex-col p-1 text-sm">
                <span className="text-purple-400">MaryK</span>
                <span className="text-xs text-gray-400">4:18pm 12/06/2023</span>
                <div className="py-2">
                  Try to keep the horizon straight. Slight angles can be perceived as novice skill
                  level.
                </div>
              </div>
            </div>
          </div>
        </article> */}
      </section>
    </main>
  );
}
