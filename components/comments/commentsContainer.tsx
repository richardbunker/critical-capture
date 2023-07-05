import Comment from "./comment";
import { CommentWithReplies } from "@/lib/types";

export default async function CommentsContainer({
  comments,
  postUserId,
}: {
  comments: CommentWithReplies[];
  postUserId: number;
}) {
  return (
    <>
      {comments.map((comment: CommentWithReplies, index) => {
        return <Comment postUserId={postUserId} comment={comment} key={index} />;
      })}
    </>
  );
}
