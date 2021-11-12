## 21. Transaction order dependence

Race conditions can be forced on specific Ethereum transactions by monitoring the mempool. For example, the classic ERC20 `approve()` change can be front-run using this method. Do not make assumptions about transaction order dependence.

## 22. ERC20 `approve()` race-condition

Use `safeIncreaseAllowance()` and `safeDecreaseAllowance()` from OpenZeppelin’s SafeERC20 implementation to prevent race conditions from manipulating the allowance amounts.

## 23. Signature malleability

The `ecrecover` function is susceptible to signature malleability which could lead to replay attacks. Consider using OpenZeppelin’s ECDSA library.
