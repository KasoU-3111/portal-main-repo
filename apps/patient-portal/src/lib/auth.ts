// Prototype-only client session.
// Production applications should use server-side authentication,
// secure session cookies, role-based access and appropriate audit controls.

export const SESSION_KEY = "name-portal-ibd-session";

export function signIn(email: string) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      email: email.trim().toLowerCase(),
      at: Date.now(),
    })
  );
}

export function signOut() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(SESSION_KEY);
}

export function isSignedIn() {
  if (typeof window === "undefined") return false;

  return Boolean(window.localStorage.getItem(SESSION_KEY));
}