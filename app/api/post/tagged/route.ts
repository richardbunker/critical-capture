import prisma from "@/lib/prisma";
import { Posts } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tagName = searchParams.get("tagName");
  if (tagName) {
    const posts: Posts = await prisma.post.findMany({
      where: { tags: { some: { tag: { name: tagName } } } },
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
    return NextResponse.json({ err: false, posts });
  }
  return NextResponse.json({ err: true, data: "No tag name supplied" });
}
