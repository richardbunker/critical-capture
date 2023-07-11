import prisma from "@/lib/prisma";
import { Posts } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
  const { params } = context;
  const postId = params.id;
  console.log(postId);
  if (postId && !isNaN(Number(postId))) {
    const posts: Posts = await prisma.post.findMany({
      where: { id: Number(postId) },
      include: {
        user: { select: { username: true } },
        comments: {
          where: { parentId: null },
          include: {
            replies: { include: { user: { select: { username: true } } } },
            user: { select: { username: true } },
          },
        },
      },
    });
    if (posts.length > 0) {
      return NextResponse.json({ err: false, posts });
    }
    return NextResponse.json({ err: true, message: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ err: true, message: "Invalid postId." }, { status: 404 });
}
