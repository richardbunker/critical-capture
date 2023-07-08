import Reply from "./reply";
import { ReplyWithUser } from "@/lib/types";

export default function RepliesContainer({
  replies,
  postUserId,
}: {
  replies: ReplyWithUser[];
  postUserId: number;
}) {
  return (
    <>
      {replies.map((reply, index) => {
        return <Reply postUserId={postUserId} reply={reply} key={index} />;
      })}
    </>
  );
}
