# Tokens & Ether

## ERC20 `transfer()` does not return boolean

Contracts compiled with `solc >= 0.4.22` interacting with such functions will revert. Use OpenZeppelin’s SafeERC20 wrappers.

### Notes references

- [Unhandled return values of `transfer` and `transferFrom`](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#unhandled-return-values-of-transfer-and-transferfrom)

## Incorrect return values for ERC721 `ownerOf()`

Contracts compiled with `solc >= 0.4.22` interacting with ERC721 `ownerOf()` that returns a `bool` instead of `address` type will revert. Use OpenZeppelin’s ERC721 contracts.

## Unexpected Ether and `this.balance`

A contract can receive Ether via `payable` functions, `selfdestruct()`, `coinbase` transaction or pre-sent before creation. Contract logic depending on `this.balance` can therefore be manipulated.

## `fallback` vs `receive()`

Check that all precautions and subtleties of `fallback` / `receive` functions related to visibility, state mutability and Ether transfers have been considered.

## Dangerous strict equalities

Use of strict equalities with tokens/Ether can accidentally/maliciously cause unexpected behavior. Consider using `>=` or `<=` instead of `==` for such variables depending on the contract logic.

## Locked Ether

Contracts that accept Ether via `payable` functions but without withdrawal mechanisms will lock up that Ether. Remove `payable` attribute or add withdraw function.
