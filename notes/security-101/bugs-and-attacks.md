# Bugs & Attacks

## Private on-chain data

Marking variables private does not mean that they cannot be read on-chain. Private data should not be stored unencrypted in contract code or state but instead stored encrypted or off-chain.

## Weak PRNG

PRNG relying on `block.timestamp`, `now` or `blockhash` can be influenced by miners to some extent and should be avoided.

## Block values as time proxies

`block.timestamp` and `block.number` are not good proxies (i.e. representations, not to be confused with smart contract proxy/implementation pattern) for time because of issues with synchronization, miner manipulation and changing block times.

## Integer overflow/underflow

Not using OpenZeppelin’s SafeMath (or similar libraries) that check for overflows/underflows may lead to vulnerabilities or unexpected behavior if user/attacker can control the integer operands of such arithmetic operations. Solc v0.8.0 introduced default overflow/underflow checks for all arithmetic operations.

## Divide before multiply

Performing multiplication before division is generally better to avoid loss of precision because Solidity integer division might truncate.

## Transaction order dependence

Race conditions can be forced on specific Ethereum transactions by monitoring the mempool. For example, the classic ERC20 `approve()` change can be front-run using this method. Do not make assumptions about transaction order dependence.

## ERC20 `approve()` race-condition

Use `safeIncreaseAllowance()` and `safeDecreaseAllowance()` from OpenZeppelin’s SafeERC20 implementation to prevent race conditions from manipulating the allowance amounts.

## Signature malleability

The `ecrecover` function is susceptible to signature malleability which could lead to replay attacks. Consider using OpenZeppelin’s ECDSA library.
