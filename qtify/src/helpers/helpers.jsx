export function truncate(str = '', n = 40) {
  return str.length > n ? str.slice(0, n - 1) + '…' : str;
}
