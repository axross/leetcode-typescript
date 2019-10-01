import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import distanceBetweenBusStops from "./distance_between_bus_stops.ts";

test("1184. Distance Between Bus Stops", () => {
  assert(distanceBetweenBusStops([1, 2, 3, 4], 0, 1) === 1);
  assert(distanceBetweenBusStops([1, 2, 3, 4], 0, 2) === 3);
  assert(distanceBetweenBusStops([1, 2, 3, 4], 0, 3) === 4);
});
