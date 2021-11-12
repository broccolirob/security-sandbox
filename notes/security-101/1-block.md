## 1. Solidity versions

Using very old versions of Solidity prevents benefits of bug fixes and newer security checks. Using the latest versions might make contracts susceptible to undiscovered compiler bugs. Consider using one of these versions: 0.7.5, 0.7.6 or 0.8.4 .

## 2. Unlocked pragma

Contracts should be deployed using the same compiler version/flags with which they have been tested. Locking the pragma (for e.g. by not using ^ in pragma solidity 0.5.10) ensures that contracts do not accidentally get deployed using an older compiler version with unfixed bugs.

## 3. Multiple Solidity pragma

It is better to use one Solidity compiler version across all contracts instead of different versions with different bugs and security checks.

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

## 9. Constructor names

Before solc 0.4.22, constructor names had to be the same name as the contract class containing it. Misnaming it wouldn’t make it a constructor which has security implications. Solc 0.4.22 introduced the constructor keyword. Until solc 0.5.0, contracts could have both old-style and new-style constructor names with the first defined one taking precedence over the second if both existed, which also led to security issues. Solc 0.5.0 forced the use of the constructor keyword.

## 10. Void constructor

Calls to base contract constructors that are unimplemented leads to misplaced assumptions. Check if the constructor is implemented or remove call if not.

## 11. Implicit constructor callValue check

The creation code of a contract that does not define a constructor but has a base that does, did not revert for calls with non-zero callValue when such a constructor was not explicitly payable. This is due to a compiler bug introduced in v0.4.5 and fixed in v0.6.8. Starting from Solidity 0.4.5 the creation code of contracts without explicit payable constructor is supposed to contain a callvalue check that results in contract creation reverting, if non-zero value is passed. However, this check was missing in case no explicit constructor was defined in a contract at all, but the contract has a base that does define a constructor. In these cases it is possible to send value in a contract creation transaction or using inline assembly without revert, even though the creation code is supposed to be non-payable.

## 12. Controlled delegatecall

`delegatecall()` or `callcode()` to an address controlled by the user allows execution of malicious contracts in the context of the caller’s state. Ensure trusted destination addresses for such calls.

## 13. Reentrancy vulnerabilities

Untrusted external contract calls could callback leading to unexpected results such as multiple withdrawals or out-of-order events. Use check-effects-interactions pattern or reentrancy guards.

## 14. ERC777 callbacks and reentrancy

ERC777 tokens allow arbitrary callbacks via hooks that are called during token transfers. Malicious contract addresses may cause reentrancy on such callbacks if reentrancy guards are not used.

## 15. Avoid `transfer()` / `send()` as reentrancy mitigations

Although `transfer()` and `send()` have been recommended as a security best-practice to prevent reentrancy attacks because they only forward 2300 gas, the gas repricing of opcodes may break deployed contracts. Use `call()` instead, without hardcoded gas limits along with checks-effects-interactions pattern or reentrancy guards for reentrancy protection.

## 16. Private on-chain data

Marking variables private does not mean that they cannot be read on-chain. Private data should not be stored unencrypted in contract code or state but instead stored encrypted or off-chain.

## 17. Weak PRNG

PRNG relying on `block.timestamp`, `now` or `blockhash` can be influenced by miners to some extent and should be avoided.

## 18. Block values as time proxies

`block.timestamp` and `block.number` are not good proxies (i.e. representations, not to be confused with smart contract proxy/implementation pattern) for time because of issues with synchronization, miner manipulation and changing block times.

## 19. Integer overflow/underflow

Not using OpenZeppelin’s SafeMath (or similar libraries) that check for overflows/underflows may lead to vulnerabilities or unexpected behavior if user/attacker can control the integer operands of such arithmetic operations. Solc v0.8.0 introduced default overflow/underflow checks for all arithmetic operations.

## 20. Divide before multiply

Performing multiplication before division is generally better to avoid loss of precision because Solidity integer division might truncate.
