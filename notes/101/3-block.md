## 41. Pre-declaration usage of local variables

Usage of a variable before its declaration (either declared later or in another scope) leads to unexpected behavior in `solc < 0.5.0` but `solc >= 0.5.0` implements C99-style scoping rules where variables can only be used after they have been declared and only in the same or nested scopes.

## 42. Costly operations inside a loop

Operations such as state variable updates (use `SSTORE`s) inside a loop cost a lot of gas, are expensive and may lead to out-of-gas errors. Optimizations using local variables are preferred.

## 43. Calls inside a loop

Calls to external contracts inside a loop are dangerous (especially if the loop index can be user-controlled) because it could lead to DoS if one of the calls reverts or execution runs out of gas. Avoid calls within loops, check that loop index cannot be user-controlled or is bounded.

## 44. DoS with block gas limit

Programming patterns such as looping over arrays of unknown size may lead to DoS when the gas cost of execution exceeds the block gas limit.

## 45. Missing events

Events for critical state changes (e.g. owner and other critical parameters) should be emitted for tracking this off-chain.

## 46. Unindexed event parameters

Parameters of certain events are expected to be indexed (e.g. ERC20 Transfer/Approval events) so that they’re included in the block’s bloom filter for faster access. Failure to do so might confuse off-chain tooling looking for such indexed events.

## 47. Incorrect event signature in libraries

Contract types used in events in libraries cause an incorrect event signature hash. Instead of using the type `address` in the hashed signature, the actual contract name was used, leading to a wrong hash in the logs. This is due to a compiler bug introduced in `v0.5.0` and fixed in `v0.5.8`.

## 48. Dangerous unary expressions

Unary expressions such as `x =+ 1` are likely errors where the programmer really meant to use `x += 1`. Unary `+` operator was deprecated in `solc v0.5.0`.

## 49. Missing zero address validation

Setters of address type parameters should include a zero-address check otherwise contract functionality may become inaccessible or tokens burnt forever.

## 50. Critical address change

Changing critical addresses in contracts should be a two-step process where the first transaction (from the old/current address) registers the new address (i.e. grants ownership) and the second transaction (from the new address) replaces the old address with the new one (i.e. claims ownership). This gives an opportunity to recover from incorrect addresses mistakenly used in the first step. If not, contract functionality might become inaccessible.

## 51. `assert()` / `require()` state change

Invariants in `assert()` and `require()` statements should not modify the state per best practices.

## 52. `require()` vs `assert()`

`require()` should be used for checking error conditions on inputs and return values while `assert()` should be used for invariant checking. Between solc 0.4.10 and 0.8.0, `require()` used `REVERT` (0xfd) opcode which refunded remaining gas on failure while `assert()` used `INVALID` (0xfe) opcode which consumed all the supplied gas.

## 53. Deprecated keywords

Use of deprecated functions/operators such as `block.blockhash()` for `blockhash()`, `msg.gas` for `gasleft()`, `throw` for `revert()`, `sha3()` for `keccak256()`, `callcode()` for `delegatecall()`, `suicide()` for `selfdestruct()`, `constant` for `view` or `var` for actual type name should be avoided to prevent unintended errors with newer compiler versions.

## 54. Function default visibility

Functions without a visibility type specifier are `public` by default in `solc < 0.5.0`. This can lead to a vulnerability where a malicious user may make unauthorized state changes. `solc >= 0.5.0` requires explicit function visibility specifiers.

## 55. Incorrect inheritance order

Contracts inheriting from multiple contracts with identical functions should specify the correct inheritance order i.e. more general to more specific to avoid inheriting the incorrect function implementation.

## 56. Missing inheritance

A contract might appear (based on name or functions implemented) to inherit from another interface or abstract contract without actually doing so.

## 57. Insufficient gas griefing

Transaction relayers need to be trusted to provide enough gas for the transaction to succeed.

## 58. Modifying reference type parameters

Structs/Arrays/Mappings passed as arguments to a function may be by value (memory) or reference (storage) as specified by the data location (optional before `solc 0.5.0`). Ensure correct usage of memory and storage in function parameters and make all data locations explicit.

## 59. Arbitrary jump with function type variable

Function type variables should be carefully handled and avoided in assembly manipulations to prevent jumps to arbitrary code locations.

## 60. Hash collisions with multiple variable length arguments

Using `abi.encodePacked()` with multiple variable length arguments can, in certain situations, lead to a hash collision. Do not allow users access to parameters used in `abi.encodePacked()`, use fixed length arrays or use `abi.encode()`.
