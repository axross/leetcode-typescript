// 1184. Distance Between Bus Stops
// https://leetcode.com/problems/distance-between-bus-stops/
export default function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  const lessIndex = Math.min(start, destination);
  const moreIndex = lessIndex === start ? destination : start;

  let clockwise = 0;
  let counterclockwise = 0;

  for (let i = 0; i < distance.length; ++i) {
    if (i < lessIndex || i >= moreIndex) {
      counterclockwise += distance[i];
    } else {
      clockwise += distance[i];
    }
  }

  return Math.min(clockwise, counterclockwise);
}
