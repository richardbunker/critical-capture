import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession();
  const {
    text,
    postId,
    date,
    parentId,
  }: { text: string; postId: number; date: Date; parentId: number | false } = await request.json();
  if (session?.user?.name) {
    const user = await prisma.user.findFirst({ where: { username: session?.user?.name } });
    if (user) {
      const comment = await prisma.comment.create({
        data: {
          text: text,
          createdAt: date,
          postId: postId,
          userId: user.id,
          parentId: parentId === false ? null : parentId,
        },
        include: {
          user: { select: { username: true } },
          replies: true,
        },
      });
      return NextResponse.json({ err: false, data: comment });
    }
  }
  return new Response(JSON.stringify({ err: true, data: null }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
