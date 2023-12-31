import { truncate } from "../src/text"

const ADDRESS = "ollo1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v"

test("truncate", () => {
  expect(truncate(ADDRESS)).toBe("ollo1...20k38v")
  expect(truncate(ADDRESS, [6, 3])).toBe("ollo1...38v")
  expect(truncate("short")).toBe("short")
})
