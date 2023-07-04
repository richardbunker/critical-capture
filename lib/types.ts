import { Comment, Reply } from "@prisma/client";

export type CommentWithReplies = Comment & { user: { username: string }; replies: ReplyWithUser[] };
export type ReplyWithUser = Reply & { user: { username: string } };
