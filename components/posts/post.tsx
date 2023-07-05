import { prettyDate } from "@/lib/utils";
import CommentsContainer from "../comments/commentsContainer";
import { PostWithComments } from "@/lib/types";
import { Post } from "@prisma/client";

export default function Post({ post }: { post: PostWithComments }) {
  return (
    <article className="bg-gray-50 p-4">
      <div className="space-y-2">
        <div className="space-y-1">
          <h4 className="font-bold text-gray-600 flex flex-col items-start justify-start">
            <span className="text-base">{post.caption}</span>
            <div className="flex items-center justify-between space-x-1">
              <span className="text-xs font-bold text-gray-300">by</span>
              <span className="text-xs font-bold text-purple-300">{post.user.username}</span>
              <span className="text-xs font-normal text-gray-300">
                ({prettyDate(post.createdAt)})
              </span>
            </div>
          </h4>
          <p className="text-xs text-gray-400 font-brand">
            {post.focal_length}mm | {post.shutter_speed} | {post.f_stop} | ISO{post.iso}
          </p>
        </div>
        <img
          src={post.image}
          className="flex items-center justify-center h-[200px] w-full bg-gray-200 text-gray-100"
        />
        <div id="comments" className="">
          <CommentsContainer postUserId={post.userId} comments={post.comments} />
          {/* <div id="comment_1" className="flex flex-col p-1 text-sm">
            <span className="text-purple-400">tommyGun405</span>
            <span className="text-xs text-gray-400">3:23pm 12/06/2023</span>
            <div className="py-2">
              I really think you nailed this photo. The vibe is on point and it is well composed 🙌
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
          </div> */}
        </div>
      </div>
    </article>
  );
}
