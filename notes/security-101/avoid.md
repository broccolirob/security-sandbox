# Things to Avoid

## Arbitrary jump with function type variable

Function type variables should be carefully handled and avoided in assembly manipulations to prevent jumps to arbitrary code locations.

## Hash collisions with multiple variable length arguments

Using `abi.encodePacked()` with multiple variable length arguments can, in certain situations, lead to a hash collision. Do not allow users access to parameters used in `abi.encodePacked()`, use fixed length arrays or use `abi.encode()`.

## Malleability risk from dirty high order bits

Types that do not occupy the full 32 bytes might contain “dirty higher order bits” which does not affect operation on types but gives different results with `msg.data`.

## Incorrect shift in assembly

Shift operators (`shl(x, y)`, `shr(x, y)`, `sar(x, y)`) in Solidity assembly apply the shift operation of x bits on y and not the other way around, which may be confusing. Check if the values in a shift operation are reversed.

## Assembly usage

Use of EVM assembly is error-prone and should be avoided or double-checked for correctness.

## Right-to-left-override control character (U+202E)

Malicious actors can use the Right-To-Left-Override unicode character to force RTL text rendering and confuse users as to the real intent of a contract. U+202E character should not appear in the source code of a smart contract.
