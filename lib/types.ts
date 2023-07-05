import { Comment, Post, Reply } from "@prisma/client";

export type Posts = PostWithComments[];
export type PostWithComments = Post & {
  comments: CommentWithReplies[];
  user: { username: string };
};
export type CommentWithReplies = Comment & { user: { username: string }; replies: ReplyWithUser[] };
export type ReplyWithUser = Reply & { user: { username: string } };
