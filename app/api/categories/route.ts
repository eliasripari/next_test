import { NextRequest, NextResponse } from "next/server";
import db from "@/app/data/db";

// RICHIAMA RICETTA
export async function GET(
  Request: NextRequest,
  Resposne: NextResponse
): Response {
  try {
    const [rows] = await db.query("SELECT * FROM categories");
    return new Response(JSON.stringify(rows));
  } catch (error) {
    return new Response(JSON.stringify({ error: true }));
  }
}
