import { NextResponse } from "next/server";
import { db } from "../../../src/prisma/db";

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function optionalText(value, maxLength) {
  return cleanText(value, maxLength) || null;
}

function isValidEmail(email) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isReasonablePhone(phone) {
  return !phone || /^[+0-9()\-\s]{7,25}$/.test(phone);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = cleanText(body.name, 120);
    const email = optionalText(body.email, 180);
    const phone = optionalText(body.phone, 30);
    const subject = optionalText(body.subject, 160);
    const message = cleanText(body.message, 3000);

    if (!name || !message) {
      return NextResponse.json({ error: "Your name and message are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (!isReasonablePhone(phone)) {
      return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
    }

    await db.orm.public.ContactEnquiry.create({ name, email, phone, subject, message, status: "NEW" });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact enquiry creation failed:", error);
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 500 });
  }
}
