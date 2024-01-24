export function convertMinutes(mins: number) {
  const minutesInYear = 525600;
  const minutesInMonth = 43800;
  const minutesInDay = 1440;
  const minutesInHour = 60;

  let years = Math.floor(mins / minutesInYear);
  mins %= minutesInYear;

  let months = Math.floor(mins / minutesInMonth);
  mins %= minutesInMonth;

  let days = Math.floor(mins / minutesInDay);
  mins %= minutesInDay;

  let hours = Math.floor(mins / minutesInHour);
  mins %= minutesInHour;

  let timeString = "";
  timeString += years > 0 ? `${years} years, ` : "";
  timeString += months > 0 ? `${months} months, ` : "";
  timeString += days > 0 ? `${days} days, ` : "";
  timeString += hours > 0 ? `${hours} hours, ` : "";
  timeString += mins > 0 ? `${mins} minutes` : "";

  // Removing any trailing commas and spaces
  return timeString.replace(/,\s*$/, "");
}
