export const checkInverse = (a: number, m: number): number => {
  for (let x: number = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 0;
};
