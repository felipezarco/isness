/**
 * Checks if the given value is valid cnpj.
 * @param value
 * @returns boolean
 */
export default function cnpj(
  value: unknown,
  options?: { requireMask: boolean },
): boolean {
  if (!value) return false;
  if (typeof value !== "string") return false;
  value = value.trim();
  if (options?.requireMask) {
    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(value as string)) {
      return false;
    }
  }
  value = (value as string).toString().replace(/[^\d]+/g, "");
  if ((value as string) === "" || (value as string).length !== 14) return false;
  const invalidCNPJs = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];
  if (invalidCNPJs.includes(value as string)) return false;
  let s = (value as string).length - 2;
  let numbers = (value as string).substring(0, s);
  const d = (value as string).substring(s);
  let t = 0;
  let p = s - 7;
  for (let i = s; i >= 1; i--) {
    /* @ts-ignore */
    t += numbers.charAt(s - i) * p--;
    if (p < 2) p = 9;
  }
  let r = t % 11 < 2 ? 0 : 11 - t % 11;
  if (String(r) !== d.charAt(0)) return false;
  s = s + 1;
  numbers = (value as string).substring(0, s);
  t = 0;
  p = s - 7;
  for (let i = s; i >= 1; i--) {
    /* @ts-ignore */
    t += numbers.charAt(s - i) * p--;
    if (p < 2) p = 9;
  }
  r = t % 11 < 2 ? 0 : 11 - t % 11;
  if (String(r) !== d.charAt(1)) return false;
  return true;
}
