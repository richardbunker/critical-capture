import { getServerSession } from "next-auth";
import Comment from "./comment";
import { CommentWithReplies } from "@/lib/types";

export default async function CommentsContainer({
  comments,
  postUserId,
}: {
  comments: CommentWithReplies[];
  postUserId: number;
}) {
  const session = await getServerSession();
  return (
    <div>
      <div className="">
        {comments.map((comment: CommentWithReplies, index) => {
          return <Comment postUserId={postUserId} comment={comment} key={index} />;
        })}
      </div>
      {session && (
        <div className="text-sm text-gray-600 border-2 rounded-full py-2 px-3">
          Write a comment...
        </div>
      )}
    </div>
  );
}
