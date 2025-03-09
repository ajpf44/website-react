export const arrayToPortuguese = (arr: string[]): string =>
  arr.reduce((pStr, nStr, i) => {
    if (i + 1 == arr.length) return `${pStr} e ${nStr}`;

    return `${pStr}, ${nStr}`;
  });
