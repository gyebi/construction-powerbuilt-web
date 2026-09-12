import { NextResponse } from "next/server";
import { adminAuth } from "../../../../lib/firebase-admin";

const SESSION_DURATION_MS =
  1000 * 60 * 60 * 24 * 5; // 5 days

export async function POST(request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json(
        { error: "Authentication token is required." },
        { status: 400 }
      );
    }

    const decodedToken =
      await adminAuth.verifyIdToken(idToken);

    const sessionCookie =
      await adminAuth.createSessionCookie(idToken, {
        expiresIn: SESSION_DURATION_MS,
      });

    const response = NextResponse.json({
      success: true,
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email ?? null,
      },
    });

    response.cookies.set(
      "powerbuilt_session",
      sessionCookie,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge:
          SESSION_DURATION_MS / 1000,
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Admin session creation failed:",
      error
    );

    return NextResponse.json(
      { error: "Unable to sign in." },
      { status: 401 }
    );
  }
}