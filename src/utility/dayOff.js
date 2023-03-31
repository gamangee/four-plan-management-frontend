export default function getDayOff(startDay, endDay) {
  const startDate = new Date(startDay);
  const endDate = new Date(endDay);

  let diffInDays = Math.floor(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  let weekends = 0;
  for (let i = 0; i <= diffInDays; i++) {
    const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    const currentDay = currentDate.getDay();
    if (currentDay === 0 || currentDay === 6) {
      // 0 = Sunday, 6 = Saturday
      weekends++;
    }
  }
  let result;
  result = diffInDays - weekends;

  if (result < 0) return;

  return result + 1;
}
