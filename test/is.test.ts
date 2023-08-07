import { isDenom, isDenomStation } from "../src/is"

test("isDenomStation", () => {
  expect(isDenomStation("uusd")).toBeTruthy()
  expect(isDenomStation("uollo")).toBeFalsy()
})

test("isDenom", () => {
  expect(isDenom("uusd")).toBeTruthy()
  expect(isDenom("uollo")).toBeTruthy()
  expect(isDenom("ncheq")).toBeTruthy()
})
