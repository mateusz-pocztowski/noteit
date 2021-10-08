export const sortBy = (
  a: string | number | Date,
  b: string | number | Date,
  order: -1 | 1
) => {
  if (
    (typeof a === 'number' && typeof b === 'number') ||
    (a instanceof Date && b instanceof Date) ||
    (Date.parse(String(a)) && Date.parse(String(b)))
  ) {
    if (a < b) {
      return -1 * order
    }
    if (a > b) {
      return 1 * order
    }
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return (
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      }) * order
    )
  }

  return 0
}
