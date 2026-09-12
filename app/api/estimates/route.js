import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { db } from "../../../src/prisma/db";

const ALLOWED_PROJECT_TYPES = new Set([
  "residential",
  "commercial",
  "renovation",
  "electrical",
  "other",
]);

const ALLOWED_ESTIMATE_TYPES = new Set([
  "full_construction",
  "bill_of_quantities",
  "materials",
  "labour",
  "electrical",
  "other",
]);

function cleanText(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function normalizeOptionalText(value, maxLength = 500) {
  const cleaned = cleanText(value, maxLength);
  return cleaned || null;
}

function isValidEmail(email) {
  if (!email) return true;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isReasonablePhone(phone) {
  return /^[+0-9()\-\s]{7,25}$/.test(phone);
}

function createReferenceNumber() {
  const now = new Date();

  const year = now.getUTCFullYear();

  const shortId = randomUUID()
    .replaceAll("-", "")
    .slice(0, 8)
    .toUpperCase();

  return `PB-${year}-${shortId}`;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const customerName = cleanText(body.customerName, 120);
    const email = normalizeOptionalText(body.email, 180);
    const phone = cleanText(body.phone, 30);
    const whatsapp = normalizeOptionalText(body.whatsapp, 30);

    const projectLocation = cleanText(body.projectLocation, 180);
    const projectType = cleanText(body.projectType, 50).toLowerCase();

    const estimateType = body.estimateType
      ? cleanText(body.estimateType, 50).toLowerCase()
      : null;

    const description = normalizeOptionalText(body.description, 3000);

    if (!customerName) {
      return NextResponse.json(
        { error: "Customer name is required." },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!isReasonablePhone(phone)) {
      return NextResponse.json(
        { error: "Enter a valid phone number." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (!projectLocation) {
      return NextResponse.json(
        { error: "Project location is required." },
        { status: 400 }
      );
    }

    if (!ALLOWED_PROJECT_TYPES.has(projectType)) {
      return NextResponse.json(
        { error: "Select a valid project type." },
        { status: 400 }
      );
    }

    if (
      estimateType &&
      !ALLOWED_ESTIMATE_TYPES.has(estimateType)
    ) {
      return NextResponse.json(
        { error: "Select a valid estimate type." },
        { status: 400 }
      );
    }

    const referenceNumber = createReferenceNumber();

    const estimate = await db.orm.public.EstimateRequest.create({
      referenceNumber,
      customerName,
      email,
      phone,
      whatsapp,
      projectLocation,
      projectType,
      estimateType,
      description,
      status: "NEW",
    });

    return NextResponse.json(
      {
        success: true,
        estimate: {
          id: estimate.id,
          referenceNumber: estimate.referenceNumber,
          status: estimate.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Estimate request creation failed:", error);

    return NextResponse.json(
      {
        error: "We could not submit your estimate request. Please try again.",
      },
      { status: 500 }
    );
  }
}