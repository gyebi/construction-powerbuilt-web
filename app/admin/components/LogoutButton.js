"use client";

import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "../../../lib/firebase-client";

export default function LogoutButton() {
  async function handleLogout() {
    try {
      const auth = getFirebaseAuth();

      await signOut(auth);

      await fetch("/api/admin/logout", {
        method: "POST",
      });

      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  );
}