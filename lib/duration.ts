import type { Lang } from "./i18n";

function monthsBetween(startDate: string, endDate: Date): number {
  const start = new Date(startDate);
  const months = (endDate.getFullYear() - start.getFullYear()) * 12 + (endDate.getMonth() - start.getMonth());
  return Math.max(months, 1);
}

export function formatDuration(startDate: string, endDate: string | null, now: Date, lang: Lang): string {
  const total = monthsBetween(startDate, endDate ? new Date(endDate) : now);
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts: string[] = [];
  if (lang === "fr") {
    if (years > 0) parts.push(`${years} an${years > 1 ? "s" : ""}`);
    if (months > 0 || years === 0) parts.push(`${months} mois`);
  } else {
    if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0 || years === 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  }
  return parts.join(" ");
}
