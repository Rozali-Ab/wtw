export function formatRuntime(minutes: number): string {
  const hours: number = Math.floor(minutes / 60);
  const remainingMinutes: number = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}

export class Token {
  private static _name: string = process.env.AUTH_TOKEN_KEY_NAME || '';

  static get() {
    const token = localStorage.getItem(this._name);

    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this._name, token);
  }

  static drop() {
    localStorage.removeItem(this._name);
  }
}