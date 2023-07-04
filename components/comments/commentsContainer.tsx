import Comment from "./comment";
import { CommentWithReplies } from "@/lib/types";

export interface ICommentsContainerProps {
  comments: CommentWithReplies[];
  postUserId: number;
}

export default async function CommentsContainer({ comments, postUserId }: ICommentsContainerProps) {
  return (
    <>
      {comments.map((comment: CommentWithReplies, index) => {
        return <Comment postUserId={postUserId} comment={comment} key={index} />;
      })}
    </>
  );
}
