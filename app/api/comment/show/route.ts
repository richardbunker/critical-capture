import { log } from "console";
import { NextResponse } from "next/server";

export async function GET() {
  //   const body = request.body.comment;
  //   console.log(body);
  return NextResponse.json("body");
}
