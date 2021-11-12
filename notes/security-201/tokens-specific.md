# Token Specific Considerations

## ERC20 `transfer()` and `transferFrom()`

Should return a boolean. Several tokens do not return a boolean on these functions. As a result, their calls in the contract might fail.

## ERC20 `name()`, `decimals()`, and `symbol()` functions

Are present if used. These functions are optional in the ERC20 standard and might not be present.

## ERC20 `decimals()` returns a `uint8`

Several tokens incorrectly return a uint256. If this is the case, ensure the value returned is below 255.

## ERC20 `approve()` race-condition

The ERC20 standard has a known ERC20 race condition that must be mitigated to prevent attackers from stealing tokens.

## ERC777 hooks

ERC777 tokens have the concept of a hook function that is called before any calls to send, transfer, operatorSend, minting and burning. While these hooks enable a lot of interesting use cases, care should be taken to make sure they do not make external calls because that can lead to reentrancy.
