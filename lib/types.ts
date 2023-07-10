import { Comment, Post } from "@prisma/client";

export type Posts = PostWithComments[];
export type PostWithComments = Post & {
  comments: CommentWithReplies[];
  user: { username: string };
};
export type CommentWithReplies = Comment & { user: { username: string }; replies: ReplyWithUser[] };
export type ReplyWithUser = Comment & { user: { username: string } };
