export function formatRuntime(minutes: number): string {
  const hours: number = Math.floor(minutes / 60);
  const remainingMinutes: number = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}


export function validateEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 6;
}