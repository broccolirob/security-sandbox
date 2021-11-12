# Constructors

## Constructor names

Before solc 0.4.22, constructor names had to be the same name as the contract class containing it. Misnaming it wouldn’t make it a constructor which has security implications. Solc 0.4.22 introduced the constructor keyword. Until solc 0.5.0, contracts could have both old-style and new-style constructor names with the first defined one taking precedence over the second if both existed, which also led to security issues. Solc 0.5.0 forced the use of the constructor keyword.

## Void constructor

Calls to base contract constructors that are unimplemented leads to misplaced assumptions. Check if the constructor is implemented or remove call if not.

## Implicit constructor callValue check

The creation code of a contract that does not define a constructor but has a base that does, did not revert for calls with non-zero callValue when such a constructor was not explicitly payable. This is due to a compiler bug introduced in v0.4.5 and fixed in v0.6.8. Starting from Solidity 0.4.5 the creation code of contracts without explicit payable constructor is supposed to contain a callvalue check that results in contract creation reverting, if non-zero value is passed. However, this check was missing in case no explicit constructor was defined in a contract at all, but the contract has a base that does define a constructor. In these cases it is possible to send value in a contract creation transaction or using inline assembly without revert, even though the creation code is supposed to be non-payable.
