export const truncateString = (str: string, n: number = 50) =>
  str.length > n ? str.substring(0, n - 1).trimEnd() + '...' : str
