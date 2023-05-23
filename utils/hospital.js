export function calcDistance(coords1, coords2) {
  const diff1 = Math.abs(coords1[0] - coords2[0]);
  const diff2 = Math.abs(coords1[1] - coords2[1]);
  return Math.sqrt(Math.pow(diff1, 2) + Math.pow(diff2, 2));
}
