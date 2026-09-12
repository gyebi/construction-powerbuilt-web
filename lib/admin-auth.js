import { cookies } from "next/headers";
import { adminAuth } from "./firebase-admin";
import { db } from "../src/prisma/db";

export async function getAdminSession() {
  try {
    const cookieStore = await cookies();

    const sessionCookie =
      cookieStore.get("powerbuilt_session")?.value;

    if (!sessionCookie) {
      return null;
    }

    const decodedClaims =
      await adminAuth.verifySessionCookie(
        sessionCookie,
        true
      );

    const staff =
      await db.orm.public.StaffUser
        .where({
          firebaseUid: decodedClaims.uid,
        })
        .first();

    if (
      !staff ||
      !staff.active ||
      staff.role !== "ADMIN"
    ) {
      return null;
    }

    return {
      uid: decodedClaims.uid,
      email: decodedClaims.email ?? staff.email,
      name: staff.displayName ?? null,
      role: staff.role,
      staffId: staff.id,
    };
  } catch (error) {
    console.error(
      "Admin authorization failed:",
      error
    );

    return null;
  }
}
