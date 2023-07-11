import prisma from "@/lib/prisma";
import { Posts } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const posts: Posts = await prisma.post.findMany({
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
