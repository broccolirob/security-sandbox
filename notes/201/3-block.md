## 142. Function return values

Ensure that the appropriate return value(s) are returned from functions and checked without ignoring at function call sites, so that error conditions are caught and handled appropriately.

## 143. Function invocation timeliness

Externally accessible functions (external/public visibility) may be called at any time (or never). It is not safe to assume they will only be called at specific system phases (e.g. after initialization, when unpaused, during liquidation) that is meaningful to the system design. The reason for this can be accidental or malicious. Function implementation should be robust enough to track system state transitions, determine meaningful states for invocations and withstand arbitrary calls. For e.g., initialization functions (used with upgradeable contracts that cannot use constructors) are meant to be called atomically along with contract deployment to prevent anyone else from initializing with arbitrary values.

## 144. Function invocation repetitiveness

Externally accessible functions (external/public visibility) may be called any number of times. It is not safe to assume they will only be called only once or a specific number of times that is meaningful to the system design. Function implementation should be robust enough to track, prevent, ignore or account for arbitrarily repetitive invocations. For e.g., initialization functions (used with upgradeable contracts that cannot use constructors) are meant to be called only once.

## 145. Function invocation order

Externally accessible functions (external/public visibility) may be called in any order (with respect to other defined functions). It is not safe to assume they will only be called in the specific order that makes sense to the system design or is implicitly assumed in the code. For e.g., initialization functions (used with upgradeable contracts that cannot use constructors) are meant to be called before other system functions can be called.

## 146. Function invocation arguments

Externally accessible functions (external/public visibility) may be called with any possible arguments. Without complete and proper validation (e.g. zero address checks, bound checks, threshold checks etc.), they cannot be assumed to comply with any assumptions made about them in the code.

## 147. Conditionals

Ensure that in conditional expressions (e.g. if statements), the correct variables are being checked and the correct operators, if any, are being used to combine them. For e.g. using || instead of && is a common error.

## 148. Access control specification

Ensure that the various system actors, their access control privileges and trust assumptions are accurately specified in great detail so that they are correctly implemented and enforced across different contracts, functions and system transitions/flows.

## 149. Access control implementation

Ensure that the specified access control is implemented uniformly across all the subjects (actors) seeking access and objects (variables, functions) being accessed so that there are no paths/flows where the access control is missing or may be side-stepped.

## 150. Missing modifiers

Access control is typically enforced on functions using modifiers that check if specific addresses/roles are calling these functions. Ensure that such modifiers are present on all relevant functions which require that specific access control.

## 151. Incorrectly implemented modifiers

Access control is typically enforced on functions using modifiers that check if specific addresses/roles are calling these functions. A system can have multiple roles with different privileges. Ensure that modifiers are implementing the expected checks on the correct roles/addresses with the right composition e.g. incorrect use of || instead of && is a common vulnerability while composing access checks.

## 152. Incorrectly used modifiers

Access control is typically enforced on functions using modifiers that check if specific addresses/roles are calling these functions. A system can have multiple roles with different privileges. Ensure that correct modifiers are used on functions requiring specific access control enforced by that modifier.

## 153. Access control changes

Ensure that changes to access control (e.g. change of ownership to new addresses) are handled with extra security so that such transitions happen smoothly without contracts getting locked out or compromised due to use of incorrect credentials.

## 154. Comments

Ensure that the code is well commented both with NatSpec and inline comments for better readability and maintainability. The comments should accurately reflect what the corresponding code does. Stale comments should be removed. Discrepancies between code and comments should be addressed. Any TODO’s indicated by comments should be addressed. Commented code should be removed.

## 155. Tests

Tests indicate that the system implementation has been validated against the specification. Unit tests, functional tests and integration tests should have been performed to achieve good test coverage across the entire codebase. Any code or parameterisation used specifically for testing should be removed from production code.

## 156. Unused constructs

Any unused imports, inherited contracts, functions, parameters, variables, modifiers, events or return values should be removed (or used appropriately) after careful evaluation. This will not only reduce gas costs but improve readability and maintainability of the code.

## 157. Redundant constructs

Redundant code and comments can be confusing and should be removed (or changed appropriately) after careful evaluation. This will not only reduce gas costs but improve readability and maintainability of the code.

## 158. ETH Handling

Contracts that accept/manage/transfer ETH should ensure that functions handling ETH are using msg.value appropriately, logic that depends on ETH value accounts for less/more ETH sent, logic that depends on contract ETH balance accounts for the different direct/indirect (e.g. coinbase transaction, selfdestruct recipient) ways of receiving ETH and transfers are reentrancy safe. Functions handling ETH should be checked extra carefully for access control, input validation and error handling.

## 159. Token Handling

Contracts that accept/manage/transfer ERC tokens should ensure that functions handling tokens account for different types of ERC tokens (e.g. ERC20 vs ERC777), deflationary/inflationary tokens, rebasing tokens and trusted/external tokens. Functions handling tokens should be checked extra carefully for access control, input validation and error handling.

## 160. Trusted actors

Ideally there should be no trusted actors while interacting with smart contracts. However, in guarded launch scenarios, the goal is to start with trusted actors and then progressively decentralise towards automated governance by community/DAO. For the trusted phase, all the trusted actors, their roles and capabilities should be clearly specified, implemented accordingly and documented for user information and examination.

## 161. Privileged roles and EOAs

Trusted actors who have privileged roles with capabilities to deploy contracts, change critical parameters, pause/unpause system, trigger emergency shutdown, withdraw/transfer/drain funds and allow/deny other actors should be addresses controlled by multiple, independent, mutually distrusting entities. They should not be controlled by private keys of EOAs but with Multisigs with a high threshold (e.g. 5-of-7, 9-of-11) and eventually by a DAO of token holders. EOA has a single point of failure.
