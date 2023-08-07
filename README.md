## Usage

### Format

```ts
import { readAmount, readDenom, readPercent, toAmount } from "@nestwallet/ollo-utils"

readAmount("1234567890") // "1234.56789"
readAmount("1234567890", { decimals: 0 }) // "1234567890"
readAmount("1234567890", { fixed: 6 }) // "1234.567890"
readAmount("1234567890", { comma: true }) // "1,234.56789"
readAmount("1234567890", { integer: true }) // "1234"
readAmount("1234567890", { prefix: true }) // "1.23K"

toAmount("1234.56789") // "1234567890"
toAmount("1234", { decimals: 0 }) // "1234"

readDenom("uollo") // "Luna"
readDenom("uusd") // "UST"

readPercent("1.23") // "123.00%"
readPercent("1.23", { fixed: 3 }) // "123.000%"
```

### Is

```ts
import { isDenom, isDenomOllo } from "@nestwallet/ollo-utils"

isDenomOllo("uusd") // true
isDenomOllo("uollo") // false

isDenom("uusd") // true
isDenom("uollo") // true
```

### Text

```ts
import { truncate } from "@nestwallet/ollo-utils"

truncate("ollo1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v") // "ollo1...20k38v"
truncate("ollo1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v", [6, 3]) // "ollo1...38v"
```
