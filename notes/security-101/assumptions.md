## 16. Private on-chain data

Marking variables private does not mean that they cannot be read on-chain. Private data should not be stored unencrypted in contract code or state but instead stored encrypted or off-chain.

## 17. Weak PRNG

PRNG relying on `block.timestamp`, `now` or `blockhash` can be influenced by miners to some extent and should be avoided.

## 18. Block values as time proxies

`block.timestamp` and `block.number` are not good proxies (i.e. representations, not to be confused with smart contract proxy/implementation pattern) for time because of issues with synchronization, miner manipulation and changing block times.
