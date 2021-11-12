## 4. Incorrect access control

Contract functions executing critical logic should have appropriate access control enforced via address checks (e.g. owner, controller etc.) typically in modifiers. Missing checks allow attackers to control critical logic.

## 5. Unprotected withdraw function

Unprotected (external/public) function calls sending Ether/tokens to user-controlled addresses may allow users to withdraw unauthorized funds.

## 6. Unprotected call to `selfdestruct`

A user/attacker can mistakenly/intentionally kill the contract. Protect access to such functions.

## 7. Modifier side-effects

Modifiers should only implement checks and not make state changes and external calls which violates the checks-effects-interactions pattern. These side-effects may go unnoticed by developers/auditors because the modifier code is typically far from the function implementation.

## 8. Incorrect modifier

If a modifier does not execute \_ or revert, the function using that modifier will return the default value causing unexpected behavior.
