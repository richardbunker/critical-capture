"use client";
import { CommentWithReplies } from "@/lib/types";
import { RepliesContainer } from "../replies/RepliesContainer";
import { prettyDate } from "../clib/utils";
import { useState } from "react";
import CreateComment from "./create";

export const Comment = ({
  comment,
  postUserId,
  onCreateReply,
}: {
  comment: CommentWithReplies;
  postUserId: number;
  onCreateReply: Function;
}) => {
  const [addReply, setAddReply] = useState(false);
  const showAddReply = () => {
    setAddReply(true);
  };
  const hideAddReply = () => {
    setAddReply(false);
  };
  const createReply = () => {
    onCreateReply();
    hideAddReply();
  };
  return (
    <div className="flex flex-col p-1 text-sm">
      <span className="text-purple-400">{comment.user.username}</span>
      <span className="text-xs text-gray-400">{prettyDate(comment.createdAt)}</span>
      <div className="pt-2">{comment.text}</div>

      {addReply && (
        <div className="pt-2">
          <CreateComment
            placeholder="Add a reply..."
            parentId={comment.id}
            onCreateComment={createReply}
            postId={comment.postId}
          />
        </div>
      )}
      <div className="flex items-center justify-start space-x-2 pb-2">
        {!addReply && (
          <button
            onClick={showAddReply}
            className="text-xs font-bold max-w-max mt-1 text-gray-400 hover:text-blue-500 cursor-pointer"
          >
            Reply
          </button>
        )}
        {addReply && (
          <button
            onClick={hideAddReply}
            className="pl-2 text-xs font-bold max-w-max mt-1 text-gray-400 hover:text-blue-500 cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
      <RepliesContainer replies={comment.replies} postUserId={postUserId} />
    </div>
  );
};
