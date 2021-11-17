# Code Quality

## Function parameters

Ensure input validation for all function parameters especially if the visibility is external/public where (untrusted) users can control values. This is especially required for address parameters where maliciously/accidentally used incorrect/zero addresses can cause vulnerabilities or unexpected behavior.

### Notes references

- [Token approvals can be stolen in `DAOfiV1Router01.addLiquidity()`](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#token-approvals-can-be-stolen-in-daofiv1router01addliquidity)

## Function arguments

Ensure that the arguments to function calls at the caller sites are the correct ones and in the right order as expected by the function definition.

### Notes references

- [Reversed order of parameters in `allowance` function call](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#reversed-order-of-parameters-in-allowance-function-call)
- [`swapExactTokensForETH` checks the wrong return value](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#swapexacttokensforeth-checks-the-wrong-return-value)

## Function visibility

Ensure that the strictest visibility is used for the required functionality. An accidental external/public visibility will allow (untrusted) users to invoke functionality that is supposed to be restricted internally.

## Function modifiers

Ensure that the right set of function modifiers are used (in the correct order) for the specific functions so that the expected access control or validation is correctly enforced.

## Function return values

Ensure that the appropriate return value(s) are returned from functions and checked without ignoring at function call sites, so that error conditions are caught and handled appropriately.

### Notes references

- [Unhandled return values of `transfer` and `transferFrom`](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#unhandled-return-values-of-transfer-and-transferfrom)
- [ Error codes of Compound's `Comptroller.enterMarket`, `Comptroller.exitMarket` are not checked](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#error-codes-of-compounds-comptrollerentermarket-comptrollerexitmarket-are-not-checked)

## Function invocation timeliness

Externally accessible functions (external/public visibility) may be called at any time (or never). It is not safe to assume they will only be called at specific system phases (e.g. after initialization, when unpaused, during liquidation) that is meaningful to the system design. The reason for this can be accidental or malicious. Function implementation should be robust enough to track system state transitions, determine meaningful states for invocations and withstand arbitrary calls. For e.g., initialization functions (used with upgradeable contracts that cannot use constructors) are meant to be called atomically along with contract deployment to prevent anyone else from initializing with arbitrary values.

## Function invocation repetitiveness

Externally accessible functions (external/public visibility) may be called any number of times. It is not safe to assume they will only be called only once or a specific number of times that is meaningful to the system design. Function implementation should be robust enough to track, prevent, ignore or account for arbitrarily repetitive invocations. For e.g., initialization functions (used with upgradeable contracts that cannot use constructors) are meant to be called only once.

## Function invocation order

Externally accessible functions (external/public visibility) may be called in any order (with respect to other defined functions). It is not safe to assume they will only be called in the specific order that makes sense to the system design or is implicitly assumed in the code. For e.g., initialization functions (used with upgradeable contracts that cannot use constructors) are meant to be called before other system functions can be called.

## Function invocation arguments

Externally accessible functions (external/public visibility) may be called with any possible arguments. Without complete and proper validation (e.g. zero address checks, bound checks, threshold checks etc.), they cannot be assumed to comply with any assumptions made about them in the code.

## Conditionals

Ensure that in conditional expressions (e.g. if statements), the correct variables are being checked and the correct operators, if any, are being used to combine them. For e.g. using || instead of && is a common error.

## Access control specification

Ensure that the various system actors, their access control privileges and trust assumptions are accurately specified in great detail so that they are correctly implemented and enforced across different contracts, functions and system transitions/flows.

## Access control implementation

Ensure that the specified access control is implemented uniformly across all the subjects (actors) seeking access and objects (variables, functions) being accessed so that there are no paths/flows where the access control is missing or may be side-stepped.

## Missing modifiers

Access control is typically enforced on functions using modifiers that check if specific addresses/roles are calling these functions. Ensure that such modifiers are present on all relevant functions which require that specific access control.

## Incorrectly implemented modifiers

Access control is typically enforced on functions using modifiers that check if specific addresses/roles are calling these functions. A system can have multiple roles with different privileges. Ensure that modifiers are implementing the expected checks on the correct roles/addresses with the right composition e.g. incorrect use of || instead of && is a common vulnerability while composing access checks.

## Incorrectly used modifiers

Access control is typically enforced on functions using modifiers that check if specific addresses/roles are calling these functions. A system can have multiple roles with different privileges. Ensure that correct modifiers are used on functions requiring specific access control enforced by that modifier.

## Access control changes

Ensure that changes to access control (e.g. change of ownership to new addresses) are handled with extra security so that such transitions happen smoothly without contracts getting locked out or compromised due to use of incorrect credentials.
