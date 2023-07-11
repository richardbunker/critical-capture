"use client";
import { PostWithComments } from "@/lib/types";
import { Session } from "next-auth";
import { prettyDate } from "../clib/utils";
import Image from "next/image";
import { CommentsContainer } from "../comments/CommentsContainer";

export const Post = ({ post, session }: { post: PostWithComments; session: Session | null }) => {
  return (
    <article className="bg-gray-50 p-4 md:rounded-xl md:shadow-lg">
      <div className="space-y-2">
        <div className="space-y-1">
          <h4 className="font-bold text-gray-600 flex flex-col items-start justify-start">
            <span className="text-xl">{post.caption}</span>
            <div className="flex items-center justify-between space-x-1">
              <span className="text-sm font-bold text-gray-300">by</span>
              <span className="text-sm font-bold text-purple-300">{post.user.username}</span>
              <span className="text-sm font-normal text-gray-300">
                {prettyDate(post.createdAt)}
              </span>
            </div>
          </h4>
          <p className="text-base text-gray-400 font-brand">
            {post.focal_length}mm | {post.shutter_speed} | f{post.f_stop} | ISO{post.iso}
          </p>
        </div>
        <div className="w-full relative h-[500px] bg-black rounded-sm shadow-sm">
          <Image
            src={post.image}
            alt="Photo that needs a good critique."
            fill={true}
            className="object-contain py-4"
          />
        </div>
        <div id="comments" className="py-1">
          <CommentsContainer
            postUserId={post.userId}
            comments={post.comments}
            postId={post.id}
            session={session}
          />
        </div>
      </div>
    </article>
  );
};
