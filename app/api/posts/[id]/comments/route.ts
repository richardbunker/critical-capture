import prisma from "@/lib/prisma";
import { Comment } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
  const { params } = context;
  const postId = params.id;
  if (postId && !isNaN(Number(postId))) {
    const comments: Comment[] = await prisma.comment.findMany({
      where: { postId: Number(postId), parentId: null },
      include: {
        replies: { include: { user: { select: { username: true } } } },
        user: { select: { username: true } },
      },
    });
    return NextResponse.json({ err: false, comments }, { status: 200 });
  }
  return NextResponse.json({ err: true, message: "Invalid postId." }, { status: 400 });
}
