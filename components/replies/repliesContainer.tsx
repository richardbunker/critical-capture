import Reply from "./reply";
import { ReplyWithUser } from "@/lib/types";

export interface IRepliesProp {
  replies: ReplyWithUser[];
  postUserId: number;
}

export default async function RepliesContainer({ replies, postUserId }: IRepliesProp) {
  return (
    <>
      {replies.map((reply, index) => {
        return <Reply postUserId={postUserId} reply={reply} key={index} />;
      })}
    </>
  );
}
