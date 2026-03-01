import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function GET() {
  const { data, error } = await supabase
    .from("questions")
    .select("id, user_name, text, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { questions: data ?? [] },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text =
      typeof body?.text === "string" ? body.text.trim() : "";
    const user_name =
      typeof body?.user_name === "string" && body.user_name.trim()
        ? body.user_name.trim()
        : "Delegate";

    if (!text) {
      return NextResponse.json(
        { error: "Question text is required" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("questions").insert({
      user_name,
      text,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}