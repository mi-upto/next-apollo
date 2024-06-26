/**
 * Format seconds to human readable text in a compact form:
 * s, m or H:m (not m:s or H:m:s)
 */
export const humanReadableTimeFromSeconds = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const totalMinutes = Math.floor(seconds / 60);
  let hours = Math.floor(totalMinutes / 60) || 0;
  const minutes = totalMinutes % 60;

  let displayTime = ``;
  if (hours > 0) {
    displayTime += `${hours}h `;
  }
  displayTime += `${minutes}m`;

  return displayTime;
};
