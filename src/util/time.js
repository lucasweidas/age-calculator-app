export function getPassedTime(year, month, day) {
  const birthDate = Date.UTC(year, month - 1, day);
  const now = Date.now();
  const diff = now - birthDate;

  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hh = Math.floor(min / 60);
  const dd = Math.floor(hh / 24);
  const mm = Math.floor(dd / 30);
  const yyyy = Math.floor(mm / 12);
  return { sec, min, hh, dd, mm, yyyy };
}
