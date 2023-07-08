import { ReplyWithUser } from "@/lib/types";
import { Reply } from "@prisma/client";

export default function Reply({ reply, postUserId }: { reply: ReplyWithUser; postUserId: number }) {
  console.log(reply);
  return (
    <section id="reply" className="pl-2">
      <div className="flex flex-col p-1 text-sm">
        <span className="text-purple-400">
          {reply.userId === postUserId ? reply.user.username + " (📸 author)" : reply.user.username}
        </span>
        {/* <span className="text-xs text-gray-400">{_prettyDate(reply.createdAt)}</span> */}
        <div className="py-2">{reply.text}</div>
      </div>
    </section>
  );
}
