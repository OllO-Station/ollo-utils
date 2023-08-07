import currencies from "./currencies.json"

export const isDenomOllo = (string = "") => string === "uollo"

export const isDenomStation = (string = "") => string.startsWith("u") && string.length === 4 && currencies.includes(string.slice(1).toUpperCase())

export const isDenomIBC = (string = "") => string.startsWith("ibc/")

export const isDenomGamm = (string = "") => string.startsWith("gamm/")

export const isDenomFactory = (string = "") => string.startsWith("factory/")

// The cheqd blockchain uses the "n" prefix for the minimal
// denomination instead of the standard "u" prefix.
const isDenomCheq = (string = "") => "ncheq" === string

export const isDenomStationNative = (string = "") => isDenomOllo(string) || isDenomStation(string)

export const isDenom = (string = "") => string.startsWith("u") || isDenomCheq(string) || isDenomIBC(string) || isDenomGamm(string) || isDenomFactory(string)
