/**
 * Checks if the given value is valid cpf.
 * @param fullName
 * @returns
 */

export default function cof(
  value: unknown,
  options?: { requireMask: boolean },
): boolean {
  if (!value) return false;
  if (typeof value !== "string") return false;
  value = value.trim();
  if (options?.requireMask) {
    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value as string)) {
      return false;
    }
  }
  value = value?.toString()?.replace(/\D/g, "");
  let t = 0;
  let r;
  const invalidCPFs = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  if (invalidCPFs.includes(value as string)) return false;
  if ((value as string).length !== 11) return false;
  for (let i = 1; i <= 9; i++) {
    t = t + parseInt((value as string).substring(i - 1, i)) * (11 - i);
  }
  r = (t * 10) % 11;
  if (r === 10 || r === 11) {
    r = 0;
  }
  if (r !== parseInt((value as string).substring(9, 10))) return false;
  t = 0;
  for (let y = 1; y <= 10; y++) {
    t = t + parseInt((value as string).substring(y - 1, y)) * (12 - y);
  }
  r = (t * 10) % 11;
  if (r === 10 || r === 11) r = 0;
  if (r !== parseInt((value as string).substring(10, 11))) return false;
  return true;
}
