## 102. ERC20 `transfer()` and `transferFrom()`

Should return a boolean. Several tokens do not return a boolean on these functions. As a result, their calls in the contract might fail.

## 103. ERC20 `name()`, `decimals()`, and `symbol()` functions

Are present if used. These functions are optional in the ERC20 standard and might not be present.

## 104. ERC20 `decimals()` returns a `uint8`

Several tokens incorrectly return a uint256. If this is the case, ensure the value returned is below 255.

## 105. ERC20 `approve()` race-condition

The ERC20 standard has a known ERC20 race condition that must be mitigated to prevent attackers from stealing tokens.

## 106. ERC777 hooks

ERC777 tokens have the concept of a hook function that is called before any calls to send, transfer, operatorSend, minting and burning. While these hooks enable a lot of interesting use cases, care should be taken to make sure they do not make external calls because that can lead to reentrancy.

## 107. Token deflation via fees

Transfer and transferFrom should not take a fee. Deflationary tokens can lead to unexpected behavior.

## 108. Token inflation via interest

Potential interest earned from the token should be taken into account. Some tokens distribute interest to token holders. This interest might be trapped in the contract if not taken into account.

## 109. Token contract avoids unneeded complexity

The token should be a simple contract; a token with complex code requires a higher standard of review.

## 110. Token contract has only a few non-token-related functions

Non–token-related functions increase the likelihood of an issue in the contract.

## 111. Token only has one address

Tokens with multiple entry points for balance updates can break internal bookkeeping based on the address (e.g. `balances[token_address][msg.sender]` might not reflect the actual balance).

## 112. Token is not upgradeable

Upgradeable contracts might change their rules over time.

## 113. Token owner has limited minting capabilities

Malicious or compromised owners can abuse minting capabilities.

## 114. Token is not pausable

Malicious or compromised owners can trap contracts relying on pausable tokens.

## 115. Token owner cannot blacklist the contract

Malicious or compromised owners can trap contracts relying on tokens with a blacklist.

## 116. Token development team is known and can be held responsible for abuse

Contracts with anonymous development teams, or that reside in legal shelters should require a higher standard of review.

## 117. No token user owns most of the supply

If a few users own most of the tokens, they can influence operations based on the token's repartition.

## 118. Token total supply is sufficient

Tokens with a low total supply can be easily manipulated.

## 119. Tokens are located in more than a few exchanges

If all the tokens are in one exchange, a compromise of the exchange can compromise the contract relying on the token.

## 120. Token balance and flash loans

Users understand the associated risks of large funds or flash loans. Contracts relying on the token balance must carefully take in consideration attackers with large funds or attacks through flash loans.

## 121. Token does not allow flash minting

Flash minting can lead to substantial swings in the balance and the total supply, which necessitate strict and comprehensive overflow checks in the operation of the token.
