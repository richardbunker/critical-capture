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
    <>
      {replies.map((reply, index) => {
        return <Reply postUserId={postUserId} reply={reply} key={index} />;
      })}
    </>
  );
};
