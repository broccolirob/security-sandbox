## 21. Transaction order dependence

Race conditions can be forced on specific Ethereum transactions by monitoring the mempool. For example, the classic ERC20 `approve()` change can be front-run using this method. Do not make assumptions about transaction order dependence.

## 22. ERC20 `approve()` race-condition

Use `safeIncreaseAllowance()` and `safeDecreaseAllowance()` from OpenZeppelin’s SafeERC20 implementation to prevent race conditions from manipulating the allowance amounts.

## 23. Signature malleability

The `ecrecover` function is susceptible to signature malleability which could lead to replay attacks. Consider using OpenZeppelin’s ECDSA library.

## 24. ERC20 `transfer()` does not return boolean

Contracts compiled with `solc >= 0.4.22` interacting with such functions will revert. Use OpenZeppelin’s SafeERC20 wrappers.

## 25. Incorrect return values for ERC721 `ownerOf()`

Contracts compiled with `solc >= 0.4.22` interacting with ERC721 `ownerOf()` that returns a `bool` instead of `address` type will revert. Use OpenZeppelin’s ERC721 contracts.

## 26. Unexpected Ether and `this.balance`

A contract can receive Ether via `payable` functions, `selfdestruct()`, `coinbase` transaction or pre-sent before creation. Contract logic depending on `this.balance` can therefore be manipulated.

## 27. `fallback` vs `receive()`

Check that all precautions and subtleties of `fallback` / `receive` functions related to visibility, state mutability and Ether transfers have been considered.

## 28. Dangerous strict equalities

Use of strict equalities with tokens/Ether can accidentally/maliciously cause unexpected behavior. Consider using `>=` or `<=` instead of `==` for such variables depending on the contract logic.

## 29. Locked Ether

Contracts that accept Ether via `payable` functions but without withdrawal mechanisms will lock up that Ether. Remove `payable` attribute or add withdraw function.

## 30. Dangerous usage of `tx.origin`

Use of `tx.origin` for authorization may be abused by a MITM malicious contract forwarding calls from the legitimate user who interacts with it. Use `msg.sender` instead.

## 31. Contract check

Checking if a call was made from an Externally Owned Account (EOA) or a contract account is typically done using `extcodesize` check which may be circumvented by a contract during construction when it does not have source code available. Checking if `tx.origin == msg.sender` is another option. Both have implications that need to be considered.

## 32. Deleting a `mapping` within a `struct`

Deleting a `struct` that contains a `mapping` will not delete the `mapping` contents which may lead to unintended consequences.

## 33. Tautology or contradiction

Tautologies (always true) or contradictions (always false) indicate potential flawed logic or redundant checks. e.g. `x >= 0` which is always true if `x` is `uint`.

## 34. Boolean constant

Use of Boolean constants (`true`/`false`) in code (e.g. conditionals) is indicative of flawed logic.

## 35. Boolean equality

Boolean variables can be checked within conditionals directly without the use of equality operators to `true`/`false`.

## 36. State-modifying functions

Functions that modify state (in assembly or otherwise) but are labelled `constant`/`pure`/`view` revert in `solc >=0.5.0` (work in prior versions) because of the use of `STATICCALL` opcode.

## 37. Return values of low-level calls

Ensure that return values of low-level calls (`call`/`callcode`/`delegatecall`/`send`/etc.) are checked to avoid unexpected failures.

## 38. Account existence check for low-level calls

Low-level calls `call`/`delegatecall`/`staticcall` return true even if the account called is non-existent (per EVM design). Account existence must be checked prior to calling if needed.

## 39. Dangerous shadowing

Local variables, state variables, functions, modifiers, or events with names that shadow (i.e. override) builtin Solidity symbols e.g. `now` or other declarations from the current scope are misleading and may lead to unexpected usages and behavior.

## 40. Dangerous state variable shadowing

Shadowing state variables in derived contracts may be dangerous for critical variables such as contract owner (for e.g. where modifiers in base contracts check on base variables but shadowed variables are set mistakenly) and contracts incorrectly use base/shadowed variables. Do not shadow state variables.
