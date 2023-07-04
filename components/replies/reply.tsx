import prisma from "@/lib/prisma";
import { prettyDate } from "@/lib/utils";
import { Reply } from "@prisma/client";
import { log } from "console";

export interface IReplyProps {
  reply: Reply & { user: { username: string } };
  postUserId: number;
}

export default async function Reply({ reply, postUserId }: IReplyProps) {
  log(reply, postUserId);
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
