import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Lead captured:", body);
    return NextResponse.json({ success: true, message: "Lead captured successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}