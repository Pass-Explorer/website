type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | { [k: string]: boolean | null | undefined };

export function cn(...inputs: ClassValue[]): string {
  const parts: string[] = [];
  for (const i of inputs) {
    if (!i) continue;
    if (typeof i === "string" || typeof i === "number") {
      parts.push(String(i));
    } else if (Array.isArray(i)) {
      parts.push(cn(...i));
    } else if (typeof i === "object") {
      for (const [k, v] of Object.entries(i)) if (v) parts.push(k);
    }
  }
  return parts.join(" ");
}
