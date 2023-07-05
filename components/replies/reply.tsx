import { ReplyWithUser } from "@/lib/types";
import { prettyDate } from "@/lib/utils";
import { Reply } from "@prisma/client";
export default async function Reply({
  reply,
  postUserId,
}: {
  reply: ReplyWithUser;
  postUserId: number;
}) {
  return (
    <section id="reply" className="pl-4">
      <div className="flex flex-col p-1 text-sm">
        <span className="text-purple-400">
          {reply.userId === postUserId ? reply.user.username + " (📸 author)" : reply.user.username}
        </span>
        <span className="text-xs text-gray-400">{prettyDate(reply.createdAt)}</span>
        <div className="py-2">{reply.text}</div>
      </div>
    </section>
  );
}
