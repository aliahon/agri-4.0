import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //   const { id } = request.params;
  //   console.log(id);
  return NextResponse.json({ id: 12 });
}
