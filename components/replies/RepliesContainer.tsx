"use client";
import { ReplyWithUser } from "@/lib/types";
import { Reply } from "./Reply";

export const RepliesContainer = ({
  replies,
  postUserId,
}: {
  replies: ReplyWithUser[];
  postUserId: number;
}) => {
  return (
    <div className="space-y-1">
      {replies.map((reply, index) => {
        return <Reply postUserId={postUserId} reply={reply} key={index} />;
      })}
    </div>
  );
};
