"use client";
import { _prettyDate } from "./utils";

export default function Container({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index} className="flex flex-col p-1 text-sm">
            <span className="text-purple-400">{comment.user.username}</span>
            <span className="text-xs text-gray-400">
              {_prettyDate(new Date(comment.createdAt))}
            </span>
            <div className="py-2">{comment.text}</div>
          </div>
        );
      })}
    </div>
  );
}
