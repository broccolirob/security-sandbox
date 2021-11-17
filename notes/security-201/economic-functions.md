# Economic Functions

## ETH Handling

Contracts that accept/manage/transfer ETH should ensure that functions handling ETH are using msg.value appropriately, logic that depends on ETH value accounts for less/more ETH sent, logic that depends on contract ETH balance accounts for the different direct/indirect (e.g. coinbase transaction, selfdestruct recipient) ways of receiving ETH and transfers are reentrancy safe. Functions handling ETH should be checked extra carefully for access control, input validation and error handling.

## Token Handling

Contracts that accept/manage/transfer ERC tokens should ensure that functions handling tokens account for different types of ERC tokens (e.g. ERC20 vs ERC777), deflationary/inflationary tokens, rebasing tokens and trusted/external tokens. Functions handling tokens should be checked extra carefully for access control, input validation and error handling.

### Notes references

- [Unhandled return values of `transfer` and `transferFrom`](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#unhandled-return-values-of-transfer-and-transferfrom)
- [Tokens with more than 18 decimal points will cause issues](https://github.com/broccolirob/audit-sandbox/blob/master/notes/audit-findings-101/1-block.md#tokens-with-more-than-18-decimal-points-will-cause-issues)
