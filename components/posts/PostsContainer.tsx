"use client";
import { Posts } from "@/lib/types";
import { Session } from "next-auth";
import { Post } from "./Post";

export const PostsContainer = ({ posts, session }: { session: Session | null; posts: Posts }) => {
  return posts.length > 0 ? (
    <>
      {posts.map((post, index) => {
        return <Post post={post} key={index} session={session} />;
      })}
    </>
  ) : (
    <div className="text-white text-sm">
      Hmm... looks like we have no posts yet. Perhaps check back later...
    </div>
  );
};
