# Proxy Contracts

## Unprotected initializers in proxy-based upgradeable contracts

Proxy-based upgradeable contracts need to use `public` initializer functions instead of constructors that need to be explicitly called only once. Preventing multiple invocations of such initializer functions (e.g. via `initializer` modifier from OpenZeppelin’s Initializable library) is a must.

## Initializing state-variables in proxy-based upgradeable contracts

This should be done in initializer functions and not as part of the state variable declarations in which case they won’t be set.

## Import upgradeable contracts in proxy-based upgradeable contracts

Contracts imported from proxy-based upgradeable contracts should also be upgradeable where such contracts have been modified to use initializers instead of constructors.

## Avoid `selfdestruct` or `delegatecall` in proxy-based upgradeable contracts

This will cause the logic contract to be destroyed and all contract instances will end up delegating calls to an address without any code.

## State variables in proxy-based upgradeable contracts

The declaration order/layout and type/mutability of state variables in such contracts should be preserved exactly while upgrading to prevent critical storage layout mismatch errors.

## Function ID collision between proxy/implementation in proxy-based upgradeable contracts

Malicious proxy contracts may exploit function ID collision to invoke unintended proxy functions instead of delegating to implementation functions. Check for function ID collisions.

## Function shadowing between proxy/contract in proxy-based upgradeable contracts

Shadow functions in proxy contract prevent functions in logic contract from being invoked.
