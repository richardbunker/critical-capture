// import prisma from "@/lib/prisma";
import { prettyDate } from "@/lib/utils";
// import { Comment, Reply } from "@prisma/client";
import { log } from "console";
import RepliesContainer from "../replies/repliesContainer";
import { CommentWithReplies } from "@/lib/types";

export default async function Comment({
  comment,
  postUserId,
}: {
  comment: CommentWithReplies;
  postUserId: number;
}) {
  return (
    <div className="flex flex-col p-1 text-sm">
      <span className="text-purple-400">{comment.user.username}</span>
      <span className="text-xs text-gray-400">{prettyDate(comment.createdAt)}</span>
      <div className="py-2">{comment.text}</div>
      <RepliesContainer replies={comment.replies} postUserId={postUserId} />
    </div>
  );
}
