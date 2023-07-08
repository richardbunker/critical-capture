import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession();
  const { postId }: { postId: number } = await request.json();
  if (session?.user?.name) {
    const comments = await prisma.comment.findMany({
      where: { postId: postId },
      include: { replies: true, user: { select: { username: true } } },
    });
    return NextResponse.json({ err: false, data: comments });
  }
  return new Response(JSON.stringify({ err: true, data: null }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
