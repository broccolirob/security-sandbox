# Block One

## ERC20 `transfer()` and `transferFrom()`

Should return a boolean. Several tokens do not return a boolean on these functions. As a result, their calls in the contract might fail.

## ERC20 name, decimals, and symbol functions

Are present if used. These functions are optional in the ERC20 standard and might not be present.

## ERC20 `decimals()` returns a `uint8`

Several tokens incorrectly return a uint256. If this is the case, ensure the value returned is below 255.
