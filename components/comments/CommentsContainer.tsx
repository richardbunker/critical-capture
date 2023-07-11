"use client";
import { CommentWithReplies } from "@/lib/types";
import CreateComment from "./create";
import { useState } from "react";
import { Session } from "next-auth";
import { Comment } from "./Comment";

export const CommentsContainer = ({
  comments,
  postUserId,
  postId,
  session,
}: {
  comments: CommentWithReplies[];
  postUserId: number;
  postId: number;
  session: Session | null;
}) => {
  const [initComments, setInitComments] = useState(comments);
  const handleCreateComment = () => {
    fetch(`/api/comment/index?postId=${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })
      .then((data) => data.json())
      .then(({ err, data }) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          setInitComments(data);
        }
      });
  };
  return (
    <div>
      <div className="space-y-2">
        {initComments.map((comment: CommentWithReplies, index) => {
          return (
            <Comment
              onCreateReply={handleCreateComment}
              postUserId={postUserId}
              comment={comment}
              key={index}
              session={session}
            />
          );
        })}
      </div>
      {session?.user?.name && (
        <CreateComment
          placeholder="Provide a critique.."
          parentId={false}
          onCreateComment={handleCreateComment}
          postId={postId}
        />
      )}
    </div>
  );
};
