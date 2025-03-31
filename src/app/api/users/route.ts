import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "@/services/userService";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const count = Number(searchParams.get("count")) || 5; 

  const users = getUsers(count);
  
  return NextResponse.json(users);
}
