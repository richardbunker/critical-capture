"use client";
import { Posts } from "@/lib/types";
import { Session } from "next-auth";
import { Post } from "./post";

export const PostsContainer = ({ posts, session }: { session: Session | null; posts: Posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        return <Post post={post} key={index} session={session} />;
      })}
    </>
  );
};
