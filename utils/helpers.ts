export function normalizeText(value: string | null): string {
  return (value ?? "").replace(/\s+/g, " ").trim();
}
