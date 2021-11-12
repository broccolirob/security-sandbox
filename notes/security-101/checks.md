# Intention Check

## Dangerous usage of `tx.origin`

Use of `tx.origin` for authorization may be abused by a MITM malicious contract forwarding calls from the legitimate user who interacts with it. Use `msg.sender` instead.

## Contract check

Checking if a call was made from an Externally Owned Account (EOA) or a contract account is typically done using `extcodesize` check which may be circumvented by a contract during construction when it does not have source code available. Checking if `tx.origin == msg.sender` is another option. Both have implications that need to be considered.

## Deleting a `mapping` within a `struct`

Deleting a `struct` that contains a `mapping` will not delete the `mapping` contents which may lead to unintended consequences.

## Tautology or contradiction

Tautologies (always true) or contradictions (always false) indicate potential flawed logic or redundant checks. e.g. `x >= 0` which is always true if `x` is `uint`.

## Boolean constant

Use of Boolean constants (`true`/`false`) in code (e.g. conditionals) is indicative of flawed logic.

## Boolean equality

Boolean variables can be checked within conditionals directly without the use of equality operators to `true`/`false`.

## State-modifying functions

Functions that modify state (in assembly or otherwise) but are labelled `constant`/`pure`/`view` revert in `solc >=0.5.0` (work in prior versions) because of the use of `STATICCALL` opcode.

## Return values of low-level calls

Ensure that return values of low-level calls (`call`/`callcode`/`delegatecall`/`send`/etc.) are checked to avoid unexpected failures.

## Account existence check for low-level calls

Low-level calls `call`/`delegatecall`/`staticcall` return true even if the account called is non-existent (per EVM design). Account existence must be checked prior to calling if needed.
