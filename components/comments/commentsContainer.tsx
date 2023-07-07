import { getServerSession } from "next-auth";
import Comment from "./comment";
import { CommentWithReplies } from "@/lib/types";
import CreateComment from "./client/create";

export default async function CommentsContainer({
  comments,
  postUserId,
  postId,
}: {
  comments: CommentWithReplies[];
  postUserId: number;
  postId: number;
}) {
  const session = await getServerSession();
  return (
    <div>
      <div className="">
        {comments.map((comment: CommentWithReplies, index) => {
          return <Comment postUserId={postUserId} comment={comment} key={index} />;
        })}
      </div>
      {session && <CreateComment postId={postId} username={session.user?.name} />}
    </div>
  );
}
