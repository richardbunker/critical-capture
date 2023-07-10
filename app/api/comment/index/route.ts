import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  if (isNaN(Number(postId))) {
    return NextResponse.json(
      { err: false, message: "Invalid postId. Must be valid integer." },
      { status: 400 }
    );
  }
  const comments = await prisma.comment.findMany({
    where: { postId: Number(postId), parentId: null },
    include: {
      replies: { include: { user: { select: { username: true } } } },
      user: { select: { username: true } },
    },
  });
  return NextResponse.json({ err: false, data: comments });
}
