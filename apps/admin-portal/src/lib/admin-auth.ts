import { DEMO_CREDENTIALS } from "./mock-data";

const KEY = "meridian-admin-session";

export function signIn(email: string, password: string): boolean {
  const ok =
    email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password;
  if (ok && typeof window !== "undefined") {
    window.localStorage.setItem(KEY, "active");
  }
  return ok;
}

export function signOut() {
  if (typeof window !== "undefined") window.localStorage.removeItem(KEY);
}

export function isSignedIn(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(KEY) === "active";
}
