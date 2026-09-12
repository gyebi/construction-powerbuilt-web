"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { firebaseAuth } from "../../../lib/firebase-client";
import "./admin-login.css";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const credential =
        await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );

      const idToken =
        await credential.user.getIdToken();

      const response = await fetch(
        "/api/auth/session",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            idToken,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        await signOut(firebaseAuth);

        throw new Error(
          data?.error ||
            "Unable to sign in."
        );
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
  console.error("Login failed:", err);

  setError(
    err?.code
      ? `Login failed: ${err.code}`
      : "Unable to sign in."
  );
}
     finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <div className="section-label">
          POWERBUILT TEAM
        </div>

        <h1>Team Login</h1>

        <p>
          Sign in to manage estimate
          requests, plans and projects.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-email">
            Email
          </label>

          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            autoComplete="email"
            required
          />

          <label htmlFor="admin-password">
            Password
          </label>

          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            autoComplete="current-password"
            required
          />

          {error ? (
            <div role="alert">
              {error}
            </div>
          ) : null}

          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Signing in..."
              : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}