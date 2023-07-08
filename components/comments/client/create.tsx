import { useState } from "react";

export default function CreateComment({
  postId,
  onCreateComment,
}: {
  postId: number;
  onCreateComment: () => void;
}) {
  const [text, setText] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text.length > 0) {
      // POST new comment
      fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({ text, postId }),
      })
        .then((data) => data.json())
        .then(({ err, data }) => {
          if (err) {
            console.log(err);
          } else {
            onCreateComment();
          }
        });
      setText("");
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="w-full">
        <article className="flex text-base text-gray-600 border-2 rounded-full bg-purple-200 w-full">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="py-2 px-4 w-full rounded-full focus:outline-purple-300 border"
            placeholder="Provide a critique..."
          />
          <button type="submit" className="flex items-center justify-center px-1 rounded-r-full">
            <svg
              fill="none"
              className="w-6 h-6 text-white hover:text-purple-400 cursor-pointer"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </article>
      </form>
    </section>
  );
}
