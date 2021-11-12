## 48. Dangerous unary expressions

Unary expressions such as `x =+ 1` are likely errors where the programmer really meant to use `x += 1`. Unary `+` operator was deprecated in `solc v0.5.0`.

## 49. Missing zero address validation

Setters of address type parameters should include a zero-address check otherwise contract functionality may become inaccessible or tokens burnt forever.

## 50. Critical address change

Changing critical addresses in contracts should be a two-step process where the first transaction (from the old/current address) registers the new address (i.e. grants ownership) and the second transaction (from the new address) replaces the old address with the new one (i.e. claims ownership). This gives an opportunity to recover from incorrect addresses mistakenly used in the first step. If not, contract functionality might become inaccessible.

# Best Practices

## `assert()` / `require()` state change

Invariants in `assert()` and `require()` statements should not modify the state per best practices.

## `require()` vs `assert()`

`require()` should be used for checking error conditions on inputs and return values while `assert()` should be used for invariant checking. Between solc 0.4.10 and 0.8.0, `require()` used `REVERT` (0xfd) opcode which refunded remaining gas on failure while `assert()` used `INVALID` (0xfe) opcode which consumed all the supplied gas.

## Deprecated keywords

Use of deprecated functions/operators such as `block.blockhash()` for `blockhash()`, `msg.gas` for `gasleft()`, `throw` for `revert()`, `sha3()` for `keccak256()`, `callcode()` for `delegatecall()`, `suicide()` for `selfdestruct()`, `constant` for `view` or `var` for actual type name should be avoided to prevent unintended errors with newer compiler versions.

## Function default visibility

Functions without a visibility type specifier are `public` by default in `solc < 0.5.0`. This can lead to a vulnerability where a malicious user may make unauthorized state changes. `solc >= 0.5.0` requires explicit function visibility specifiers.

## Incorrect inheritance order

Contracts inheriting from multiple contracts with identical functions should specify the correct inheritance order i.e. more general to more specific to avoid inheriting the incorrect function implementation.

## Missing inheritance

A contract might appear (based on name or functions implemented) to inherit from another interface or abstract contract without actually doing so.

## Insufficient gas griefing

Transaction relayers need to be trusted to provide enough gas for the transaction to succeed.

## Modifying reference type parameters

Structs/Arrays/Mappings passed as arguments to a function may be by value (memory) or reference (storage) as specified by the data location (optional before `solc 0.5.0`). Ensure correct usage of memory and storage in function parameters and make all data locations explicit.
