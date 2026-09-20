// Prototype-only client session. A production build would use secure
// server-side authentication, role-based access, encryption and audit logs.
export const SESSION_KEY = "name-portal-ibd-session";

export function signIn(email: string) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify({ email, at: Date.now() }));
  }
}

export function signOut() {
  if (typeof window !== "undefined") window.localStorage.removeItem(SESSION_KEY);
}

export function isSignedIn() {
  if (typeof window === "undefined") return false;
  return Boolean(window.localStorage.getItem(SESSION_KEY));
}
