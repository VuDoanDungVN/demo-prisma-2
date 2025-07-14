// app/api/users/route.ts

import { NextResponse } from "next/server";
import prisma from "../../lib/prisma"; // dùng alias nếu config hoặc giữ nguyên đường dẫn

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
