import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import flipAndInvertImage from "./flipping_an_image.ts";

test("832. Flipping an Image", () => {
  assertEquals(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]), [
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ]);
  assertEquals(
    flipAndInvertImage([
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0]
    ]),
    [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
  );
});
