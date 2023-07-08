import _Comment from "./_comment";
import { CommentWithReplies } from "@/lib/types";
import CreateComment from "./client/create";
import { useState } from "react";
import { Session } from "next-auth";

export default function _CommentsContainer({
  comments,
  postUserId,
  postId,
  session,
}: {
  comments: CommentWithReplies[];
  postUserId: number;
  postId: number;
  session: Session | null;
}) {
  const [initComments, setInitComments] = useState(comments);
  const handleCreateComment = () => {
    console.log("I been created");
    fetch("/api/comment/index", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ postId }),
    })
      .then((data) => data.json())
      .then(({ err, data }) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(data);
          setInitComments(data);
        }
      });
  };
  return (
    <div>
      <div className="">
        {initComments.map((comment: CommentWithReplies, index) => {
          return <_Comment postUserId={postUserId} comment={comment} key={index} />;
        })}
      </div>
      {session?.user?.name && (
        <CreateComment onCreateComment={handleCreateComment} postId={postId} />
      )}
    </div>
  );
}
